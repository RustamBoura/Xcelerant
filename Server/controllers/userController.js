const User = require('../models/User')

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = new User({ username, email, password })
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Update an existing user by ID
exports.updateUserById = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = await User.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
