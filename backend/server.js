require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const http = require('http');
const { Server } = require('socket.io');
const passport = require('passport');
const session = require('express-session');

require('./config/passport'); // Google strategy configuration

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://custom-web-frontend.onrender.com',
    'https://capitalcove.me'
  ],
  credentials: true
}));
app.use(express.json());

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

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.use('/api/auth', authRoutes);

// Protected user dashboard route
app.get('/api/dashboard', authMiddleware, async (req, res) => {
  if (req.user.role === 'admin') {
    const userCount = await User.countDocuments();
    // You can add more stats here (e.g., projectCount) if you have those models
    const dbUser = await User.findById(req.user.id).select('-password');
    if (!dbUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.json({
      message: 'Welcome to the admin dashboard!',
      user: dbUser,
      stats: {
        userCount,
        // projectCount: ...
      }
    });
  }
  const dbUser = await User.findById(req.user.id).select('-password');
  if (!dbUser) {
    return res.status(404).json({ message: 'User not found.' });
  }
  res.json({ message: 'Welcome to your dashboard!', user: dbUser });
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