// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle?.addEventListener('click', () => {
  mobileNav?.classList.toggle('is-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (
    !target.closest('.header__menu-toggle') &&
    !target.closest('.header__mobile-nav')
  ) {
    mobileNav?.classList.remove('is-open');
  }
});

// Close mobile menu when link is clicked
const mobileLinks = mobileNav?.querySelectorAll('a');
mobileLinks?.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('is-open');
  });
});
