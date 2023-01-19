fetch('/api/pokemons')
  .then(res => res.json())
  .then(myPokemons => {
      state.myPokemons = myPokemons
})

// fetch('/api/mypokemons')
//     .then(res => res.json())
//     .then(pokemons => {
//         state.pokemons = pokemons
//     })

function renderMyPokemonsList() {
    backDropOff()
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
            <span class='material-symbols-outlined edit-nickname' onClick="renderEditModal(event)">edit</span>
        </header>
        <p>HP: ${myPokemon.hp}</p>
        <p>ATTACK: ${myPokemon.attack}</p>
        <p>DEFENSE: ${myPokemon.defense}</p>
        <p>SPEED: ${myPokemon.speed}</p>
        <img src="${myPokemon.img}" alt="">
        <p>WIN COUNT: ${myPokemon.win_count} </p>
        <button onClick="takePokemonToBattle(event)" class="to-battle-btn">BATTLE</button>
        <button onClick="releasePokemon(event)" class="to-battle-btn">RELEASE</button>
    </section>
    `).join('')
}

function renderEditModal(event) {
    const editBtn = event.target
    const myPokemonDOM = editBtn.closest('.myPokemon')
    const myPokemonId = myPokemonDOM.dataset.id
    const myPokemons = state.myPokemons

    myPokemons.forEach(myPokemon => {
        const myPokemonId1 = Number(myPokemonId)
        if (myPokemonId1 === myPokemon.id) {
            document.querySelector('#page').innerHTML = `
                <section class="modal visible">
                    <div class="modal-content edit-nickname" data-id="${myPokemon.id}">               
                        <form onSubmit="editNickname(event)">
                            <h2 class="modal-title">Edit Nickname ${myPokemon.nickname}</h2>
                            <fieldset>
                            <input placeholder="New Nickname" type="text" name="nickname">
                            </fieldset>
                            <button class="btn btn-edit"">Edit Nickname</button>
                        </form>
                        <button class="btn btn-cancel">Cancel</button>
                    </div>
                </section>
            `
        }
    })
}

function editNickname(event) {
  event.preventDefault()
  const form = event.target
  const myPokemonDOM = form.closest('.edit-nickname')
  const myPokemonId = myPokemonDOM.dataset.id

  const data = Object.fromEntries(new FormData(form))

  fetch(`/api/pokemons/${myPokemonId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  })
      .then(res => res.json())
      .then(pokemon => {
          state.myPokemons[myPokemonId - 1].nickname = pokemon.nickname
          renderMyPokemonsList()
      })

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

