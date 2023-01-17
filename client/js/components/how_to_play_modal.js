function renderHowToPlayModal() {
  document.querySelector('#page').innerHTML = `
  <div class="modal visible" id="how-to-play-modal">
    <div class="modal-content">
      <h2>How to play</h2>
      <span onClick="closeFormModal('how-to-play-modal')">Close</span>
      <p>As a user, the goal of the game is to win battles in order to evolve the Pokemon and then have the ability to attain more Pokemon to complete the Pokedex.</p>
    </div>
  </div>
`
}