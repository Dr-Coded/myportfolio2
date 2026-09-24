document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#navContainer');
  const menu = document.querySelector('#navbarNav');
  const closeBtn = document.querySelector('.btn.close');
  const navLinks = document.querySelectorAll('#navbarNav .nav-link');

  const togglerBtn = document.createElement('button');
  togglerBtn.classList.add('navbar-toggler');
  togglerBtn.style.width = 'fit-content';
  togglerBtn.type = 'button';

  togglerBtn.setAttribute('data-bs-toggle', 'collapse');
  togglerBtn.setAttribute('data-bs-target', '#navbarNav');
  togglerBtn.setAttribute('aria-controls', 'navbarNav');
  togglerBtn.setAttribute('aria-expanded', 'false');
  togglerBtn.setAttribute('aria-label', 'Toggle navigation');

  togglerBtn.innerHTML = `
    <span class='custom-bar'></span>
    <span class='custom-bar'></span>
    <span class='custom-bar'></span>
  `;

  container.insertBefore(togglerBtn, menu);

  togglerBtn.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('show');
      togglerBtn.setAttribute('aria-expanded', 'false');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      togglerBtn.setAttribute('aria-expanded', 'false');
    });
  });
});