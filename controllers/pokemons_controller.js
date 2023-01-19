const express = require('express')
const router = express.Router()
// models
const Party_Pokemon = require('../models/party_pokemon')

router.get('/', (req, res) => {
  Party_Pokemon
    .findAll()
    .then(myPokemon => res.json(myPokemon))
})

// router.get('/api/pokemons/', (req, res) => {
//   const pokemonId = req.params.id
//   console.log(pokemonId);
//   Party_Pokemon
//     .findById(pokemonId)
//     .then(pokemon => res.json(pokemon))
// })

// router.get('/:id', (req, res) => {
//   const opponentId = req.params.id
//   Db_Pokemon
//     .findById(opponentId)
//     .then(opponent => res.json(opponent))
// })

router.put('/:id', (req, res) => {
  const pokemonId = req.params.id

  const { nickname } = req.body

  Party_Pokemon
    .edit(pokemonId, nickname)
    .then(myPokemon => res.json(myPokemon))
})

router.delete('/:id', (req, res) => {
  const pokemonId = req.params.id
  console.log(pokemonId)
  Party_Pokemon
    .delete(pokemonId)
    .then(() => res.json({ message: 'deleted successfully' }))
})


module.exports = router