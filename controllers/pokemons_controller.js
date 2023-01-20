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
  const userId = req.params.id
  Pokemon
    .findAllMyPokemon(userId)
    .then(myPokemons => {
      return res.json(myPokemons)
    })
})

router.put('/:userId/edit/:pokemonId', (req, res) => {
  const userId = req.params.userId
  const pokemonId = req.params.pokemonId

  const { nickname } = req.body

  Pokemon
    .edit(userId, pokemonId, nickname)
    .then(updatedPokemon => {
      console.log('EDIT NICKNAME ROUTE');
      console.log(updatedPokemon);
      return res.json(updatedPokemon)})
})

router.delete('/:id', (req, res) => {
  const pokemonId = req.params.id
  Pokemon
    .delete(pokemonId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router