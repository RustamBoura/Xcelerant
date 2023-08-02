const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  images: [
    {
      imageURL2: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ]
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;

