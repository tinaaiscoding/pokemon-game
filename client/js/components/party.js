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
        <button onClick="takePokemonToBattle() class="to-battle-btn">BATTLE</button>
    </section>
    `).join('')

}

function editName(event) {
    event.preventDefault()



}