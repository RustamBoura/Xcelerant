const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')


router.get('/', reviewController.getAllReviews)
router.get('/:id', reviewController.getReviewById)
router.post('/', reviewController.createReview)
router.put('/:id', reviewController.updateReviewById)
router.delete('/:id', reviewController.deleteReviewById)

module.exports = router
