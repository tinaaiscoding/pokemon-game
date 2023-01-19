const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// MODELS
const User = require('../models/user')

// ROUTES
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
    .create(name, email, passwordDigest)
    .then(user => res.json(user))
})

module.exports = router;