function renderStartOptions() {
  document.querySelector('#page').innerHTML = `
    <div class="modal" id="start-option-modal">
      <div class="modal-content">
        <nav class="start-nav">
          <ul>
            <li onClick="renderSignUp()">Sign Up</li>
            <li onClick="renderLogin()">Login</li>
            <li onClick="closeFormModal('start-option-modal')"><span>Close</span></li>
          </ul>
        </nav>

        <div id="start-options"></div>
      </div>
    </div>
  `
  const startOptionsModal = document.querySelector('#start-option-modal');
  const allUserInputs = document.querySelectorAll('input');

  startOptionsModal.classList.add('visible');
  backDropOn();

  backdrop.addEventListener('click', () => {
    closeFormModal('start-option-modal', allUserInputs);
  });
}