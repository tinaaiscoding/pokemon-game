// each pokemon will have it's own button generated via the party.js file. 
// Clikcing the button will INSERT THAT pokemon into battle. 
function pickOpponentPokemon() {
  let oppIdNum = Math.floor((Math.random() * 7) + 1)
  fetch(`/api/pokemons/${oppIdNum}`)
  .then((opponentToBattle) => {
    state.opponentPokemon = opponentToBattle
  })
}   

function takePokemonToBattle(event) {
  const battleBTN = event.target
  const pokemonDOM = battleBTN.closest('.myPokemon')
  const pokemonId = pokemonDOM.dataset.id

  fetch(`/api/pokemons/${pokemonId}`)
    .then((pokemonToBattle) => {
      // need to console log the state below and see what it looks like
      state.playerPokemonToBattle = pokemonToBattle
      
      pickOpponentPokemon()
        // make sure the above two fetch commands are finished before renderBattleGround actions. 
      renderBattleGround()
    })
}

function deleteTreasure(event) {  
  const deleteBtn = event.target
  const treasureDOM = deleteBtn.closest('.treasure')
  const treasureId = treasureDOM.dataset.id

  fetch(`/api/treasures/${treasureId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.treasures = state.treasures.filter(t => t.id != treasureId)
      renderTreasureList()
    })
}