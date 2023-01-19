const express = require('express')
const router = express.Router()

const Pokemon = require('../models/pokemon')

router.get('/:id', (req, res) => {
  const pokemonId = req.params.id

  Pokemon
    .findById(pokemonId)
    .then(pokemon => {
      console.log('ROUTE');
      console.log(pokemon);
      console.log('RES JSON');
      console.log(res.pokemon);
      return res.json(pokemon)
    }) 
})

router.get('/opponent/:id', (req, res) => {
  const opponentId = req.params.id

  Pokemon
    .findOppById(opponentId)
    .then(opponent => {
      console.log('OPPONENT');
      
      console.log(opponent);
      return res.json(opponent)
    }) 
})

module.exports = router