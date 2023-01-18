function renderLogin() {
  document.querySelector('#start-options').innerHTML = `
      <div id="login-modal">
        <div class="modal-content">
          <form onSubmit="login(event)">
            <h2 class="modal-title">Login</h2>
  
            <fieldset>
              <label for="">Email: </label>
              <input type="text" name="email">
            </fieldset>
            
            <fieldset>
              <label for="">Password: </label>
              <input type="password" name="password">
            </fieldset>
  
            <button onClick="renderMyPokemons()" class="btn btn-success">Login</button>
          </form>
         
          <button class="btn btn-cancel">Cancel</button>
        </div>
      </div>
      `

  const loginModal = document.querySelector('#login-modal');
  const allUserInputs = document.querySelectorAll('input');

  loginModal.querySelector('.btn-cancel').addEventListener('click', () => {
    closeFormModal('start-option-modal', allUserInputs);
  });
}

function login(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        renderLogin()
        renderError(res.error)
      } else {
        state.loggedInUserName = res
        renderMyPokemonsList()
        backDropOff()
      }
    })
}