const backdrop = document.querySelector('#backdrop');

function backDropOn() {
  backdrop.classList.add('visible');
}

function backDropOff() {
  backdrop.classList.remove('visible');
}

function closeFormModal(modalId, inputs = []) {
  document.querySelector(`#${modalId}`).classList.remove('visible');
  backDropOff();
  resetForm(inputs);
}

function resetForm(inputs) {
  inputs.forEach((input) => (input.value = ''));
}

function closeModal(modalId) {
  document.querySelector(`#${modalId}`).classList.remove('visible');
  backDropOff();
}