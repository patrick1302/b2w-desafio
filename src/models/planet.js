const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  climate: {
    type: String,
    required: true,
    trim: true,
  },
  terrain: {
    type: String,
    required: true,
    trim: true,
  },
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
