const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  lab: {
      type: String,
      default: 'unknown',
  },

  nama: {
    type: String,
    required: true,
  },

  inisial: {
    type: String,
    required: true,
  },


  statusDosen: {
    type: String,
    default: 'unknown',
  }
});

const Product = mongoose.model('db-dosen', productSchema);

module.exports = Product;
