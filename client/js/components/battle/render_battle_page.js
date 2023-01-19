function renderBattleGround() {

  document.querySelector('#page').innerHTML =
    `<section class="battle-ground">
      <h1>Battle Ground</h1>
      <div class="mainBattleFlex">
        <div class="fourColumns">
          <div class="playerStats">
            <p class="nameP"> Name: ${state.playerPokemonToBattle.name}</p>
            <p class="hpP"> HP: ${state.playerPokemonToBattle.hp}</p>
            <p class="attackP"> Attack = ${state.playerPokemonToBattle.attack}</p>
            <p class="defenseP"> Defense = ${state.playerPokemonToBattle.defense}</p>
            <p class="speedP"> Speed = ${state.playerPokemonToBattle.speed}</p>
          </div>
          <div class="playerImg">
            <div>HP: <span class="numericalPlayerHealth">${state.playerPokemonToBattle.hp}</span><span>/${state.playerPokemonToBattle.hp}</span></div>
            <progress id="player-health" max="${state.playerPokemonToBattle.hp}" value="${state.playerPokemonToBattle.hp}"></progress>
            <div class="imageContainer"><img src="${state.playerPokemonToBattle.img}" alt=""></div>
          </div>
          <div class="opponentImg">
            <div>HP: <span class="numericalOpponentHealth">${state.opponentPokemon.hp}</span><span>/${state.opponentPokemon.hp}</span></div>
            <progress id="opponent-health" max="${state.opponentPokemon.hp}" value="${state.opponentPokemon.hp}"></progress>
            <div class="imageContainer">
              <img src="${state.opponentPokemon.img}" alt="">
            </div>
          
          </div>
          <div class="opponentStats">
            <p class="nameP"> Name: ${state.opponentPokemon.name}</p>
            <p class="hpP"> HP: ${state.opponentPokemon.hp}</p>
            <p class="attackP"> Attack = ${state.opponentPokemon.attack}</p>
            <p class="defenseP"> Defense = ${state.opponentPokemon.defense}</p>
            <p class="speedP"> Speed = ${state.opponentPokemon.speed}</p>
          </div>
        </div>
      <div>
        <button onClick="attackHandler()" class="attBtn">ATTACK</button>
      </div>
    </div>

    <div class="battleLog" ></div>
  </section>
  `
}