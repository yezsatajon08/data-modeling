const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Matches the name in module.exports of User.js
    required: true 
  }
});

module.exports = mongoose.model('Task', taskSchema);