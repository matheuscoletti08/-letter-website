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

window.onload = function() {
  hiddenText.style.display = 'none';
};