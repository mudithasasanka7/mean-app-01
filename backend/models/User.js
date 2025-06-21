const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
