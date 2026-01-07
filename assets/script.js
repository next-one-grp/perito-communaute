// =====================
// MENU LATERAL TOGGLE
// =====================
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  sidebar.classList.toggle('active');
  main.classList.toggle('full');
});

// Fermer le menu au clic extérieur (mobile)
document.addEventListener('click', (e) => {
  if (
    window.innerWidth <= 900 &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove('active');
  }
});
