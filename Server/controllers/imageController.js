const Image = require('../models/Image')

// Get all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find()
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Get a single image by ID
exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id)
    if (!image) {
      return res.status(404).json({ error: 'Image not found' })
    }
    res.json(image)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Create a new image
exports.createImage = async (req, res) => {
  try {
    const { carId, imageURL, description } = req.body
    const image = new Image({ carId, imageURL, description })
    const newImage = await image.save()
    res.status(201).json(newImage)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Update an existing image by ID
exports.updateImageById = async (req, res) => {
  try {
    const { carId, imageURL, description } = req.body
    const image = await Image.findByIdAndUpdate(
      req.params.id,
      { carId, imageURL, description },
      { new: true }
    );
    if (!image) {
      return res.status(404).json({ error: 'Image not found' })
    }
    res.json(image)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Delete an image by ID
exports.deleteImageById = async (req, res) => {
  try {
    const image = await Image.findByIdAndRemove(req.params.id)
    if (!image) {
      return res.status(404).json({ error: 'Image not found' })
    }
    res.json(image)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
