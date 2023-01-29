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
typeMultiplier: false
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
  if (battleToContinue === true) {
  speedCheck()
  }
  // round 1
  if (playerToAttack === 'player' && battleToContinue === true) {
    playerAttackOpponent()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  } if (playerToAttack === 'opponent' && battleToContinue === true) {
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
  if (playerToAttack === 'player' && battleToContinue === true) {
    playerAttackOpponent()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  }
  if (playerToAttack === 'opponent' && battleToContinue === true) {
    OpponentAttackPlayer()
    checkIfOpponentrWon()
    checkIfPlayerWon()
  }  
}

attackHandler()
