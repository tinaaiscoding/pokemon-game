const express = require('express')
const session = require('express-session')
const router = express.Router()
// models
const Pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
  Pokemon
    .findAllPokemon()
    .then(pokemons => res.json(pokemons))
})

router.get('/:id/mypokemon', (req, res) => {
  console.log('USER ID SESSION');
  const userId = req.params.id
  console.log(userId);
  Pokemon
    .findAllMyPokemon(userId)
    .then(myPokemons => {
      return res.json(myPokemons[0])
    })
})

router.put('/:id', (req, res) => {
  const pokemonId = req.params.id

  const { nickname } = req.body

  Pokemon
    .edit(pokemonId, nickname)
    .then(myPokemon => res.json(myPokemon))
})

router.delete('/:id', (req, res) => {
  const pokemonId = req.params.id
  Pokemon
    .delete(pokemonId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router