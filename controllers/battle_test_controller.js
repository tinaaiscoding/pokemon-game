const express = require('express')
const router = express.Router()


const Party_Pokemon = require('../models/party_pokemon')
const Db_Pokemon = require('../models/pokemon')

router.get('/:id', (req, res) => {
  const pokemonId = req.params.id
  Party_Pokemon
    .findById(pokemonId)
    .then(pokemon => {
      return res.json(pokemon)
    }) 
})

router.get('/opponent/:id', (req, res) => {
  const opponentId = req.params.id
  Db_Pokemon
    .findById(opponentId)
    .then(opponent => {
      console.log('OPPONENT');
      
      console.log(opponent);
      res.json(opponent)
    }) 
})

module.exports = router