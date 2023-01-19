function renderStartOptions() {
  document.querySelector('#page').innerHTML = `
    <div class="modal visible" id="start-option-modal">
      <div class="modal-content">
        <section class="start-nav">
          <button class="close-btn" onClick="closeFormModal('start-option-modal')">X</button>
          <div>
            <button class="start-btns" onClick="renderSignUp()">SIGN UP</button>
            <button class="start-btns" onClick="renderLogin()">LOGIN</button>
          </div>
        </section>

        <div id="start-options"></div>
      </div>
    </div>
  `
  const allUserInputs = document.querySelectorAll('input');

  backDropOn();

  backdrop.addEventListener('click', () => {
    closeFormModal('start-option-modal', allUserInputs);
  });
}