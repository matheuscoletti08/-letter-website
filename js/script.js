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

// Senhas corretas para o login (substitua com as senhas desejadas)
let senhaCorreta = 'amor';

// Função para validar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio automático do formulário

  let password = document.getElementById('password').value;

  // Verifica se a senha fornecida corresponde à senha correta
  if (password === senhaCorreta) {
      document.getElementById('loginSection').style.display = 'none'; // Esconde a seção de login
      document.getElementById('hiddenText').style.display = 'block'; // Mostra o conteúdo após o login bem-sucedido
  } else {
      document.getElementById('loginMessage').innerText = 'Senha incorreta. Tente novamente.';
  }
});

// Adiciona manipulador de eventos de toque (touchstart) para o campo de senha
document.getElementById('password').addEventListener('touchstart', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do evento de toque
});