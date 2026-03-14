function toggleMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-btn');
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    button.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    button.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.querySelector('.toggle-btn');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (button) button.textContent = '☀️ Light Mode';
  }
  setActiveNav();
});
