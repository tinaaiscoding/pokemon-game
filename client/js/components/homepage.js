function renderHomePage() {
  document.querySelector('#page').innerHTML = `
    <nav class="header-nav">
    <img src="./images/landing-page/PokeBattles.png" alt="PokeBattles Logo">
    <section class="landing-btns">
      <div>
        <button class="landing-btn start-btn" onClick="renderStartOptions()"></button>
        <h1>START</h1>
      </div>
      <div>
        <button class="landing-btn how-to-btn" onClick="renderHowToPlayModal()"></button>
        <h1>HOW TO PLAY</h1>
      </div>

    </section>

  </nav>
  `

  // set state loggedInUser + loggedInId = null again
    state.pokemons = [],
    state.myPokemons = [],
    state.playerPokemonToBattle = [],
    state.opponentPokemon = [],
    state.loggedInUserName = null,
    state.loggedInId = null
  
}