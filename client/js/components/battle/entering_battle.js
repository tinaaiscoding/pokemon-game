// each pokemon will have it's own button generated via the party.js file. 
// Clikcing the button will INSERT THAT pokemon into battle. 
function pickOpponentPokemon() {
  let oppIdNum = Math.floor((Math.random() * 7) + 1)
  fetch(`/opponent/${oppIdNum}`)
  .then((opponentToBattle) => {
    console.log(opponentToBattle)
    state.opponentPokemon = opponentToBattle
  })
}   

function takePokemonToBattle(event) {
  const battleBTN = event.target
  const pokemonDOM = battleBTN.closest('.myPokemon')
  const pokemonId = pokemonDOM.dataset.id
  // console.log(pokemonId); working

  fetch(`/api/battle/${pokemonId}`)
    .then(res => res.json())
    .then((pokemonToBattle) => {
      // need to console log the state below and see what it looks like
      console.log(pokemonToBattle);
      state.playerPokemonToBattle = pokemonToBattle
      
      pickOpponentPokemon()
      // make sure the above two fetch commands are finished before renderBattleGround actions. 
      renderBattleGround()
    })
}

