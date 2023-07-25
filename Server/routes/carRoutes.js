const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')


router.get('/', carController.getAllCars)
router.get('/:id', carController.getCarById)
router.post('/', carController.createCar)
router.put('/:id', carController.updateCarById)
router.delete('/:id', carController.deleteCarById)

module.exports = router
