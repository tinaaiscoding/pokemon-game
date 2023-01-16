const backdrop = document.querySelector('#backdrop');

function backDropOn() {
  backdrop.classList.add('visible');
}

function backDropOff() {
  backdrop.classList.remove('visible');
}

function closeFormModal(modalClass, inputs = null) {
  document.querySelector(`#${modalClass}`).classList.remove('visible');
  backDropOff();
  resetForm(inputs);
}

function resetForm(inputs) {
  inputs.forEach((input) => (input.value = ''));
}
