const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

if (username === 'purvi' && password === '1234') {
    errorMessage.textContent = '';
    window.location.href = 'dashboard.html'; // Redirect to dashboard page
  } else if (username.trim() === '' || password.trim() === '') {
    errorMessage.textContent = 'Please enter both username and password.';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});