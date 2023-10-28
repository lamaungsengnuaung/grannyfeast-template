document
  .querySelector('.btn-mobile-nav')
  .addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('nav-open');
  });

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (href !== '#' && href.startsWith('#')) {
      const selectEl = document.querySelector(href);
      // console.log(selectEl);
      selectEl.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
