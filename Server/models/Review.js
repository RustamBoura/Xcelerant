const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true},
  createdAt: { type: Date, required: true, default: Date.now }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
