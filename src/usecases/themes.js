const Theme = require('../models/themes')

function getAll(){
  return Theme.find()
}

function create(newTheme){
  return Theme.create(newTheme)
}

module.exports = {
  getAll,
  create
}