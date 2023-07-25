const mongoose = require('mongoose')

const Car = require('./Car')
const User = require('./User')
const Review = require('./Review')
const Image = require('./Image')

module.exports = {
  Car,
  User,
  Review,
  Image
}
