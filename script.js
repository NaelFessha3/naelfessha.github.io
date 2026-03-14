// script.js — Dark Mode Toggle for Nael Fessha ePortfolio

// Called when user clicks the button
function toggleMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-btn');
  
  // Toggle dark-mode class
  body.classList.toggle('dark-mode');
  
  // Update button text and save preference
  if (body.classList.contains('dark-mode')) {
    button.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    button.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
}

// Apply the saved theme when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.querySelector('.toggle-btn');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (button) button.textContent = '☀️ Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    if (button) button.textContent = '🌙 Dark Mode';
  }
});