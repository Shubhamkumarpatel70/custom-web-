const express = require('express');
const router = express.Router();
const { registerUser, loginUser, registerAdmin, updateUserProfile, changeUserPassword, getUserNotifications, markNotificationRead, cancelUserSubscription, renewUserSubscription } = require('../controllers/authController');
const Subscription = require('../models/Subscription');
const jwt = require('jsonwebtoken');
const Plan = require('../models/Plan');
const Contact = require('../models/Contact');
const Notification = require('../models/Notification');
const User = require('../models/User');
const cookieParser = require('cookie-parser');
const Complaint = require('../models/Complaint');
const passport = require('passport');

router.use(cookieParser());

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/register-admin', registerAdmin);

// Google Auth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect or send token
  const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'None',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.redirect(process.env.CLIENT_URL || 'http://localhost:3000/dashboard');
});

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found.' });
        res.json({ user });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// Middleware to protect routes
function authMiddleware(req, res, next) {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid.' });
  }
}

// Admin middleware
function adminMiddleware(req, res, next) {
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).json({ message: 'Admin access required.' });
}

// Create a new subscription (after payment)
router.post('/subscribe', authMiddleware, async (req, res) => {
  let { plan } = req.body;
  plan = plan && typeof plan === 'string' ? plan.toLowerCase() : '';
  if (!['starter', 'premium', 'pro'].includes(plan)) {
    return res.status(400).json({ message: 'Invalid plan.' });
  }
  const planDoc = await Plan.findOne({ name: new RegExp('^' + plan + '$', 'i') });
  if (!planDoc) {
    return res.status(400).json({ message: 'Plan not found.' });
  }
  const uniqueId = 'SUB-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + planDoc.duration * 24 * 60 * 60 * 1000);
  try {
    const subscription = await Subscription.create({
      user: req.user.id,
      plan,
      uniqueId,
      status: 'pending',
      expiresAt,
    });
    res.status(201).json({ subscription });
  } catch (err) {
    res.status(500).json({ message: 'Could not create subscription.' });
  }
});

// Get all subscriptions for the logged-in user
router.get('/user-subscriptions', authMiddleware, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user.id }).sort({ createdAt: -1 });
    
    // Check and update expired subscriptions
    const now = new Date();
    for (let subscription of subscriptions) {
      if (subscription.expiresAt && subscription.expiresAt < now && subscription.status === 'active') {
        subscription.status = 'expired';
        await subscription.save();
      }
    }
    
    // Fetch updated subscriptions
    const updatedSubscriptions = await Subscription.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ subscriptions: updatedSubscriptions });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch subscriptions.' });
  }
});

// Plans endpoints
router.get('/plans', async (req, res) => {
  try {
    const plans = await Plan.find().sort({ createdAt: -1 });
    res.json({ plans });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch plans.' });
  }
});

router.post('/plans', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json({ plan });
  } catch (err) {
    res.status(500).json({ message: 'Could not create plan.' });
  }
});

router.put('/plans/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ plan });
  } catch (err) {
    res.status(500).json({ message: 'Could not update plan.' });
  }
});

// Contact endpoints
router.post('/contact', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ contact });
  } catch (err) {
    res.status(500).json({ message: 'Could not submit contact.' });
  }
});

router.get('/contacts', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch contacts.' });
  }
});

// Admin: Get all pending subscriptions
router.get('/admin/pending-subscriptions', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const subs = await Subscription.find({ status: 'pending' }).populate('user', 'name email');
    res.json({ subscriptions: subs });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch pending subscriptions.' });
  }
});

// Admin: Approve a subscription
router.patch('/admin/approve-subscription/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const sub = await Subscription.findByIdAndUpdate(req.params.id, { status: 'active', rejectionReason: '' }, { new: true });
    res.json({ subscription: sub });
  } catch (err) {
    res.status(500).json({ message: 'Could not approve subscription.' });
  }
});

// Admin: Reject a subscription with reason
router.patch('/admin/reject-subscription/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { reason } = req.body;
    const sub = await Subscription.findByIdAndUpdate(req.params.id, { status: 'rejected', rejectionReason: reason }, { new: true });
    res.json({ subscription: sub });
  } catch (err) {
    res.status(500).json({ message: 'Could not reject subscription.' });
  }
});

// Admin: Get all users
router.get('/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch users.' });
  }
});

// Admin: Get site statistics
router.get('/admin/stats', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const subCount = await Subscription.countDocuments();
    const activeSubs = await Subscription.countDocuments({ status: 'active' });
    res.json({ userCount, subCount, activeSubs });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch stats.' });
  }
});

// Admin: Send notification
router.post('/admin/notifications', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    const notification = await Notification.create({ message });
    res.status(201).json({ notification });
  } catch (err) {
    res.status(500).json({ message: 'Could not send notification.' });
  }
});

// Admin: Get all notifications
router.get('/admin/notifications', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json({ notifications });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch notifications.' });
  }
});

// Admin: Delete a plan
router.delete('/plans/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Could not delete plan.' });
  }
});

router.post('/user/update', authMiddleware, updateUserProfile);
router.post('/user/change-password', authMiddleware, changeUserPassword);
router.get('/notifications', authMiddleware, getUserNotifications);
router.post('/notifications/read/:id', authMiddleware, markNotificationRead);
router.post('/cancel-subscription/:id', authMiddleware, cancelUserSubscription);
router.post('/renew-subscription', authMiddleware, renewUserSubscription);

router.get('/admin/all-subscriptions', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const subs = await Subscription.find().populate('user', 'name email').sort({ createdAt: -1 });
    
    // Check and update expired subscriptions
    const now = new Date();
    for (let subscription of subs) {
      if (subscription.expiresAt && subscription.expiresAt < now && subscription.status === 'active') {
        subscription.status = 'expired';
        await subscription.save();
      }
    }
    
    // Fetch updated subscriptions
    const updatedSubs = await Subscription.find().populate('user', 'name email').sort({ createdAt: -1 });
    res.json({ subscriptions: updatedSubs });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch subscriptions.' });
  }
});

// Add this route for user notifications
router.get('/user-notifications', authMiddleware, async (req, res) => {
  try {
    const notifications = await Notification.find({ $or: [ { user: req.user.id }, { user: null } ] }).sort({ createdAt: -1 });
    res.json({ notifications: notifications.map(n => ({
      _id: n._id,
      title: n.title || 'Notification',
      message: n.message,
      createdAt: n.createdAt,
      read: n.readBy && n.readBy.includes(req.user.id),
    })) });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch notifications.' });
  }
});

// User: Submit a complaint
router.post('/complaints', authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ message: 'Message is required.' });
    const complaint = await Complaint.create({ user: req.user.id, message });
    res.status(201).json({ complaint });
  } catch (err) {
    res.status(500).json({ message: 'Could not submit complaint.' });
  }
});

// User: Get all their complaints
router.get('/complaints', authMiddleware, async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ complaints });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch complaints.' });
  }
});

// Admin: Get all complaints
router.get('/admin/complaints', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const complaints = await Complaint.find().populate('user', 'name email').sort({ createdAt: -1 });
    res.json({ complaints });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch complaints.' });
  }
});

// Admin: Update complaint status
router.patch('/admin/complaints/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json({ complaint });
  } catch (err) {
    res.status(500).json({ message: 'Could not update complaint.' });
  }
});

// User: Get a specific complaint
router.get('/complaints/:id', authMiddleware, async (req, res) => {
  try {
    const complaint = await Complaint.findOne({ _id: req.params.id, user: req.user.id });
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found or access denied.' });
    }
    res.json({ complaint });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch complaint.' });
  }
});

// User: Get chat messages for a complaint
router.get('/complaints/:id/chat', authMiddleware, async (req, res) => {
  try {
    const complaint = await Complaint.findOne({ _id: req.params.id, user: req.user.id });
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found or access denied.' });
    }
    res.json({ chat: complaint.chat || [] });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch chat.' });
  }
});

// User: Send a message in complaint chat
router.post('/complaints/:id/chat', authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: 'Message text is required.' });
    }
    
    const complaint = await Complaint.findOne({ _id: req.params.id, user: req.user.id });
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found or access denied.' });
    }
    
    // Add the new message to the chat
    const newMessage = {
      from: 'user',
      text: text,
      time: new Date()
    };
    
    complaint.chat.push(newMessage);
    await complaint.save();
    
    res.json({ chat: complaint.chat });
  } catch (err) {
    res.status(500).json({ message: 'Could not send message.' });
  }
});

// User: Request subscription renewal
router.post('/renewal-request', authMiddleware, async (req, res) => {
  try {
    const { subscriptionId } = req.body;
    if (!subscriptionId) {
      return res.status(400).json({ message: 'Subscription ID is required.' });
    }
    
    const subscription = await Subscription.findOne({ _id: subscriptionId, user: req.user.id });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found.' });
    }
    
    if (subscription.renewalStatus === 'pending') {
      return res.status(400).json({ message: 'A renewal request is already pending for this subscription.' });
    }

    if (subscription.status !== 'expired') {
      return res.status(400).json({ message: 'Only expired subscriptions can be renewed.' });
    }
    
    subscription.renewalRequested = true;
    subscription.renewalRequestDate = new Date();
    subscription.renewalStatus = 'pending';
    subscription.renewalRejectionReason = undefined;
    await subscription.save();
    
    res.json({ subscription, message: 'Renewal request submitted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Could not submit renewal request.' });
  }
});

// Admin: Get all renewal requests
router.get('/admin/renewal-requests', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ 
      renewalRequested: true, 
      renewalStatus: 'pending' 
    }).populate('user', 'name email').sort({ renewalRequestDate: -1 });
    res.json({ subscriptions });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch renewal requests.' });
  }
});

// Admin: Approve renewal request
router.patch('/admin/renewal-requests/:id/approve', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found.' });
    }
    
    if (!subscription.renewalRequested || subscription.renewalStatus !== 'pending') {
      return res.status(400).json({ message: 'No pending renewal request found.' });
    }
    
    const plan = await Plan.findOne({ name: new RegExp('^' + subscription.plan + '$', 'i') });
    if (!plan) {
      return res.status(400).json({ message: 'Plan not found.' });
    }
    
    const now = new Date();
    const newExpiryDate = new Date(now.getTime() + plan.duration * 24 * 60 * 60 * 1000);
    
    subscription.status = 'active';
    subscription.expiresAt = newExpiryDate;
    subscription.renewalStatus = 'approved';
    subscription.renewalApprovedDate = now;
    subscription.renewalRequested = false; 
    await subscription.save();
    
    res.json({ subscription, message: 'Renewal request approved successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Could not approve renewal request.' });
  }
});

// Admin: Reject renewal request
router.patch('/admin/renewal-requests/:id/reject', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { reason } = req.body;
    if (!reason) {
      return res.status(400).json({ message: 'Rejection reason is required.' });
    }
    
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found.' });
    }
    
    if (!subscription.renewalRequested || subscription.renewalStatus !== 'pending') {
      return res.status(400).json({ message: 'No pending renewal request found.' });
    }
    
    subscription.renewalStatus = 'rejected';
    subscription.renewalRejectionReason = reason;
    subscription.renewalRequested = false;
    await subscription.save();
    
    res.json({ subscription, message: 'Renewal request rejected successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Could not reject renewal request.' });
  }
});

module.exports = router; 