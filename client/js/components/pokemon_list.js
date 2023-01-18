function deletePokemon(event) {
  const deleteBtn = event.target
  const pokemonDOM = deleteBtn.closest('.myPokemon')
  const pokemonId = pokemonDOM.dataset.id
  fetch(`/api/mypokemons/${pokemonId}`, {
    method: 'DELETE'
  })
    .then(() => {
      // removing just that one pokemon from my state.pokemons
      state.myPokemons = state.myPokemons.filter(t => t.id != pokemonId)
      renderMyPokemonList()
    })
}