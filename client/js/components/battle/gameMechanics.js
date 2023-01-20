let winner = '';
let battleToContinue = true;

let playerToAttackFrist = '';

function battle() {
  let playerPokemonChosen = state.playerPokemonToBattle.name;
  const hp = state.playerPokemonToBattle.hp;
  const attack = state.playerPokemonToBattle.attack;
  // const specialAttack = 25
  const defense = state.playerPokemonToBattle.defense;
  const speed = state.playerPokemonToBattle.speed;

  let opponentPokemonChosen = state.opponentPokemon.name;
  const hp2 = state.opponentPokemon.hp;
  const attack2 = state.opponentPokemon.attack;
  // const specialAttack2 = 65
  const defense2 = state.opponentPokemon.defense;
  const speed2 = state.opponentPokemon.speed;

  let maxLifePlayer = hp;
  let maxLifeOpponent = hp2;

  

  let currentPlayerHP = document.querySelector(
    '.numericalPlayerHealth'
  ).innerHTML;
  console.log(currentPlayerHP);
  let currentOpponentHP = document.querySelector(
    '.numericalOpponentHealth'
  ).innerHTML;
  console.log(currentOpponentHP);

  speedCheck(speed, speed2, playerPokemonChosen, opponentPokemonChosen);

  if (playerToAttackFrist === 'player') {
    attackOpponent(attack, defense2, currentOpponentHP, maxLifePlayer);
    // middle functions needed
    chanceToCatch()
    retaliateText();
    attackPlayer(
      attack2,
      defense,
      playerPokemonChosen,
      opponentPokemonChosen,
      currentPlayerHP,
      maxLifePlayer
    );
  } else if (battleToContinue === true) {
    attackPlayer(
      attack2,
      defense,
      playerPokemonChosen,
      opponentPokemonChosen,
      currentPlayerHP,
      maxLifePlayer
    );
    // middle functions needed
    retaliateText();
    attackOpponent(attack, defense2, currentOpponentHP, maxLifePlayer);
  }
}

function attackOpponent(attack, defense2, currentOpponentHP) {
  // let currentOpponentHP = +document.querySelector('.numericalOpponentHealth').innerHTML
  const damageToOpponent = dealPlayerDamage(attack, defense2);
  console.log(damageToOpponent);
  
  document.querySelector('.percent').innerHTML = +document.querySelector('.percent').innerHTML + damageToOpponent
  if (document.querySelector('.percent').innerHTML === 'NaN') {
    document.querySelector('.percent').innerHTML = 0
  }

  console.log(currentOpponentHP);

  if (damageToOpponent !== undefined) {
    currentOpponentHP = +currentOpponentHP - damageToOpponent; 
  }

  //code to prevent < 0 health
  document.querySelector('.numericalOpponentHealth').innerHTML = currentOpponentHP;
  
  if (+currentOpponentHP < 0) {
    document.querySelector('.numericalOpponentHealth').innerHTML = 0;
  }

  if (battleToContinue === true) {
  }
}

function attackPlayer(
  attack2,
  defense,
  playerPokemonChosen,
  opponentPokemonChosen,
  currentPlayerHP
) {
  const damageToPlayer = dealOpponentDamage(
    attack2,
    defense,
    playerPokemonChosen,
    opponentPokemonChosen
  );

  if (damageToPlayer !== undefined) {
  currentPlayerHP =  +currentPlayerHP - damageToPlayer;
  }
  //code to prevent < 0 health

  document.querySelector('.numericalPlayerHealth').innerHTML = currentPlayerHP;
  
  if (+currentPlayerHP < 0) {
    document.querySelector('.numericalPlayerHealth').innerHTML = 0;
  }

  if (battleToContinue === true) {
    checkWinner();
  }
}

function attackHandler() {
  battle();
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
  let opponentHp = document.querySelector('.numericalOpponentHealth').innerHTML;
  let oppenentHealthBar = document.querySelector('#opponent-health');
  let playerPokemonName = state.playerPokemonToBattle.name;
  let opponentPokemonName = state.opponentPokemon.name;

  console.log(`This is opp heatlh ${opponentHp.value}`);
  console.log(`This is opp bar ${oppenentHealthBar.value}`);

  if (battleToContinue === true) {
    const dealtDamage = Math.floor(Math.random() * playerPokeDmg);
    let opponentDefend = Math.floor(Math.floor(Math.random() * defense2) / 1.5);
    if (opponentDefend > dealtDamage) {
      opponentDefend = dealtDamage;
      console.log('all damage was defended');
    }

    oppenentHealthBar.value =
      +oppenentHealthBar.value - (dealtDamage - opponentDefend);
    opponentHp.value = +opponentHp.value - (dealtDamage - opponentDefend);

    // code to log on HTML page
    const battleLogStrike = document.createElement('div');
    battleLogStrike.innerHTML = `${playerPokemonName} used ATT and produced ${dealtDamage} damage, ${opponentPokemonName} defended ${opponentDefend} damage. ${opponentPokemonName} recieved a total of ${
      dealtDamage - opponentDefend
    } damage.`;
    document.querySelector('.battleLog').appendChild(battleLogStrike);
    return dealtDamage - opponentDefend;
  }
}



// dmg FROM Opponent TO Player
function dealOpponentDamage(
  opponenetPokeDmg,
  defense,
  playerPokemonName,
  opponentPokemonName
) {
  let playerHp = document.querySelector('.numericalPlayerHealth').innerHTML;
  let playerHealthBar = document.querySelector('#player-health');

  if (battleToContinue === true) {
    const dealtDamage = Math.floor(Math.random() * opponenetPokeDmg);
    let playerDefend = Math.floor(Math.floor(Math.random() * defense) / 1.3);

    if (playerDefend > dealtDamage) {
      playerDefend = dealtDamage;
      console.log('all damage was defended');
    }
    playerHealthBar.value =
      +playerHealthBar.value - (dealtDamage - playerDefend);
    playerHp.value = +playerHp.value - (dealtDamage - playerDefend);
    // code to log on HTML page
    const battleLogStrike = document.createElement('p');
    battleLogStrike.innerHTML = `${opponentPokemonName} used ATT and produced ${dealtDamage} damage, ${playerPokemonName} defended ${playerDefend} damage. ${playerPokemonName} recieved a total of ${
      dealtDamage - playerDefend
    } damage.`;
    document.querySelector('.battleLog').appendChild(battleLogStrike);
    return dealtDamage - playerDefend;
  }
}

function speedCheck(speed, speed2, playerPokemonName, opponentPokemonName) {
  if (speed > speed2 && battleToContinue === true) {
    playerToAttackFrist = 'player';
    const battleLogSpeed = document.createElement('div');
    battleLogSpeed.innerHTML = `${playerPokemonName} has the faster attack speed and attacks ${opponentPokemonName} first....`;
    document.querySelector('.battleLog').appendChild(battleLogSpeed);
  }
  if (speed2 > speed && battleToContinue === true) {
    const battleLogSpeed = document.createElement('p');
    battleLogSpeed.innerHTML = `${opponentPokemonName} has the faster attack speed and attacks ${playerPokemonName} first....`;
    document.querySelector('.battleLog').appendChild(battleLogSpeed);
    playerToAttackFrist = 'opponent';
  }
  return playerToAttackFrist;
}

function retaliateText() {
  const playerPokemonName = state.playerPokemonToBattle.name;
  const opponentPokemonName = state.opponentPokemon.name;
  if (playerToAttackFrist === 'player' && battleToContinue != false) {
    const battleLogRetaliate = document.createElement('p');
    battleLogRetaliate.innerHTML = `${opponentPokemonName} survives the attack and launches a counter attack on ${playerPokemonName}`;
    document.querySelector('.battleLog').appendChild(battleLogRetaliate);
  }
  if (playerToAttackFrist === 'opponent' && battleToContinue != false) {
    const battleLogRetaliate = document.createElement('div');
    battleLogRetaliate.innerHTML = `${playerPokemonName} survives the attack and launches a counter attack on ${opponentPokemonName}`;
    document.querySelector('.battleLog').appendChild(battleLogRetaliate);
  }
}

function checkWinner() {
  const playerPokemonName = state.playerPokemonToBattle.name;
  const opponentPokemonName = state.opponentPokemon.name;

  if (document.querySelector('.numericalPlayerHealth').innerHTML <= 0) {
    const battleLogOpponentWin = document.createElement('p');
    battleLogOpponentWin.innerHTML = `${playerPokemonName} has fainted! ${opponentPokemonName} wins the battle!`;
    document.querySelector('.battleLog').appendChild(battleLogOpponentWin);
    battleToContinue = false;
    console.log('winner opponent');
    winner = 'opponent';
  }
  if (document.querySelector('.numericalOpponentHealth').innerHTML <= 0) {
    const battleLogPlayerWin = document.createElement('div');
    battleLogPlayerWin.innerHTML = `${opponentPokemonName} has fainted! ${playerPokemonName} wins the battle!`;
    document.querySelector('.battleLog').appendChild(battleLogPlayerWin);
    battleToContinue = false;
    console.log('winner player');
    winner = 'player';
  }
  return winner;
}

// function chanceToCatch() {
//   let missingHealth = state.opponentPokemon.hp - document.querySelector('.numericalOpponentHealth').innerHTML - state.opponentPokemon.hp 
//   console.log(missingHealth);
//   let chance =  20 + missingHealth
//   console.log(chance);
//   document.querySelector('.percentage').innerHTML = chance
// }