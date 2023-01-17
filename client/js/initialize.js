const state = {
  pokemons: [],
  loggedInUserName: null
}

fetch('/api/pokemons')
    .then(res =>res.json())
    .then(pokemons => {
        state.pokemons = pokemons
        renderPokemonList()
    }) 



fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => state.loggedInUserName = userName)