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


const senhasCorretas = ['amor', 'nana', 'naty', 'Nana', 'Naty', 'Amor'];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;


    if (senhasCorretas.includes(password)) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('hiddenText').style.display = 'block';
    } else {
        document.getElementById('loginMessage').innerText = 'Senha incorreta. Tente novamente.';
    }
});