// // Import jQuery module (npm i jquery)
import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

// 100VH BAG FIX on mobile 
// ENG https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// RUS https://denis-creative.com/zadaem-razmer-100vh-bez-prokrutki-dlya-mobilnyh-ustrojstv/

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener, ('resize', () => {
   // We execute the same script as before
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// HAMBURGER MENU 
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock'); // remove scroll when burger menu is active
   });

   $('.header__menu').click(function () {
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock'); // close burger menu after click
   });
});

// // STICKY MENU
// $(document).ready(function () {
//    const navOffset = $('#nav').offset().top;
   
//    $(window).scroll(function () {
//       const scrolled = $(this).scrollTop();

//       if (scrolled > navOffset) {
//          $('#wrapper').addClass('nav-fixed');
//       } else if (scrolled < navOffset) {
//          $('#wrapper').removeClass('nav-fixed'); 
//       }
//    });
// });