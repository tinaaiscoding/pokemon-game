fetch('/api/pokemons')
  .then((res) => res.json())
  .then((pokemons) => {
    state.pokemons = pokemons;
  });

function renderMyPokemonsList() {
  pickOpponentPokemon();
  closeModal();
  backDropOff();
  document.querySelector('#page').innerHTML = `
    <button class="button-32" onClick="renderHomePage(event)">LOG OUT</button>
        <section class='party-pokemon-list'>
            <h1 class="h1-title" >MY PARTY</h1>
            <div class="myPokemons">
              ${renderMyPokemons()}
            </div>
        </section>
    `;
}

function renderMyPokemons() {
  return state.myPokemons
    .map(
      (myPokemon) => `
        <section class='myPokemon' data-id='${myPokemon.id}'>
          <div class="cards">
            <div class="card-top">
              <div class="card-header">
                <h2 onClick="renderEditModal(event)">
                  ${myPokemon.nickname}
                </h2>

                <span>
                  HP ${myPokemon.hp - 10} / ${myPokemon.hp}
                </span>
                <progress 
                  id="pokemon-hp" 
                  value="${myPokemon.hp - 10}" 
                  max="${myPokemon.hp}"
                ></progress>
              </div>
                
              <div class='card-img'>
                <img src="${myPokemon.img}" alt="">
              </div>
            </div>

            <div class="card-buttons">
              <button 
                onClick="takePokemonToBattle(event)" 
                class="to-battle-btn">BATTLE
              </button>
            
              <button 
                onClick="releasePokemon(event)" 
                class="button-release"
                {${state.myPokemons.length > 1 && `disabled='false'`}
              >
                RELEASE
              </button>
              
            </div>
          </div>
        </section>  
    `
    )
    .join('');
}

function renderEditModal(event) {
  const editBtn = event.target;
  const myPokemonDOM = editBtn.closest('.myPokemon');
  const myPokemonId = myPokemonDOM.dataset.id;
  const myPokemons = state.myPokemons;

  myPokemons.forEach((myPokemon) => {
    const myPokemonId1 = Number(myPokemonId);

    if (+myPokemonId1 === +myPokemon.id) {
      document.querySelector('#modal-wrapper').innerHTML = `
              <section class="modal visible" id="edit-modal">
                  <div class="modal-content edit-nickname" data-id="${myPokemon.id}">
                      <button class="close-btn" onClick="closeModal('edit-modal')">X</button>               
                      <form onSubmit="editNickname(event)">
                          <h2 class="modal-title">Edit ${myPokemon.nickname}'s Name</h2>

                          <input placeholder="New Nickname" type="text" name="nickname">

                          <button class="btn btn-edit"">EDIT NICKNAME</button>
                      </form>
                  </div>
              </section>
          `;

      backDropOn();
    }
  });
  const editNameModal = document.querySelector('#edit-modal');
  const allUserInputs = document.querySelectorAll('input');

  editNameModal.querySelector('.close-btn').addEventListener('click', () => {
    closeFormModal('edit-modal', allUserInputs);
    renderMyPokemonsList();
  });
}

function editNickname(event) {
  event.preventDefault();
  const form = event.target;
  const myPokemonDOM = form.closest('.edit-nickname');
  const myPokemonId = myPokemonDOM.dataset.id;

  const data = Object.fromEntries(new FormData(form));

  fetch(`/api/pokemons/${state.loggedInId}/edit/${myPokemonId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((updatePokemon) => {
      const matchId = state.myPokemons.map((myPokemon) => {
        if (+myPokemon.id === +myPokemonId) {
          myPokemon.nickname = updatePokemon.nickname;
          return myPokemon;
        }
      });

      renderMyPokemonsList();
    });
}

function releasePokemon(event) {
  const deleteBtn = event.target;
  const pokemonDOM = deleteBtn.closest('.myPokemon');
  const pokemonId = pokemonDOM.dataset.id;

  fetch(`/api/pokemons/${pokemonId}`, {
    method: 'DELETE',
  }).then(() => {
    state.myPokemons = state.myPokemons.filter((t) => t.id != pokemonId);
    renderMyPokemonsList();
  });
}
