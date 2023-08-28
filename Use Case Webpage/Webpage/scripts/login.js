const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const welcome = document.getElementById('signin');

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';

});

window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  document.cookie = `username=${username}`;
  document.cookie = `password=${password}`;
  welcome.innerHTML = `Welcome ${username}`;
  loginModal.style.display = 'none';
});