const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
// const modalBody = document.querySelector('.modal-body');
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const loginRegister = document.querySelector('.login-trigger')
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

close.addEventListener('click', function() {
  // modalBody.style.display = 'none';
  close.style.display = 'none';
  loginRegister.style.display = 'block';
  modalContent.style.top = '-50em'
});

loginRegister.addEventListener('click', function() {
  // modalBody.style.display = 'block';
  close.style.display = 'block';
  // loginRegister.style.display = 'none';
  modalContent.style.top = '-14em';
  modalContent.style.display = 'block'
})