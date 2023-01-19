const express = require('express')
const router = express.Router()

const Pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    Pokemon
      .insertBulbasaur()
      .then(myPokemon => res.json(myPokemon))
  })

  module.exports = router