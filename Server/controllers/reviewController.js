const Review = require('../models/Review')

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json(review)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { carId, userId, rating, comment } = req.body
    const review = new Review({ carId, userId, rating, comment })
    const newReview = await review.save()
    res.status(201).json(newReview)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Update an existing review by ID
exports.updateReviewById = async (req, res) => {
  try {
    const { carId, userId, rating, comment } = req.body
    const review = await Review.findByIdAndUpdate(req.params.id, { carId, userId, rating, comment }, { new: true })
    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json(review)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
};

// Delete a review by ID
exports.deleteReviewById = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id)
    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json(review)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
