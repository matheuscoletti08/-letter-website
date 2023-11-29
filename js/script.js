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

function exibirTexto(texto) {
  hiddenText.innerHTML = `<br><h2>Descrição da Foto</h2><br><p>${texto}</p><hr>`;
  hiddenText.style.display = 'block';
  clickableDiv.style.display = 'none';
}

window.onload = function() {
  hiddenText.style.display = 'none';
};