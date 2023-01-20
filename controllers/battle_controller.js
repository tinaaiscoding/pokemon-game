const express = require('express')
const router = express.Router()

const Pokemon = require('../models/pokemon')

router.get('/:id', (req, res) => {
  const pokemonId = req.params.id

  Pokemon
    .findById(pokemonId)
    .then(pokemon => {
      return res.json(pokemon)
    }) 
})

router.get('/opponent/:id', (req, res) => {
  const opponentId = req.params.id

  Pokemon
    .findOppById(opponentId)
    .then(opponent => res.json(opponent)) 
})

module.exports = router