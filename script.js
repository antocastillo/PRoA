document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function (e) {
    const isOpen = toggle.classList.toggle('active');
    menu.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close when clicking a menu link
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('open')) {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  });
});
