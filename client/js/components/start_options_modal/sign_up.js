function renderSignUp() {
  document.querySelector('#start-options').innerHTML = `
    <div id="sign-up-modal">
      <div class="modal-content">
        <form onSubmit="signUp(event)">
          <h2 class="modal-title">Sign Up</h2>
          <fieldset>
            <label for="">Name: </label>
            <input type="text" name="name">
          </fieldset>

          <fieldset>
            <label for="">Email: </label>
            <input type="text" name="email">
          </fieldset>
          
          <fieldset>
            <label for="">Password: </label>
            <input type="password" name="password">
          </fieldset>

          <button class="btn btn-success">Sign Up</button>
        </form>
       
        <button class="btn btn-cancel">Cancel</button>
      </div>
    </div>
    `;

  const signUpModal = document.querySelector('#sign-up-modal');
  const allUserInputs = document.querySelectorAll('input');
  
  signUpModal.querySelector('.btn-cancel').addEventListener('click', () => {
    closeFormModal('start-option-modal', allUserInputs);
  });

  signUpModal.querySelector('.btn-success').addEventListener('click', backDropOff);
  
}

function signUp(event) {
  event.preventDefault();
  const form = event.target;

  const data = Object.fromEntries(new FormData(form));

  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((userName) => state.loggedInUserName = userName)
    .then(() => renderNewStaterPokemon()) // - RENDER POKEMON STARTER FILE
}
