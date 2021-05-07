// // Import jQuery module (npm i jquery)
import $ from 'jquery'
import { createPopper } from '@popperjs/core'
import bootstrap from 'bootstrap'

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

// SLOW ANCHOR BUTTON to-down
var $page = $('html, body');
 $('a[href*="#"]').click(function() {
     $page.animate({
         scrollTop: $($.attr(this, 'href')).offset().top
     }, 800);
     return false;
});