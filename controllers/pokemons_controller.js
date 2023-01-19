const express = require('express')
const router = express.Router()
// models
const Party_Pokemon = require('../models/party_pokemon')

router.get('/', (req, res) => {
  Party_Pokemon
    .findAll()
    .then(myPokemon => res.json(myPokemon))
})

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

router.get('/mypokemons', (req, res) => {
  const sessionUserId = state.loggedInId
  console.log(sessionUserId);

  Party_Pokemon
    .addBulbasaur(sessionUserId)
    .then(myPokemon => res.json(myPokemon))
})

module.exports = router