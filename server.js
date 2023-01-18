const express = require('express')


// MIDDLEWARES
const logger = require('./middlewares/logger');
const sessions = require('./middlewares/sessions');

// CONTROLLERS
const usersController = require('./controllers/users_controller');
const sessionsController = require('./controllers/sessions_controller');
const pokemonsController = require('./controllers/pokemons_controller');
// const myPokemonController = require('./controllers/pokemons_controller')

const app = express()
const port = process.env.PORT || 3000;

// STARTING THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`))

// MIDDLEWARE FUNCTIONS
app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(sessions)

// MIDDLEWARE ROUTES
app.use('/api/pokemons', pokemonsController)
app.use('/api/mypokemons', pokemonsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
