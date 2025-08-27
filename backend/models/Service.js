const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true,
    trim: true
  },
  shortDescription: { 
    type: String, 
    trim: true
  },
  icon: { 
    type: String, 
    required: true,
    trim: true
  },
  category: { 
    type: String, 
    enum: ['web-development', 'mobile-development', 'design', 'marketing', 'consulting', 'other'],
    default: 'other'
  },
  price: { 
    type: String, 
    trim: true
  },
  duration: { 
    type: String, 
    trim: true
  },
  features: [{ 
    type: String, 
    trim: true 
  }],
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
  image: { 
    type: String 
  }
}, { 
  timestamps: true 
});

// Add index for better query performance
serviceSchema.index({ isActive: 1, order: 1, category: 1 });

module.exports = mongoose.model('Service', serviceSchema);
