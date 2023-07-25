const express = require('express')
const router = express.Router()

// Import all route files
const carRoutes = require('./carRoutes')
const userRoutes = require('./userRoutes')
const reviewRoutes = require('./reviewRoutes')
const imageRoutes = require('./imageRoutes')

// Use the route files
router.use('/cars', carRoutes)
router.use('/users', userRoutes)
router.use('/reviews', reviewRoutes)
router.use('/images', imageRoutes)

module.exports = router
