const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')


router.get('/', imageController.getAllImages)
router.get('/:id', imageController.getImageById)
router.post('/', imageController.createImage)
router.put('/:id', imageController.updateImageById)
router.delete('/:id', imageController.deleteImageById)

module.exports = router
