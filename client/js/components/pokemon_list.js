  function renderPokemonList() {
    document.querySelector('.view-pokemon').innerHTML = `
      <section class='pokemon-list'>
       ${renderPokemons()}
      </section>
    `
  }

  function renderPokemons() {
    return state.pokemons.map(pokemon => `
    <section class='pokemon' data-id='${pokemon.id}'>
        <header>
            <h2>Name: ${pokemon.name}</h2>
        </header>
        <p>HP: ${pokemon.hp}</p>
        <p>ATTACK: ${pokemon.attack}</p>
        <p>DEFENSE: ${pokemon.defense}</p>
        <img src="${pokemon.img}" alt="">
        <p> ${ fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
                .then(response =>response.json())
                .then(response => {
                  let pokemon = response
                  console.log((pokemon.evolves_from_species))
                })
              }
        </p>
    </section>
    `).join('')
    
  }


  

// sometimes it renders sometimes it doesnt. i have no idea why?
// Uncaught (in promise) ReferenceError: renderPokemonList is not defined
// happens in 50 percent chance.


  