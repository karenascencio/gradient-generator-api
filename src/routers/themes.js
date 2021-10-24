const express = require('express')
const router = express.Router()
const themes = require('../usecases/themes')

router.get('/', async (request, response) => {
  try {
      const allThemes = await themes.getAll()
      response.json({
          success: true, 
          message: 'Themes',
          data: {
              allThemes
          }
      })
  } catch (error){
      response.status(400)
      response.json({
          success: false,
          message: 'Error to get themes',
          error: error.message
      })
  }
})

router.post('/', async (request, response) => {
  try{
      const newTheme = request.body
      const postedTheme = await themes.create(newTheme)
      response.json({
          success: true,
          message: 'Theme successfully posted!',
          data: {
              postedTheme
          }
      })
  } catch (error) {
      response.status(400)
      response.json({
          success: false,
          message: 'Error to post theme',
          error: error.message
      })
  }
})

module.exports = router