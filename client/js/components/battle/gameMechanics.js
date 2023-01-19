function populate() {

  
let playerPokemonChosen = state.playerPokemonToBattle.name
const hp = state.playerPokemonToBattle.hp
const attack = state.playerPokemonToBattle.attack
// const specialAttack = 25
const defense = state.playerPokemonToBattle.defense
const speed = state.playerPokemonToBattle.speed


let opponentPokemonChosen = state.opponentPokemon.name
const hp2 = state.opponentPokemon.hp
const attack2 = state.opponentPokemon.attack
// const specialAttack2 = 65
const defense2 = state.opponentPokemon.defense
const speed2 = state.opponentPokemon.speed

let maxLifePlayer = hp
let maxLifeOpponent = hp2
let currentPlayerHP = maxLifePlayer
let currentOpponentHP = maxLifeOpponent

speedCheck(speed, speed2, playerPokemonChosen, opponentPokemonChosen)
if (playerToAttackFrist === 'player') {
  attackOpponent(attack, defense2, currentOpponentHP, maxLifePlayer)
  checkWinner(currentPlayerHP, currentOpponentHP)
// middle functions needed
  retaliateText() 
  attackPlayer(attack2, defense, playerPokemonChosen, opponentPokemonChosen, currentPlayerHP, maxLifePlayer)
  checkWinner(currentPlayerHP, currentOpponentHP)
} else {
  attackPlayer(attack2, defense, playerPokemonChosen, opponentPokemonChosen, currentPlayerHP, maxLifePlayer)
  checkWinner(currentPlayerHP, currentOpponentHP)
  // middle functions needed
  retaliateText() 
  attackOpponent(attack, defense2, currentOpponentHP, maxLifePlayer)
  checkWinner(currentPlayerHP, currentOpponentHP)
}

}
// console.log(opponentPokemonChosen)
// let hp2 = oppArry[1]
// let attack2 = oppArry[2]
// let specialAttack2 = oppArry[3]
// let defense2 = oppArry[4]
// let speed2 = oppArry[5]

// let opponentPokemonChosen = oppArry[0]
// console.log(opponentPokemonChosen)
// let hp2 = oppArry[1]
// let attack2 = oppArry[2]
// let specialAttack2 = oppArry[3]
// let defense2 = oppArry[4]
// let speed2 = oppArry[5]
// opponent


let winner = ''
let battleToContinue = true



let playerToAttackFrist = ''


function attackOpponent(attack, defense2, currentOpponentHP, maxLifePlayer) {
  const damageToOpponent = dealPlayerDamage(attack, defense2)
  currentOpponentHP -= damageToOpponent
  //code to prevent < 0 health
  if (currentOpponentHP < 0) {
    currentOpponentHP = 0
  }
  document.querySelector('.numericalOpponentHealth').innerHTML = currentOpponentHP + `/` +  maxLifePlayer
}

function attackPlayer(attack2, defense, playerPokemonChosen, opponentPokemonChosen, currentPlayerHP, maxLifePlayer) {
  const damageToPlayer = dealOpponentDamage(attack2, defense, playerPokemonChosen, opponentPokemonChosen)
  currentPlayerHP -= damageToPlayer
  //code to prevent < 0 health
  if (currentPlayerHP < 0) {
    currentPlayerHP = 0
  }
  document.querySelector('.numericalPlayerHealth').innerHTML = currentPlayerHP + `/` +  maxLifePlayer
}


function attackHandler() {
  populate()

}



// const attackBtn = document.querySelector('.attBtn');

// attackBtn.addEventListener('click', attackHandler)

// adjustHealthBars(maxLifePlayer, maxLifeOpponent)


// const attackBtn = document.querySelector('.attBtn');



function adjustHealthBars(maxLifeP, maxlifeOpp) {
  opponentHealthBar.max = maxlifeOpp;
  opponentHealthBar.value = maxlifeOpp;
  playerHealthBar.max = maxLifeP;
  playerHealthBar.value = maxLifeP;
}


// dmg FROM Player TO Opponent
function dealPlayerDamage(playerPokeDmg, defense2) {
  const opponentHp = document.querySelector('.numericalOpponentHealth');
  const oppenentHealthBar = document.querySelector('#opponent-health');
  const playerPokemonName = state.playerPokemonToBattle.name
  const opponentPokemonName = state.opponentPokemon.name

  if (battleToContinue === true) {
    const dealtDamage = Math.floor(Math.random() * playerPokeDmg)
    let opponentDefend = Math.floor(Math.floor(Math.random() * defense2) / 1.5)
    if (opponentDefend > dealtDamage) {
      opponentDefend = dealtDamage
      console.log('all damage was defended');
    }
    oppenentHealthBar.value = +oppenentHealthBar.value - (dealtDamage - opponentDefend)
    opponentHp.value = +opponentHp.value - (dealtDamage - opponentDefend)
  
    // code to log on HTML page 
    const battleLogStrike = document.createElement('div')
    battleLogStrike.innerHTML = `${playerPokemonName} used ATT and produced ${dealtDamage} damage, ${opponentPokemonName} defended ${opponentDefend} damage. ${opponentPokemonName} recieved a total of ${dealtDamage - opponentDefend} damage.`
    document.querySelector('.battleLog').appendChild(battleLogStrike)
    return dealtDamage - opponentDefend
  }
}


// dmg FROM Opponent TO Player
function dealOpponentDamage(opponenetPokeDmg, defense, playerPokemonName, opponentPokemonName) {
  const playerHp = document.querySelector('.numericalPlayerHealth')
  const playerHealthBar = document.querySelector('#player-health');

  if (battleToContinue === true) {
    const dealtDamage = Math.floor(Math.random() * opponenetPokeDmg)
    let playerDefend = Math.floor(Math.floor(Math.random() * defense) / 1.3)
    console.log(dealtDamage);
    console.log(playerDefend);
    if (playerDefend > dealtDamage) {
      playerDefend = dealtDamage
      console.log('all damage was defended');
    }
    playerHealthBar.value = +playerHealthBar.value - (dealtDamage - playerDefend)
    playerHp.value = +playerHp.value - (dealtDamage - playerDefend)
    // code to log on HTML page 
    const battleLogStrike = document.createElement('p')
    battleLogStrike.innerHTML = `${opponentPokemonName} used ATT and produced ${dealtDamage} damage, ${playerPokemonName} defended ${playerDefend} damage. ${playerPokemonName} recieved a total of ${dealtDamage - playerDefend} damage.`
    document.querySelector('.battleLog').appendChild(battleLogStrike)
    return dealtDamage - playerDefend
  }
}


function speedCheck(speed, speed2, playerPokemonName, opponentPokemonName) {
  
  if (speed > speed2 && battleToContinue === true) {
    playerToAttackFrist = 'player'
    const battleLogSpeed = document.createElement('div')
    battleLogSpeed.innerHTML = `${playerPokemonName} has the faster attack speed and attacks ${opponentPokemonName} first....`
    document.querySelector('.battleLog').appendChild(battleLogSpeed)
  } if (speed2 > speed && battleToContinue === true) {
    const battleLogSpeed = document.createElement('p')
    battleLogSpeed.innerHTML = `${opponentPokemonName} has the faster attack speed and attacks ${playerPokemonName} first....`
    document.querySelector('.battleLog').appendChild(battleLogSpeed)
    playerToAttackFrist = 'opponent'
  }
  return playerToAttackFrist
}

function retaliateText() {
  const playerPokemonName = state.playerPokemonToBattle.name
  const opponentPokemonName = state.opponentPokemon.name
  if (playerToAttackFrist === 'player' && battleToContinue != false) {
    const battleLogRetaliate = document.createElement('p')
    battleLogRetaliate.innerHTML = `${opponentPokemonName} survives the attack and launches a counter attack on ${playerPokemonName}`
    document.querySelector('.battleLog').appendChild(battleLogRetaliate)
  } if (playerToAttackFrist === 'opponent' && battleToContinue != false) {
    const battleLogRetaliate = document.createElement('div')
    battleLogRetaliate.innerHTML = `${playerPokemonName} survives the attack and launches a counter attack on ${opponentPokemonName}`
    document.querySelector('.battleLog').appendChild(battleLogRetaliate)
  }
}

function checkWinner(currentPlayerHP, currentOpponentHP) {
  const playerPokemonName = state.playerPokemonToBattle.name
  const opponentPokemonName = state.opponentPokemon.name
  if (currentPlayerHP <= 0) {
    const battleLogOpponentWin = document.createElement('p')
    battleLogOpponentWin.innerHTML = `${playerPokemonName} has fainted! ${opponentPokemonName} wins the battle!`
    document.querySelector('.battleLog').appendChild(battleLogOpponentWin)
    battleToContinue = false
    console.log('winner');
    winner = 'opponent'
  } if (currentOpponentHP <= 0) {
    const battleLogPlayerWin = document.createElement('div')
    battleLogPlayerWin.innerHTML = `${opponentPokemonName} has fainted! ${playerPokemonName} wins the battle!`
    document.querySelector('.battleLog').appendChild(battleLogPlayerWin)
    battleToContinue = false
    console.log('winner');
    winner = 'player'
  }
  return winner
}