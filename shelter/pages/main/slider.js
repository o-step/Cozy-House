const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    //loopedSlides: 0,
    slidesPerView: 3,
    spaceBetween: 95,
    effect: 'slide',
    slidesPerGroup: 3,
    speed: 1000,
    initialSlide: 0,
    simulateTouch: false,
   // loopAdditionalSlides: 1,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 100,
            slidesPerGroup: 2,
            loop: true,
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 3,
          //spaceBetween: 10
        }
    },

    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});







let pets = [
    {
        "img": "../../assets/images/pets-jennifer.png",
        "name": "Jennifer",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {   "img": "../../assets/images/pets-sophia.png",
        "name": "Sophia",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "img": "../../assets/images/pets-woody.png",
        "name": "Woody",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "img": "../../assets/images/pets-scarlet.png",
        "name": "Scarlett",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {   
        "img": "../../assets/images/pets-katrine.png",
        "name": "Katrine",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "img": "../../assets/images/pets-timmy.png",
        "name": "Timmy",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "img": "../../assets/images/pets-freddie.png",
        "name": "Freddie",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human's daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {   
        "img": "../../assets/images/pets-charly.png",
        "name": "Charly",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn't fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
    ];


let doubleSlides = document.querySelectorAll('.swiper-slide-duplicate');//коллекция узлов-дубликатов!!!
console.log(doubleSlides);

let cards = document.querySelectorAll('.swiper-slide'); // статичная коллекция карточек
console.log(cards);

let idStaticCard = [];

cards.forEach((item, i, arr) => idStaticCard.push(arr[i].getAttribute('id')));
console.log(idStaticCard);//id static cards

let parent = document.querySelector('.swiper-wrapper');
console.log(parent.childNodes)
let newArrDouble = [];
for (i = 0; i < doubleSlides.length; i++) {
    newArrDouble.push(doubleSlides[i].getAttribute('id')) ;
}
console.log(newArrDouble); //массив id дубликатов

let replacedNode = [];
// let intersection = doubleSlides.filter(x => cards.includes(x));
// console.log(intersection);

//remove double classes

let divCard = document.createElement('div');
divCard.classList.add('swiper-slide');

console.log(doubleSlides.length);
console.log(cards.length);

for (i = 0; i < doubleSlides.length; i++) {
    //doubleSlides.sort();
    // doubleSlides[i].innerHTML = '';
    // doubleSlides[i].replaceWith(cards[i]);
    //doubleSlides[i] = divCard;
    // let el = parent.replaceChild(cards[i], doubleSlides[i]);
    // console.log(el);
    //doubleSlides[i].innerHTML = parent.replaceChild(cards[i], doubleSlides[i]);
    // doubleSlides[i].innerHTML = replacedNode[i];
    //doubleSlides[i].classList.remove('swiper-slide-duplicate');
}

