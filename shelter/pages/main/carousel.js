{
    "use strict";

    let slides = document.querySelectorAll('.swiper-slide');//slides static collection
    let slidesLive = document.getElementsByClassName('swiper-slide'); // live collection

    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let slidesBuffer = []; //arr of slides
    slides.forEach((item, i, arr) => slidesBuffer.push(arr[i]))
    console.log(slidesBuffer);

    let parent = document.getElementById('swiper-wrapper'); //parent of the cards
    let elems = parent.children; //child of the cards

    //parent.innerHTML = ''; //remove slides

    for (i = 0; i < 3; i++) {
        parent.append(slidesBuffer[i]); //add 3 init slides
    }

    function insertSlides () {
        for (i = 0; i < 3; i++) {
            parent.append(slidesBuffer[i]); //add 3 init slides
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(slidesBuffer);

    function addOpacity () {
        for (let i = 0; i < slidesLive.length; i++) {
            slidesLive[i].classList.add('animationLeft-js');
        }
    }
    function rmOpacity () {
        for (let i = 0; i < slidesLive.length; i++) {
            slidesLive[i].classList.remove('animationLeft-js');
        }
    }
    function addOpacityRight () {
        for (let i = 0; i < slidesLive.length; i++) {
            slidesLive[i].classList.add('animationRight-js');
        }
    }
    function rmOpacityRight () {
        for (let i = 0; i < slidesLive.length; i++) {
            slidesLive[i].classList.remove('animationRight-js');
        }
    }
    function deleteInside() {
        parent.innerHTML = ''; 
    }

    function prevSlide (evt) {
        //evt.preventDefault();
        setTimeout(addOpacity, 10);
        setTimeout(rmOpacity, 300);
        setTimeout(deleteInside, 300);
        shuffle(slidesBuffer);
        setTimeout(insertSlides, 350);
    }

    function nextSlide (evt) {
        //evt.preventDefault();
        setTimeout(addOpacityRight, 10);
        setTimeout(rmOpacityRight, 300);
        setTimeout(deleteInside, 300);
        shuffle(slidesBuffer);
        setTimeout(insertSlides, 350);


        // parent.innerHTML = ''; //remove old slides
        // shuffle(slidesBuffer);
        // insertSlides();
    }

    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);
}