function renderBattleGround() {
  setStats()
  document.querySelector('#page').innerHTML =
    `
    <button class="button-32" onClick="renderHomePage()">LOG OUT</button>
    <section class="battle-ground">
      <h1>Battle Ground</h1>
      <div class="mainBattleFlex">
        <div class="fourColumns">
          <div class="playerStats">
            <p class="nameP"> Nickname: ${state.playerPokemonToBattle.nickname}</p>
            <p class="nameP"> Name: ${state.playerPokemonToBattle.name}</p>
            <p class="hpP"> HP: ${state.playerPokemonToBattle.hp}</p>
            <p class="attackP"> Attack = ${state.playerPokemonToBattle.attack}</p>
            <p class="defenseP"> Defense = ${state.playerPokemonToBattle.defense}</p>
            <p class="speedP"> Speed = ${state.playerPokemonToBattle.speed}</p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p>MOVES:</p>
            <p>${state.playerPokemonToBattle.moves[0]}</p>
            <p>${state.playerPokemonToBattle.moves[1]}</p>
            <p>${state.playerPokemonToBattle.moves[2]}</p>
            <p>${state.playerPokemonToBattle.moves[3]}</p>

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
            <p> </p>
            <p> </p>
            <p> </p>
            <p>MOVES:</p>
            <p>${state.opponentPokemon.moves[0]}</p>
            <p>${state.opponentPokemon.moves[1]}</p>
            <p>${state.opponentPokemon.moves[2]}</p>
            <p>${state.opponentPokemon.moves[3]}</p>
          </div>
        </div>
      <div class='sideBySide'>
        <button onClick="attackHandler()" class="attBtn">ATTACK</button>
        <button onClick="" class="catchBtn">CATCH: <span class='percent'>20</span>%</button>
      </div>
    </div>

    <div class="battleLog" ></div>
    <div class='return-btn-control'>
      <button id="to-party-btn" class="return-btn hidden" onClick="renderMyPokemonsList()">BACK TO PARTY</button>
    </div>
  </section>
  `
}