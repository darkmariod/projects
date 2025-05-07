// src/scripts/main.js
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const headerHeight = nav ? nav.offsetHeight : 0;

  document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return; 
      e.preventDefault();
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });

  const burger = document.querySelector('.burger');
  const navLinksContainer = document.querySelector('nav .nav-links');
  if (burger && navLinksContainer) {
    burger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('show');
    });
  }
});
