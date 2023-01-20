// each pokemon will have it's own button generated via the party.js file. 
// Clikcing the button will INSERT THAT pokemon into battle. 
function pickOpponentPokemon() {
  let oppIdNum = Math.floor((Math.random() * 151) + 1)

  fetch(`/api/battle/opponent/${oppIdNum}`)
  .then(res => res.json())
  .then((opponentToBattle) => {state.opponentPokemon = opponentToBattle})
}   

function takePokemonToBattle(event) {
  const battleBTN = event.target
  const pokemonDOM = battleBTN.closest('.myPokemon')
  const pokemonId = pokemonDOM.dataset.id

  // pickOpponentPokemon()

  fetch(`/api/battle/${pokemonId}`)
    .then(res => res.json())
    .then((pokemonToBattle) => {
      state.playerPokemonToBattle = pokemonToBattle
      renderBattleGround()
    })
}

