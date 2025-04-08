const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

const homer = document.querySelector('.homer-wrapper');
const sound = document.getElementById('homerSound');

function checkHomerPosition() {
  const rect = homer.getBoundingClientRect();
  const centerX = window.innerWidth / 2;

  // Si Homer está cerca del centro de la pantalla, reproducimos el sonido
  if (rect.left < centerX + 20 && rect.right > centerX - 20) {
    if (sound.paused) {
      sound.currentTime = 0;
      sound.play();
    }
  }
}

// Usamos requestAnimationFrame para revisar su posición
function loop() {
  checkHomerPosition();
  requestAnimationFrame(loop);
}

loop();