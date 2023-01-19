function renderNewStaterPokemon() {
  backDropOff()
  document.querySelector('.header-nav').innerHTML = ``
  document.querySelector('#page').innerHTML = `
  <div id="new_starter_pokemon_page">
    <div class="pokeballs-group">
      <img class="pokeball pokeball-1" src="./images/new_starter_pokemon/pokeball_close.png" alt="">
      <img class="pokeball pokeball-2" src="./images/new_starter_pokemon/pokeball_close.png" alt="">
      <img class="pokeball pokeball-3" src="./images/new_starter_pokemon/pokeball_close.png" alt="">      
    </div>

    <div class="starter-pokemon-group">
      <img class="starter-pokemon bulbasaur hidden" src="./images/new_starter_pokemon/selected_bulbasaur.png" alt="">

      <img class="starter-pokemon charmander hidden" src="./images/new_starter_pokemon/selected_charmander.png" alt="">

      <img class="starter-pokemon squirtle hidden" src="./images/new_starter_pokemon/selected_squirtle.png" alt="">
    </div>

    <div class="select-starters-btn-group">
      <button class="select-starters-btn btn-bulbasaur button-32" onClick="renderPickBulbasaur()">SELECT</button>
      <button class="select-starters-btn btn-charmander button-32" onClick="renderPickCharmander()">SELECT</button>
      <button class="select-starters-btn btn-squirtle button-32" onClick="renderPickCSquirtle()">SELECT</button>
    </div>
  </div>
  `

  const pokeball1 = document.querySelector('.pokeball-1')
  const pokeball2 = document.querySelector('.pokeball-2')
  const pokeball3 = document.querySelector('.pokeball-3')
  const selected_bulbasaur = document.querySelector('.starter-pokemon.bulbasaur')
  const selected_charmander = document.querySelector('.starter-pokemon.charmander')
  const selected_squirtle = document.querySelector('.starter-pokemon.squirtle')
  const btn_selected_bulbasaur = document.querySelector('.select-starters-btn.btn-bulbasaur')
  const btn_selected_charmander = document.querySelector('.select-starters-btn.btn-charmander')
  const btn_selected_squirtle = document.querySelector('.select-starters-btn.btn-squirtle')

  pokeball1.addEventListener('click', () => {
    console.log('1');
    pokeball1.classList.add('hidden')
    pokeball2.classList.remove('hidden')
    pokeball3.classList.remove('hidden')

    selected_bulbasaur.classList.remove('hidden')
    selected_charmander.classList.add('hidden')
    selected_squirtle.classList.add('hidden')
  })

  pokeball2.addEventListener('click', () => {
    console.log('2');
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
   <div class="modal visible" id="starter-pokemon-modal">
   <div class="modal-content">
     <h2>I CHOOSE YOU!</h2>
     <h3>POKEMON NAME</h3>
     <img src="./images/new_starter_pokemon/starter_pokemon_bulbasaur.png" alt=""> 
     <br>
     <br>
     <button onClick="renderMyPokemonsList(event)" class="button-32">PLAY</button>
   </div>
 </div>
 `
  // button 92 should add bulbsaour on our renderMyPokemons function. 
  document.querySelector('#page').appendChild(starterPokemonModal)

  // backDropOn();
}

// function renderbulbasaur(event) {
//   event.preventDefault() 
//   fetch('/api/mypokemons')

//     .then(res => res.json())
//     .then(pokemon => {

//         state.myPokemons.push(pokemon)
//         renderMyPokemonsList()
//     })
//     // .then(renderMyPokemonsList() )

// }

function renderPickCharmander() {

  starterPokemonModal.innerHTML = `
     <div class="modal visible" id="starter-pokemon-modal">
     <div class="modal-content">
       <h2>I CHOOSE YOU!</h2>
       <h3>POKEMON NAME</h3>
       <img src="./images/new_starter_pokemon/starter_pokemon_charmander.png" alt=""> 
       <br>
       <br>
       <button onClick="renderMyPokemonsList()" class="button-32">PLAY</button>
     </div>
   </div>
   `

  document.querySelector('#page').appendChild(starterPokemonModal)

  backDropOn();
}




function renderPickSquirtle() {
  starterPokemonModal.innerHTML = `
   <div class="modal visible" id="starter-pokemon-modal">
   <div class="modal-content">
     <h2>I CHOOSE YOU!</h2>
     <h3>POKEMON NAME</h3>
     <img src="./images/new_starter_pokemon/starter_pokemon_squirtle.png" alt=""> 
     <br>
     <br>
     <button onClick="renderMyPokemonsList()" class="button-32">PLAY</button>
   </div>
 </div>
 `
  document.querySelector('#page').appendChild(starterPokemonModal)

  //  backDropOn();
}


//function renderbulbasaur(event) {
//  event.preventDefault()
 // fetch('/api/mypokemons')
 //   .then(res => res.json())
  //  .then(pokemons => {
    //  state.pokemons = pokemons
      // console.log(pokemons)
      // state.myPokemons.push(state.pokemons[0])
   // })
  // renderMyPokemonList()
// }
