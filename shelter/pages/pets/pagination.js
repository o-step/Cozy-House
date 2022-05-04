{
    "use strict";


    let cards = document.querySelectorAll('.pets__item'); // статичная коллекция карточек
    console.log(cards);

    let cardParent = document.getElementById('listPets'); //родитель карточек
    let liveCards = cardParent.children; // живая коллекция
    console.log(liveCards);

    let btn_firstPets = document.getElementById('btn_firstPets'),
        btn_prevPets = document.getElementById('btn_prevPets'),
        petsIndicator = document.getElementById('petsIndicator'),
        btn_nextPets = document.getElementById('btn_nextPets'),
        btn_lastPets = document.getElementById('btn_lastPets');
    
        petsCount = 1;
        //let newCollection = [];

        function listingRight() {
            cardParent.innerHTML = '';
            petsCount++;

    
            let newCollection = [...cards];
            console.log(newCollection);

            function shuffle(arr) {
                return arr.sort(() => Math.random() - 0.5);
            }
            shuffle(newCollection);
            console.log(shuffle(newCollection));

            for (let i = 0; i < newCollection.length; i++) {
                cardParent.append(newCollection[i]);
            }

            petsIndicator.innerText = petsCount;
        }


        function listingLeft() {
            cardParent.innerHTML = '';
            petsCount--;
    
            let newCollection = [...cards];
            console.log(newCollection);

            function shuffle(arr) {
                return arr.sort(() => Math.random() - 0.5);
            }
            shuffle(newCollection);
            console.log(shuffle(newCollection));

            for (let i = 0; i < newCollection.length; i++) {
                cardParent.append(newCollection[i]);
            }

            petsIndicator.innerText = petsCount;
        }



        

        if( window.screen.width >= 1100 ){
            btn_firstPets.style.background = "yellow";
        } else {
            alert('hi');
        } 



        btn_nextPets.addEventListener("click", listingRight);
        btn_prevPets.addEventListener("click", listingLeft);



}


