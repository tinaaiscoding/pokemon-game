function renderHowToPlayModal() {
  document.querySelector('#page').innerHTML = `
    <div class="modal visible" id="how-to-play-modal">
      <div class="modal-content">
        <section class="start-nav">
          <button class="close-btn" onClick="closeModal('how-to-play-modal')">X</button>
          <div class="how-to">
            <h2 class="modal-title">How to Play</h2>
            <p>As a user, the goal of the game is to win battles in order to evolve the Pokemon and then have the ability to attain more Pokemon to complete the Pokedex.</p>
          </div>
        </section>
      </div>
    </div>
  `
  backDropOn();

  backdrop.addEventListener('click', () => {
    closeModal('how-to-play-modal');
  });
}