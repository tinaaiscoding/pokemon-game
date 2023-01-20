function renderLogin() {
  document.querySelector('#start-options').innerHTML = `
      <div id="login-modal">
        <div class="modal-content">
          <form onSubmit="login(event)">
            <h2 class="modal-title">Welcome Back Trainer!</h2>
            <div>
              <input placeholder="Email" type="text" name="email">
              <input placeholder="Password" type="password" name="password">
            </div>
            <button class="btn btn-success">LOGIN</button>
          </form>
        </div>
      </div>
      `

  const loginModal = document.querySelector('#login-modal')
  const allUserInputs = document.querySelectorAll('input')

  // loginModal.querySelector('.btn-cancel').addEventListener('click', () => {
  //   closeFormModal('start-option-modal', allUserInputs)
  // })
}

function login(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        renderLogin()
        renderError(res.error)
      } else {
        state.loggedInId = res.loggedInId
        state.loggedInUserName = res.loggedInUserName
        backDropOff()

        fetch(`/api/pokemons/${state.loggedInId}/mypokemon`)
          .then((res) => res.json())
          .then((myPokemons) => {
            console.log('FETCH REqUEST');
            console.log(myPokemons);
            myPokemons.forEach(pokemon => {
              state.myPokemons.push(pokemon)
            })
            renderMyPokemonsList()
          })
      }
    })
}
