function renderStartOptions() {
  document.querySelector('#page').innerHTML = `
    <div class="modal" id="start-option-modal">
      <nav class="start-nav">
        <ul>
          <li onClick="renderSignUp()">Sign Up</li>
          <li onClick="renderLogin()">Login</li>
          <li onClick="renderLogin()"><span>Close</span></li>
        </ul>
      </nav>

      <div id="start-options"></div>
    </div>
  `
  const startOptionsModal = document.querySelector('#start-option-modal');
  startOptionsModal.classList.add('visible');

  backDropOn();
}