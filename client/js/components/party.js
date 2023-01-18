

function renderMyPokemonsList() {
    document.querySelector('#page').innerHTML = `
        <section class='party-pokemon-list'>
            <button onClick="renderBattleGround() class="to-battle-btn>BATTLE</button>
            ${renderMyPokemons()}
        </section>
    `
}

function renderMyPokemons() {
    return state.myPokemons.map(myPokemon => `
    <section class='myPokemon' data-id='${myPokemon.id}'>
        <header>
            <h2>Name: ${myPokemon.name}</h2>
        </header>
        <p>HP: ${myPokemon.hp}</p>
        <p>ATTACK: ${myPokemon.attack}</p>
        <p>DEFENSE: ${myPokemon.defense}</p>
        <img src="${myPokemon.img}" alt="">
        <p>WIN COUNT: "${myPokemon.win_count}" alt="">
    </section>
    `).join('')

}