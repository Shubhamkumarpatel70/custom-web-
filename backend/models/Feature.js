const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true,
    trim: true
  },
  icon: { 
    type: String, 
    required: true,
    trim: true
  },
  category: { 
    type: String, 
    enum: ['web', 'mobile', 'design', 'marketing', 'other'],
    default: 'other'
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  order: { 
    type: Number, 
    default: 0 
  },
  color: { 
    type: String, 
    default: '#667eea'
  },
  benefits: [{ 
    type: String, 
    trim: true 
  }]
}, { 
  timestamps: true 
});

// Add index for better query performance
featureSchema.index({ isActive: 1, order: 1, category: 1 });

module.exports = mongoose.model('Feature', featureSchema);
