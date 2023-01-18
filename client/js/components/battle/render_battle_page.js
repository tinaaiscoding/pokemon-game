function renderBattleGround() {

  document.querySelector('#page').innerHTML =
  `<h2>Battle Ground</h2>
    <div class="mainBattleFlex">
    <div class="fourColumns">
      <div class="playerStats">
        <div class="nameP"> Name: ${state.playerPokemonToBattle[0].name}</div>
        <div class="hpP"> HP: ${state.playerPokemonToBattle[0].hp}</div>
        <div class="attackP"> Attack = ${state.playerPokemonToBattle[0].attack}</div>
        <div class="defenseP"> Defense = ${state.playerPokemonToBattle[0].defense}</div>
        <div class="speedP"> Speed = ${state.playerPokemonToBattle[0].speed}</div>
      </div>
      <div class="playerImg">
        <div>HP: <span class="numericalPlayerHealth">${state.playerPokemonToBattle[0].hp}</span><span>/${state.playerPokemonToBattle[0].hp}</span></div>
        <progress id="player-health" max="100" value="100"></progress>
        <div class="imageContainer"><img src="${state.playerPokemonToBattle[0].img}" alt=""></div>
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