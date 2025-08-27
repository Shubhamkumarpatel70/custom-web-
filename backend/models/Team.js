const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  position: { 
    type: String, 
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    trim: true,
    lowercase: true
  },
  phone: { 
    type: String, 
    trim: true
  },
  bio: { 
    type: String, 
    trim: true
  },
  profileImage: { 
    type: String 
  },
  socialLinks: {
    linkedin: { type: String, trim: true },
    twitter: { type: String, trim: true },
    github: { type: String, trim: true },
    instagram: { type: String, trim: true }
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  order: { 
    type: Number, 
    default: 0 
  }
}, { 
  timestamps: true 
});

// Add index for better query performance
teamMemberSchema.index({ isActive: 1, order: 1 });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
