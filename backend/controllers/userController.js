const User = require('../models/User');

// Create user
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get active users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ status: 'active' });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Soft delete user (set status = deleted)
exports.softDeleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { status: 'deleted' }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get deleted users
exports.getDeletedUsers = async (req, res) => {
  try {
    const deletedUsers = await User.find({ status: 'deleted' });
    res.json(deletedUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
