const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from: { type: String, enum: ['user', 'admin'], required: true },
  text: { type: String, required: true },
  time: { type: Date, default: Date.now }
}, { _id: false });

const complaintSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  chat: [messageSchema],
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['open', 'resolved'], default: 'open' },
  response: { type: String }, // Admin response
  reopenRequested: { type: Boolean, default: false },
  reopenStatus: { type: String, enum: ['none', 'pending', 'accepted', 'rejected'], default: 'none' },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema); 