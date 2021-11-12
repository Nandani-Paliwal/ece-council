 const track = document.querySelectorAll('.carousel-slide');
 console.log(track);
const slides = Array.from(track)
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsnav = document.querySelector('carousel_nav');
const dots = Array.from(dotsnav.children);

 //when I click left, move slide to left
 //when I click right, move slide to right
 //when I click the nav indicator, move to that slide 