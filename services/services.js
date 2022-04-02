const carouselSlide = document.querySelector('.carousel-slides');
const carouselImages = document.querySelectorAll('.carousel-slides img');


// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter

let counter = 1;
let size = carouselImages[0].getBoundingClientRect().width;

carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';

// Button Listeners
nextBtn.addEventListener('click',()=>{
    if(counter>=carouselImages.length-1) return;
    carouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    
    if(carouselImages[counter].id === 'LastClone'){
        carouselSlide.style.transition ="none";
        console.log('none');
        counter=carouselImages.length - 2;
        carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'FirstClone'){
        carouselSlide.style.transition ="none";
        console.log('none');
        counter=carouselImages.length - counter;
        carouselSlide.style.transform='translateX(' + (-size * counter) + 'px)';
    }

});