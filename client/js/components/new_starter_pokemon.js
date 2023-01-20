function renderNewStaterPokemon() {
  backDropOff()
  document.querySelector('.header-nav').innerHTML = ``
  document.querySelector('#page').innerHTML = `
 
  <div class="bigBox">
  <div>
    <img class="profTable" src="../images/new_starter_pokemon/bg_professor_oaks_lab.png" alt="">
  </div>

  <div id="new_starter_pokemon_page">
    
    <div class="pokeballs-group">

      <div class='bulbTest'>
        <div>
          <img class="pokeball pokeball-1" src="./images/new_starter_pokemon/pokeball_close.png" alt="">
          <img class="starter-pokemon bulbasaur hidden" src="./images/new_starter_pokemon/selected_bulbasaur.png" alt="">
        </div>
        <div class="select-starters-btn-group">
          <button class="select-starters-btn btn-bulbasaur button-32" onClick="renderPickBulbasaur()">SELECT</button>
        </div>
      </div>

      <div class='charTest'>
        <div>
          <img class="pokeball pokeball-2" src="./images/new_starter_pokemon/pokeball_close.png" alt="">
          <img class="starter-pokemon charmander hidden" src="./images/new_starter_pokemon/selected_charmander.png" alt="">
        </div>
        <div class="select-starters-btn-group">
          <button class="select-starters-btn btn-charmander button-32" onClick="renderPickCharmander()">SELECT</button>
        </div>
      </div>


      <div class='squiTest'>
        <div>
          <img class="pokeball pokeball-3" src="./images/new_starter_pokemon/pokeball_close.png" alt=""> 
          <img class="starter-pokemon squirtle hidden" src="./images/new_starter_pokemon/selected_squirtle.png" alt="">
        </div>
        <div class="select-starters-btn-group">
          <button class="select-starters-btn btn-squirtle button-32" onClick="renderPickCSquirtle()">SELECT</button>
        </div>
      </div> 
      
      
    </div>

  </div>
</div>
  `
  const pokeball1 = document.querySelector('.pokeball-1')
  const pokeball2 = document.querySelector('.pokeball-2')
  const pokeball3 = document.querySelector('.pokeball-3')
  const selected_bulbasaur = document.querySelector(
    '.starter-pokemon.bulbasaur'
  )
  const selected_charmander = document.querySelector(
    '.starter-pokemon.charmander'
  )
  const selected_squirtle = document.querySelector('.starter-pokemon.squirtle')
  const btn_selected_bulbasaur = document.querySelector(
    '.select-starters-btn.btn-bulbasaur'
  )
  const btn_selected_charmander = document.querySelector(
    '.select-starters-btn.btn-charmander'
  )
  const btn_selected_squirtle = document.querySelector(
    '.select-starters-btn.btn-squirtle'
  )
  pokeball1.addEventListener('click', () => {
    pokeball1.classList.add('hidden')
    pokeball2.classList.remove('hidden')
    pokeball3.classList.remove('hidden')
    selected_bulbasaur.classList.remove('hidden')
    selected_charmander.classList.add('hidden')
    selected_squirtle.classList.add('hidden')
  })
  pokeball2.addEventListener('click', () => {
    pokeball1.classList.remove('hidden')
    pokeball2.classList.add('hidden')
    pokeball3.classList.remove('hidden')
    selected_bulbasaur.classList.add('hidden')
    selected_charmander.classList.remove('hidden')
    selected_squirtle.classList.add('hidden')
  })
  pokeball3.addEventListener('click', () => {
    pokeball1.classList.remove('hidden')
    pokeball2.classList.remove('hidden')
    pokeball3.classList.add('hidden')
    selected_squirtle.classList.remove('hidden')
    selected_bulbasaur.classList.add('hidden')
    selected_charmander.classList.add('hidden')
  })
  btn_selected_bulbasaur.addEventListener('click', () => {
    renderPickBulbasaur()
  })
  btn_selected_charmander.addEventListener('click', () => {
    renderPickCharmander()
  })
  btn_selected_squirtle.addEventListener('click', () => {
    renderPickSquirtle()
  })
  // document.querySelector('#starter-pokemon-modal .button-32').addEventListener('click', () => {
  //   renderPokemonParty()
  // })
}

const starterPokemonModal = document.createElement('div')
function renderPickBulbasaur() {
  starterPokemonModal.innerHTML = `
   <div class="moveup modal visible" id="starter-pokemon-modal">
   <div class="modal-content">
     <h2>I CHOOSE YOU!</h2>
     <h3>BULBASAUR</h3>
     <img src="./images/new_starter_pokemon/starter_pokemon_bulbasaur.png" alt="">
     <br>
     <br>
     <button onClick="renderbulbasaur(state.loggedInId, 1)" class="button-32">PLAY</button>
   </div>
 </div>
 `
  // button 92 should add bulbsaour on our renderMyPokemons function.
  document.querySelector('#page').appendChild(starterPokemonModal)
  // backDropOn()
}

function renderbulbasaur(userId, pokemonId) {
  const data = state.pokemons[pokemonId - 1];

  fetch(`/api/startpokemons/${userId}/add_starter_pokemon`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((pokemon) => {
      state.myPokemons.push(pokemon)
      renderMyPokemonsList()
    })
}

function renderPickCharmander(userId, pokemonId) {
  starterPokemonModal.innerHTML = `
     <div class="moveup modal visible" id="starter-pokemon-modal">
     <div class="modal-content">
       <h2>I CHOOSE YOU!</h2>
       <h3>CHARMANDER</h3>
       <img src="./images/new_starter_pokemon/starter_pokemon_charmander.png" alt="">
       <br>
       <br>
       <button onClick="renderCharmander(state.loggedInId, 4)" class="button-32">PLAY</button>
     </div>
   </div>
   `
  document.querySelector('#page').appendChild(starterPokemonModal)
  backDropOn()
}

function renderCharmander(userId, pokemonId) {
  const data = state.pokemons[pokemonId - 1];

  fetch(`/api/startpokemons/${userId}/add_starter_pokemon`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((pokemon) => {
      state.myPokemons.push(pokemon)
      renderMyPokemonsList()
    })
}

function renderPickSquirtle() {
  starterPokemonModal.innerHTML = `
   <div class="moveup modal visible" id="starter-pokemon-modal">
   <div class="modal-content">
     <h2>I CHOOSE YOU!</h2>
     <h3>SQUIRTLE</h3>
     <img src="./images/new_starter_pokemon/starter_pokemon_squirtle.png" alt="">
     <br>
     <br>
     <button onClick="renderSquirtle(state.loggedInId, 7)" class="button-32">PLAY</button>
   </div>
 </div>
 `
  document.querySelector('#page').appendChild(starterPokemonModal)
  //  backDropOn()
}

function renderSquirtle(userId, pokemonId) {
  const data = state.pokemons[pokemonId - 1];

  fetch(`/api/startpokemons/${userId}/add_starter_pokemon`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((pokemon) => {
      state.myPokemons.push(pokemon)
      renderMyPokemonsList()
    })
}
