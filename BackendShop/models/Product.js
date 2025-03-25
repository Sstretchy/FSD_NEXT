const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number, // можно убрать, Mongo сам даёт _id
  title: { type: String, required: true },
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number
  }
});

module.exports = mongoose.model('Product', productSchema);
