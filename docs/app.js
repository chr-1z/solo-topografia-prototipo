const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');

menuToggle.addEventListener('click', event => {
  const open = header.classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded', open);
});

header.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
