const mongoose = require('mongoose');

const paymentOptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  upiId: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  qrCode: {
    type: String, // URL to QR code image
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    trim: true
  },
  paymentType: {
    type: String,
    enum: ['UPI', 'BANK_TRANSFER', 'WALLET'],
    default: 'UPI'
  }
}, { timestamps: true });

// Index for efficient queries
paymentOptionSchema.index({ isActive: 1, order: 1 });

module.exports = mongoose.model('PaymentOption', paymentOptionSchema);
