let navbarLinks = document.querySelectorAll('.navbar');

navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    navbarLinks.forEach(link => link.classList.remove('active'));

    link.classList.add('active');
  });
});


const navbar = document.querySelectorAll('.navbar');
navbar.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');

    const section = document.getElementById(href.replace('#', ''));


    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const backToTop = document.querySelector('.back-top');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});