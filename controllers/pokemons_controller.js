const express = require('express')
const router = express.Router()
// models
const Pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
  Pokemon
    .findAllPokemon()
    .then(pokemons => res.json(pokemons))
})

router.get('/mypokemon', (req, res) => {
  Pokemon
    .findAllMyPokemon(7)
    .then(myPokemons => {
      console.log('BEFORE INTO STATE OBJ');
      console.log(myPokemons);
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
  console.log(pokemonId)
  Pokemon
    .delete(pokemonId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router