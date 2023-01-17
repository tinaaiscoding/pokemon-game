function renderNewStaterPokemon() {
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
    </div>
  `


  const pokeball1 = document.querySelector('.pokeball-1')
  const pokeball2 = document.querySelector('.pokeball-2')
  const pokeball3 = document.querySelector('.pokeball-3')
  const selected_bulbasaur = document.querySelector('.starter-pokemon.bulbasaur')
  const selected_charmander = document.querySelector('.starter-pokemon.charmander')
  const selected_squirtle = document.querySelector('.starter-pokemon.squirtle')

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
    console.log('3');
    pokeball1.classList.remove('hidden')
    pokeball2.classList.remove('hidden')
    pokeball3.classList.add('hidden')

    selected_squirtle.classList.remove('hidden')
    selected_bulbasaur.classList.add('hidden')
    selected_charmander.classList.add('hidden')
  })

}