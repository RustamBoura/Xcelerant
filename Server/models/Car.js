const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number },
  topSpeed: { type: Number, required: true },
  acceleration: { type: Number },
  engine: { type: String },
  horsepower: { type: Number },
  torque: { type: Number },
  price: { type: Number },
  imageURL: { type: String },
  createdAt: { type: Date, default: Date.now }
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
