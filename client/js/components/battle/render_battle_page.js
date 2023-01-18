function renderBattleGround() {

  document.querySelector('#page').innerHTML =
  `<h2>Battle Ground</h2>
    <div class="mainBattleFlex">
    <div class="fourColumns">
      <div class="playerStats">
        <div class="nameP"> Name: ${state.playerPokemonToBattle[1]}</div>
        <div class="hpP"> HP: ${state.playerPokemonToBattle[3]}</div>
        <div class="attackP"> Attack = ${state.playerPokemonToBattle[4]}</div>
        <div class="defenseP"> Defense = ${state.playerPokemonToBattle[5]}</div>
        <div class="speedP"> Speed = ${state.playerPokemonToBattle[6]}</div>
      </div>
      <div class="playerImg">
        <div>HP: <span class="numericalPlayerHealth">${state.playerPokemonToBattle[3]}</span><span>/${state.playerPokemonToBattle[3]}</span></div>
        <progress id="player-health" max="100" value="100"></progress>
        <div class="imageContainer"><img src="${state.playerPokemonToBattle[2]}" alt=""></div>
      </div>
      <div class="opponentImg">
        <div>HP: <span class="numericalOpponentHealth">${state.opponentPokemon[3]}</span><span>/${state.opponentPokemon[3]}</span></div>
        <progress id="opponent-health" max="100" value="100"></progress>
        <div class="imageContainer">
          <img src="${state.opponentPokemon[2]}" alt="">
        </div>
      
      </div>
      <div class="opponentStats">
        <div class="nameP"> Name: ${state.opponentPokemon[1]}</div>
        <div class="hpP"> HP: ${state.opponentPokemon[3]}</div>
        <div class="attackP"> Attack = ${state.opponentPokemon[4]}</div>
        <div class="defenseP"> Defense = ${state.opponentPokemon[5]}</div>
        <div class="speedP"> Speed = ${state.opponentPokemon[6]}</div>
      </div>
    </div>
    <div>
      <button class="attBtn">Attack</button>
    </div>
  </div>
  <div class="battleLog" ></div>
  `
}