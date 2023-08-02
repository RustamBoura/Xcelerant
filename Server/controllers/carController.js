const Car = require('../models/Car')

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find()
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Get a single car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id)
    if (!car) {
      return res.status(404).json({ error: 'Car not found' })
    }
    res.json(car)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const { make, model, topSpeed } = req.body
    const car = new Car({ make, model, topSpeed })
    const newCar = await car.save()
    res.status(201).json(newCar)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Update an existing car by ID
exports.updateCarById = async (req, res) => {
  try {
    const { make, model, topSpeed } = req.body
    const car = await Car.findByIdAndUpdate(req.params.id, { make, model, topSpeed }, { new: true })
    if (!car) {
      return res.status(404).json({ error: 'Car not found' })
    }
    res.json(car)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Delete a car by ID
exports.deleteCarById = async (req, res) => {
  try {
    const car = await Car.findByIdAndRemove(req.params.id)
    if (!car) {
      return res.status(404).json({ error: 'Car not found' })
    }
    res.json(car)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
