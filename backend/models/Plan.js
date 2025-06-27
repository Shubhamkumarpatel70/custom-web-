const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  oldPrice: { type: String },
  save: { type: String },
  features: [{ type: String }],
  highlight: { type: Boolean, default: false },
  color: { type: String },
  duration: { type: Number, required: true }, // in days
}, { timestamps: true });

module.exports = mongoose.model('Plan', planSchema); 