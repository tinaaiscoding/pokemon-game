let battleStarted = false
let playerToAttack = 'player'
let winner = '';
let battleToContinue = true;

const player = {
  pokemon: {},
  moveToUse: 'state.playerPokemonToBattle.moves[0]',
  currentHealth: 0,
  damageDelt: 0,
  damageSaved: 0,
  damageMultiplier: 1,
  typeMultiplier: false,
  // game start and count details held in player object. 
  count: 0,
  battleToContinue: true,
  pokeballs: 5
}

const opponent = {
  pokemon: {},
  moveToUse: 'na',
  currentHealth: 0,
  damageDelt: 0,
  damageSaved: 0,
  damageMultiplier: 1,
  damagePerTrun: 0,
  typeMultiplier: false,
  catchPercent: 20
}

function attackHandler() {
  if (battleToContinue === true && player.count === 0) {
    speedCheck()
  }
  // round 1
  if (playerToAttack === 'player' && player.battleToContinue === true) {
    playerAttackOpponent()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  } if (playerToAttack === 'opponent' && player.battleToContinue === true) {
    OpponentAttackPlayer()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  }

  // change turns
  if (playerToAttack === 'player') {
    playerToAttack = 'opponent'
  } else {
    playerToAttack = 'player'
  }

  // round 2
  if (playerToAttack === 'player' && player.battleToContinue === true) {
    playerAttackOpponent()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  }
  if (playerToAttack === 'opponent' && player.battleToContinue === true) {
    OpponentAttackPlayer()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  }
}

attackHandler()


function catchHandler() {
  const successCatch = successChance(opponent.catchPercent / 100)
  console.log(player.pokeballs)
  console.log(opponent.catchPercent)

  if (player.pokeballs === 0) {
    console.log("No pokeballs left")
  } else {
    if (successCatch) {
      console.log("caught!")
    } else {
      player.pokeballs = player.pokeballs - 1
      console.log("missed catch")
      console.log(`${player.pokeballs} pokeballs left`)
      OpponentAttackPlayer()
      checkIfOpponentrWon()
      checkIfPlayerWon()
      playerToAttack = 'player'
    }
  }

}

catchHandler()