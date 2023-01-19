function renderSignUp() {
  document.querySelector('#start-options').innerHTML = `
    <div id="sign-up-modal">
      <div class="modal-content">
        <form onSubmit="signUp(event)">
          <h2 class="modal-title">Welcome New Trainer!</h2>
          <div>
            <input placeholder="Name" type="text" name="name">
            <input placeholder="Email" type="text" name="email">
            <input placeholder="Password" type="password" name="password">
          </div>
          <button class="btn btn-success">SIGN UP</button>
        </form>
       
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
    .then((user) => {
      state.loggedInUserName = user.email
      state.loggedInId = user.id
    })

    .then(() => renderNewStaterPokemon()) // - RENDER POKEMON STARTER FILE
}
