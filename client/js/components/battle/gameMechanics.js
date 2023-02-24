let battleStarted = false
let playerToAttack = 'player'
let winner = '';

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
  pokeballs: 2
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
  if (player.battleToContinue === true && player.count === 0) {
    speedCheck()
  }
  // round 1
  if (playerToAttack === 'player' && player.battleToContinue === true) {
    playerAttackOpponent()
    checkIfPlayerWon()
    checkIfOpponentWon()
  } if (playerToAttack === 'opponent' && player.battleToContinue === true) {
    OpponentAttackPlayer()
    checkIfPlayerWon()
    checkIfOpponentWon()
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
    checkIfPlayerWon()
    checkIfOpponentWon()
  }
  if (playerToAttack === 'opponent' && player.battleToContinue === true) {
    OpponentAttackPlayer()
    checkIfPlayerWon()
    checkIfOpponentWon()
  }
}

attackHandler()


function catchHandler() {
  var battlelog = document.querySelector('.battleLog')
  battlelog.scrollTop = battlelog.scrollHeight
  const successCatch = successChance(opponent.catchPercent / 100)

  if (player.pokeballs === 0) {
    const battleLogZeroBalls = document.createElement('p');
    battleLogZeroBalls.innerHTML = `You don't have enough pokeballs!`
    document.querySelector('.battleLog').appendChild(battleLogZeroBalls)
  } else {
    if (successCatch) {
      const battleLogCatchSucessful = document.createElement('p');
      battleLogCatchSucessful.innerHTML = `Nice! You caught ${opponent.pokemon.name}`
      document.querySelector('.battleLog').appendChild(battleLogCatchSucessful)
      revealBtn('to-party-btn')
      player.battleToContinue = false
      addCaughtPokemon()
      // function fetch request
    } else {
      player.pokeballs = player.pokeballs - 1
      const battleLogCatchFailed = document.createElement('p');
      battleLogCatchFailed.innerHTML = `Catch failed. It was so close! You have ${player.pokeballs} pokeballs left.`
      document.querySelector('.battleLog').appendChild(battleLogCatchFailed)
      OpponentAttackPlayer()
      checkIfPlayerWon()
      checkIfOpponentWon()
      playerToAttack = 'player'
    }
  }
}

catchHandler()