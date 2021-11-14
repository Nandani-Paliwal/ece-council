const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsnav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsnav.children);
// console.log("dots ", dots);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log("slideWidth", slideWidth)

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//when I click left, move slide to left
prevButton.addEventListener('click', (e)=>{
    const currentSlide = track.querySelector('.current-slide');
 console.log("currentSlide ", currentSlide);
    const nextSlide = currentSlide.previousElementSibling;
 console.log("nextSlide ", nextSlide);

    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

})

//when I click right, move slide to right
nextButton.addEventListener('click', (e)=>{
    const currentSlide = track.querySelector('.current-slide');
 console.log("currentSlide ", currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
 console.log("nextSlide ", nextSlide);

    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

})


//when I click the nav indicator, move to that slide