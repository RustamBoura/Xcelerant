const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  topSpeed: { type: Number, required: true },
  engine: { type: String, required: true },
  horsepower: { type: Number, required: true },
  torque: { type: Number, required: true },
  price: { type: Number, required: true },
  imageURL: [{ type: String, required: true }],
  description: { type: String, required: true },
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
