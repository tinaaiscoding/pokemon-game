const express = require('express')
const router = express.Router()

// MODELS
const Starter_Pokemon = require('../models/starter_pokemon.js')

router.post('/:userId/add_starter_pokemon', (req, res) => {
  const userId = req.params.userId
  const data = req.body

  Starter_Pokemon
      .addStarterPokemon(userId, data)
      .then(myPokemon => {
      return res.json(myPokemon)
    })
  })

  module.exports = router