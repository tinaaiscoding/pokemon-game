const state = {
  pokemons: [],
  myPokemons: [],
  playerPokemonToBattle: [],
  opponentPokemon: [],
  loggedInUserName: null,
  loggedInId: null
}

// fetch('/api/pokemons')
//   .then(res => res.json())
//   .then(pokemons => {
//     state.pokemons = pokemons
//     renderPokemonList()
//   })

// -- pseudo code
// -- WHAT we want to achieve
// -- We want the starter pokemon to be input into mypokemons WITH the logged in user's ID.
// -- STEPS
// -- 1. So there is 3 different tables: pokemons, mypokemons, users. 
// -- 2. Once insertBulbsaur() has been activated, insert bulbasaur data into mypokemons table WITH logged in user's ID.
// -- 3. renderMyPokemonsList() to show all the pokemon that the user owns



fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => state.loggedInUserName = userName)