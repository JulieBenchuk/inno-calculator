import '../styles/switcher.css';

const settingsIcon = document.getElementById('icon-settings');
const palette = document.getElementById('palette');
function togglePalette() {
  if (palette.style.display === 'none' || palette.style.display === '') {
    settingsIcon.classList.remove('icon-rotate');
    palette.style.display = 'grid';
    settingsIcon.style.display = 'none';
  } else {
    palette.style.display = 'none';
    settingsIcon.style.display = 'flex';
    settingsIcon.classList.add('icon-rotate');
  }
}

settingsIcon.addEventListener('click', togglePalette);
document.querySelectorAll('.color-circle').forEach((circle) => {
  circle.addEventListener('click', (e) => {
    const selectedColor = e.target.getAttribute('data-color');

    document.documentElement.style.setProperty(
      '--primary-color',
      selectedColor,
    );

    togglePalette();
  });
});

document.documentElement.style.setProperty('--primary-color', 'orange');
