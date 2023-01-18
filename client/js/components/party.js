fetch('/api/pokemons')
    .then(res => res.json())
    .then(myPokemons => {
        state.myPokemons = myPokemons
        // renderMyPokemonsList()
    })

function renderMyPokemonsList() {
    document.querySelector('#page').innerHTML = `
        <section class='party-pokemon-list'>
            ${renderMyPokemons()}
        </section>
    `
}

function renderMyPokemons() {
    return state.myPokemons.map(myPokemon => `
    <section class='myPokemon' data-id='${myPokemon.id}'>
        <header>
            <h2>${myPokemon.nickname}</h2>
            <span class='material-symbols-outlined edit-name' onClick="editName(event)">edit</span>
        </header>
        <p>HP: ${myPokemon.hp}</p>
        <p>ATTACK: ${myPokemon.attack}</p>
        <p>DEFENSE: ${myPokemon.defense}</p>
        <p>SPEED: ${myPokemon.speed}</p>
        <img src="${myPokemon.img}" alt="">
        <p>WIN COUNT: ${myPokemon.win_counts} </p>
        <button onClick="takePokemonToBattle(event)" class="to-battle-btn">BATTLE</button>
        <button onClick="releasePokemon(event)" class="to-battle-btn">RELEASE</button>
    </section>
    `).join('')

}

function releasePokemon(event) {
    const deleteBtn = event.target
    const pokemonDOM = deleteBtn.closest('.myPokemon')
    const pokemonId = pokemonDOM.dataset.id


    fetch(`/api/pokemons/${pokemonId}`, {
      method: 'DELETE'
    })
      .then(() => {
        state.myPokemons = state.myPokemons.filter(t => t.id != pokemonId)
        renderMyPokemonsList()
      })
    }

// function editName(event) {
//     event.preventDefault()



// }