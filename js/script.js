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
const senhasCorretas = ['amor', 'coletti', 'nataly'];

// Função para validar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const password = document.getElementById('password').value;
    validaSenha(password);
});

document.getElementById('loginForm').addEventListener('touchstart', function(event) {
    event.preventDefault(); // Evita o evento de toque padrão
    const password = document.getElementById('password').value;
    validaSenha(password);
});

function validaSenha(password) {
    if (senhasCorretas.includes(password)) {
        document.getElementById('loginSection').style.display = 'none'; // Esconde a seção de login
        document.getElementById('hiddenText').style.display = 'block'; // Mostra o conteúdo após o login bem-sucedido
    } else {
        document.getElementById('loginMessage').innerText = 'Senha incorreta. Tente novamente.';
    }
}