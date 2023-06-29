const backdrop = document.querySelector('#backdrop');
const navbar = document.querySelector('#header-nav');
const modalWrapper = document.querySelector('#modal-wrapper');

function backDropOn() {
  backdrop.classList.add('visible');
}

function backDropOff() {
  backdrop.classList.remove('visible');
}

function closeFormModal(inputs = []) {
  modalWrapper.innerHTML = '';
  backDropOff();
  resetForm(inputs);
}

function resetForm(inputs) {
  if (inputs.length > 0) {
    inputs.forEach((input) => (input.value = ''));
  }
}

function closeModal() {
  modalWrapper.innerHTML = '';
  backDropOff();
}

function hideNav() {
  navbar.classList.add('hidden');
}
