require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const http = require('http');
const { Server } = require('socket.io');
const passport = require('passport');
const session = require('express-session');

require('./config/passport'); // Google strategy configuration

const app = express();

// Security and performance middleware
app.use(helmet());
app.use(compression()); // Compress responses

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs for auth routes
  message: 'Too many login attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to auth routes
app.use('/api/auth', authLimiter);

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://custom-web-frontend.onrender.com',
    'https://capitalcove.me',
    'https://www.capitalcove.me'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
}));

// Body parsing middleware with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Session middleware for Passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Request timeout middleware
app.use((req, res, next) => {
  req.setTimeout(30000, () => {
    res.status(408).json({ message: 'Request timeout' });
  });
  next();
});

// Handle preflight requests
app.options('*', cors());

// Placeholder route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// JWT middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied.' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid.' });
  }
}

// MongoDB connection with optimized settings
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  bufferCommands: false, // Disable mongoose buffering
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

const PORT = process.env.PORT || 5000;
app.use('/api/auth', authRoutes);

// Protected user dashboard route with caching
app.get('/api/dashboard', authMiddleware, async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      const userCount = await User.countDocuments();
      const dbUser = await User.findById(req.user.id).select('-password').lean();
      if (!dbUser) {
        return res.status(404).json({ message: 'User not found.' });
      }
      return res.json({
        message: 'Welcome to the admin dashboard!',
        user: dbUser,
        stats: {
          userCount,
        }
      });
    }
    const dbUser = await User.findById(req.user.id).select('-password').lean();
    if (!dbUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json({ message: 'Welcome to your dashboard!', user: dbUser });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000',
      'https://custom-web-frontend.onrender.com',
      'https://capitalcove.me'
    ],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Simple in-memory chat (for demo)
let chatHistory = [];

io.on('connection', (socket) => {
  // Send chat history to the newly connected client
  socket.emit('chat history', chatHistory);

  // Listen for new messages
  socket.on('chat message', (msg) => {
    chatHistory.push(msg);
    // Limit history size
    if (chatHistory.length > 100) chatHistory.shift();
    io.emit('chat message', msg); // Broadcast to all
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 