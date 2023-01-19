// each pokemon will have it's own button generated via the party.js file. 
// Clikcing the button will INSERT THAT pokemon into battle. 
function pickOpponentPokemon() {
  let oppIdNum = Math.floor((Math.random() * 151) + 1)
  console.log('RANDOM NUMBER');
  
  console.log(oppIdNum);
  fetch(`/api/battle/opponent/${oppIdNum}`)
  .then(res => res.json())
  .then((opponentToBattle) => {
    console.log('OPPONENT ENTERING BATTLE');
    
    console.log(opponentToBattle)
    state.opponentPokemon = opponentToBattle
  })
}   

function takePokemonToBattle(event) {
  const battleBTN = event.target
  const pokemonDOM = battleBTN.closest('.myPokemon')
  const pokemonId = pokemonDOM.dataset.id
  // console.log(pokemonId); working

  pickOpponentPokemon()

  fetch(`/api/battle/${pokemonId}`)
    .then(res => res.json())
    .then((pokemonToBattle) => {
      // need to console log the state below and see what it looks like
      console.log('POKEMON ENTERING BATTLE');
      
      console.log(pokemonToBattle);
      state.playerPokemonToBattle = pokemonToBattle
      
      
      // make sure the above two fetch commands are finished before renderBattleGround actions. 
      renderBattleGround()
    })
}

