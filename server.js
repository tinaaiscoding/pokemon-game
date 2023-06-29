const express = require('express');
const dotenv = require('dotenv').config({ path: './.env' });

// MIDDLEWARES
const logger = require('./middlewares/logger');
const sessions = require('./middlewares/sessions');

// CONTROLLERS
const usersController = require('./controllers/users_controller');
const sessionsController = require('./controllers/sessions_controller');
const battleController = require('./controllers/battle_controller');
const pokemonsController = require('./controllers/pokemons_controller');
const pokemonsStartController = require('./controllers/start_pokemon_controller');

const app = express();
const port = process.env.PORT || 3000;

// STARTING THE SERVER
app.listen(port, () => console.log(`Listening on port ${port}`));

// MIDDLEWARE FUNCTIONS
app.use(logger);
app.use(express.static('client'));
app.use(express.json());
app.use(sessions);

// MIDDLEWARE ROUTES

app.use('/api/pokemons', pokemonsController);
app.use('/api/users', usersController);
app.use('/api/sessions', sessionsController);
app.use('/api/battle', battleController);
app.use('/api/startpokemons', pokemonsStartController);
