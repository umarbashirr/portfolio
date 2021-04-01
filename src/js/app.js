'use strict';
import './../css/styles.css';

// AOS
AOS.init();

//   Navbar on scroll

window.addEventListener('scroll', function() {
  const header = document.querySelector('.navbar');
  scrollY > 0 ?  header.classList.add('active') : header.classList.remove('active');
  
})

// Navbar Links
const currentLinkLocation = location.href;
const navbar = document.querySelector('.navbar-nav').querySelectorAll('.nav-link');

navbar.forEach(ele => {
  ele.addEventListener('click', function() {
    navbar.forEach(nav => {
      nav.classList.remove('active');
      this.classList.add('active');
    })
  })
})