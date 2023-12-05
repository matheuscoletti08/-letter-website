let hiddenText = document.getElementById('hiddenText');
let clickableDiv = document.querySelector('.clickableDiv');

function toggleText() {
  if (hiddenText.style.display === 'none') {
    hiddenText.style.display = 'block';
    clickableDiv.style.display = 'none'; 
  } else {
    hiddenText.style.display = 'none';
    clickableDiv.style.display = 'block'; 
  }
}


let senhaCorreta = 'amor';

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio automático do formulário

  let password = document.getElementById('password').value;

  if (password === senhaCorreta) {
      document.getElementById('loginSection').style.display = 'none'; 
      document.getElementById('hiddenText').style.display = 'block';
  } else {
      document.getElementById('loginMessage').innerText = 'Senha incorreta. Tente novamente.';
  }
});

document.getElementById('password').addEventListener('touchstart', function(event) {
  event.preventDefault();
});