function renderBattleGround() {

  document.querySelector('#page').innerHTML =
  `<h2>Battle Ground</h2>
    <div class="mainBattleFlex">
    <div class="fourColumns">
      <div class="playerStats">
        <div class="nameP"> Name: ${state.playerPokemonToBattle.name}</div>
        <div class="hpP"> HP: ${state.playerPokemonToBattle.hp}</div>
        <div class="attackP"> Attack = ${state.playerPokemonToBattle.attack}</div>
        <div class="defenseP"> Defense = ${state.playerPokemonToBattle.defense}</div>
        <div class="speedP"> Speed = ${state.playerPokemonToBattle.speed}</div>
      </div>
      <div class="playerImg">
        <div>HP: <span class="numericalPlayerHealth">${state.playerPokemonToBattle.hp}</span><span>/${state.playerPokemonToBattle.hp}</span></div>
        <progress id="player-health" max="100" value="100"></progress>
        <div class="imageContainer"><img src="${state.playerPokemonToBattle.img}" alt=""></div>
      </div>
      <div class="opponentImg">
        <div>HP: <span class="numericalOpponentHealth">${state.opponentPokemon.hp}</span><span>/${state.opponentPokemon.hp}</span></div>
        <progress id="opponent-health" max="100" value="100"></progress>
        <div class="imageContainer">
          <img src="${state.opponentPokemon.img}" alt="">
        </div>
      
      </div>
      <div class="opponentStats">
        <div class="nameP"> Name: ${state.opponentPokemon.name}</div>
        <div class="hpP"> HP: ${state.opponentPokemon.hp}</div>
        <div class="attackP"> Attack = ${state.opponentPokemon.attack}</div>
        <div class="defenseP"> Defense = ${state.opponentPokemon.defense}</div>
        <div class="speedP"> Speed = ${state.opponentPokemon.speed}</div>
      </div>
    </div>
    <div>
      <button onClick="attackHandler()" class="attBtn">Attack</button>
    </div>
  </div>
  <div class="battleLog" ></div>
  `
}