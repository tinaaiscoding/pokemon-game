function renderPokemonCard() {
  return state.myPokemons
    .map(
      (myPokemon) => `
    <section class='myPokemon' data-id='${myPokemon.id}'>
        <div class="cards">
            <header>
                <h2>${myPokemon.nickname}</h2>
                <span class='material-symbols-outlined edit-nickname' onClick="renderEditModal(event)">edit</span>
            </header>
            <img src="${myPokemon.img}" alt="">
            <p>HP: ${myPokemon.hp}</p>
            <p>ATTACK: ${myPokemon.attack}</p>
            <p>DEFENSE: ${myPokemon.defense}</p>
            <p>SPEED: ${myPokemon.speed}</p>
            <p>WIN COUNT: ${myPokemon.win_count} </p>
            <div>
                <button onClick="takePokemonToBattle(event)" class="to-battle-btn">BATTLE</button>
                ${
                  state.myPokemons.length > 1
                    ? `<button onClick="releasePokemon(event)" class="to-battle-btn">RELEASE</button>`
                    : `<button>Can't Release</button>`
                }
                
            </div>
        </div>
    </section>
    `
    )
    .join('');
}