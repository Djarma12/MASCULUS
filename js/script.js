'use strict';

// Sticky navigation

const sectionHeroEl = document.querySelector('.js-class');
// Kada u viewportu(root: null) bude 0% sekcije hero(threshold: 0), tada ce da se pojavi sticky nav.
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    root: null, //znaci da se posmatra sekcija unutar Viewporta, null je viewport
    threshold: 0,
    // Ove visine je header, pa kada se pojavi, da ne bi preklopio narednu sekciju, pojavi se za 80px ranije tacno na pre pocetka sekcije
    rootMargin: '57px',
  }
);
obs.observe(sectionHeroEl);

// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);
    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to the other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile navigation
    // if (link.classList.contains('main-nav-link'))
    //   headerEl.classList.toggle('nav-open');
  });
});

// MOBILE FUNCTIONALITY
const btnOpen = document.querySelectorAll('.btn-open-close');
const header = document.querySelector('.header');
const links = Array.from(document.querySelectorAll('.main-nav-link')).filter(
  link => link.closest('.class-for-mobile')
);

const toggleClass = function () {
  header.classList.toggle('nav-open');
};

btnOpen.forEach(btn => btn.addEventListener('click', toggleClass));

links.forEach(link => link.addEventListener('click', toggleClass));
