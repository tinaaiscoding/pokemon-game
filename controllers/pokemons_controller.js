const express = require('express')
const router = express.Router()
// models
const Party_Pokemon = require('../models/party_pokemon')

router.get('/', (req, res) => {
    Party_Pokemon
        .findAll()
        .then(myPokemon => res.json(myPokemon))
})

module.exports = router