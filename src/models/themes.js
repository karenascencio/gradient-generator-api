const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  themeName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: false,
  },
  creatorName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: false,
  },
  colorOne: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  colorTwo: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  gradientStyle: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  gradientDirection: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
})

const model = mongoose.model('themes', themeSchema)

module.exports = model