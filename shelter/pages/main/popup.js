{ "use strict";

let pets = [
    {
        "img": "../../assets/images/pets-jennifer.png",
        "name": "Jennifer",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "<b>Age:</b> 2 months",
        "inoculations": ["<b>Inoculations:</b> none"],
        "diseases": ["<b>Diseases:</b> none"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {   "img": "../../assets/images/pets-sophia.png",
        "name": "Sophia",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "<b>Age:</b> 1 month",
        "inoculations": ["<b>Inoculations:</b> parvovirus"],
        "diseases": ["<b>Diseases:</b> none"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {
        "img": "../../assets/images/pets-woody.png",
        "name": "Woody",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "<b>Age:</b> 3 years 6 months",
        "inoculations": ["<b>Inoculations:</b> adenovirus"],
        "diseases": ["<b>Diseases:</b> mobility reduced"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {
        "img": "../../assets/images/pets-scarlet.png",
        "name": "Scarlett",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "<b>Age:</b> 3 months",
        "inoculations": ["<b>Inoculations:</b> parainfluenza"],
        "diseases": ["<b>Diseases:</b> none"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {   
        "img": "../../assets/images/pets-katrine.png",
        "name": "Katrine",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "<b>Age:</b> 6 months",
        "inoculations": ["<b>Inoculations:</b> panleukopenia"],
        "diseases": ["<b>Diseases:</b> none"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {
        "img": "../../assets/images/pets-timmy.png",
        "name": "Timmy",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "<b>Age:</b> 2 years 3 months",
        "inoculations": ["<b>Inoculations:</b> calicivirus"],
        "diseases": ["<b>Diseases:</b> kidney stones"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {
        "img": "../../assets/images/pets-freddie.png",
        "name": "Freddie",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human's daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "<b>Age:</b> 2 months",
        "inoculations": ["<b>Inoculations:</b> rabies"],
        "diseases": ["<b>Diseases:</b> none"],
        "parasites": ["<b>Parasites:</b> none"]
    },
    {   
        "img": "../../assets/images/pets-charly.png",
        "name": "Charly",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn't fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "<b>Age:</b> 8 years",
        "inoculations": ["<b>Inoculations:</b> leptospirosis"],
        "diseases": ["<b>Diseases:</b> deafness"],
        "parasites": ["<b>Parasites:</b> lice, fleas"]
    }
    ];

let modal = document.getElementById("popup");
let btn = document.querySelectorAll(".button_card"); //массив кнопок карточек
console.log(btn);
let span = document.getElementsByClassName("popup__close")[0]; //кнопка закрытия на попапе

let indexAndId = ["Jennifer", "Sophia", "Woody", "Scarlett", "Katrine", "Timmy", "Freddie", "Charly"];
let n;
let img = document.createElement("IMG");


    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }

    function enableScrolling(){
        window.onscroll=function(){};
    }
    function addOpacity() {
        modal.classList.add('opacity');
    }
    function rmOpacity() {
        modal.classList.remove('opacity');
    }

    btn.forEach((item, i, arr) => arr[i].onclick = function () {              
        function disableScrolling(){
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};
        }
        disableScrolling();
            // modal.style.display = "block";
            
            setTimeout(addOpacity, 400);
            modal.style.display = "block";
            
            
    });

    function fillPopup () {
        
        for(var i = 0; i < btn.length; i++){
            btn[i].addEventListener('click', function(e) {
                //console.log( (e.target.parentNode.getAttribute('id')));
                n = indexAndId.indexOf(e.target.parentNode.getAttribute('id'));
                img.src = pets[n]['img'];
                document.querySelector('.popup__img').appendChild(img);
                for (let div of document.querySelectorAll('[popup-info]')) { //тег и дивы с атрибутом pop-info
                    let field = div.getAttribute('popup-info'); //
                    console.log(field);
                    div.innerHTML = pets[n][field]; 
                }
            })
        }
    }
    fillPopup();

    // console.log(document.querySelectorAll('[popup-info]'));

    
    span.onclick = function () {
        disableScrolling = null;
        window.onscroll=function(){};
        setTimeout(rmOpacity, 300);
        modal.style.display = "none";
        //document.body.classList.remove('scroll-hidden');
        document.querySelector('.popup__img').removeChild(img);
    }

    window.onclick = function (event) {
        //disableScrolling = null;
        // window.onscroll=function(){};
        if (event.target == modal) {
            window.onscroll=function(){};
            disableScrolling = null;
            setTimeout(rmOpacity, 300);
            modal.style.display = "none";
            //document.body.classList.remove('scroll-hidden');
            //document.querySelector('.popup__img').removeChild(img);
        }
        //enableScrolling();
        ;
    }
}