const express = require('express')
const router = express.Router()
// models
const Pokemon = require('../models/pokemon')

router.get('/', (req,res) => {
    Pokemon
    .findAll()
    .then(pokemon => res.json(pokemon))
})

module.exports = router