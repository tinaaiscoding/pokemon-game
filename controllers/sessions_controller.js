const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// MODELS
const User = require('../models/user')

// Check if user is logged in
router.get('/', (req, res) => {
  User
    .findById(req.session.userId)
    .then(user => {
      if (user) {
        res.json(user.email)
      } else {
        res.json(null)
      }
    })
})

// User trying to log in
router.post('/', (req, res) => {
  const { email, password } = req.body

  User
    .findByEmail(email)
    .then(user => {
      if (email === '' || password === '') {
        res.status(400).json({ error: 'email and/or password cannot be blank' })
      } else {
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)
        if (user && isValidPassword) {
          req.session.userId = user.id
          console.log(user)
     
          res.json({loggedInUserName: user.email, loggedInId: user.id})
        }
      }
    })
})

module.exports = router