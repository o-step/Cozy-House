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

        let page1 = [0, 1, 2, 3, 4, 5, 6, 7];
        page1.forEach((item, ind, arr) => arr[ind] = cards[item]);
        console.log(page1);
        let page2 = [2, 7, 3, 0, 1, 4, 5, 6];
        page2.forEach((item, ind, arr) => arr[ind] = cards[item]);
        console.log(page2);
        let page3 = [1, 2, 6, 0, 4, 7, 3, 5];
        page3.forEach((item, ind, arr) => arr[ind] = cards[item]);
        console.log(page3);
        let page4 = [6, 0, 3, 7, 5, 1, 2, 4];
        page4.forEach((item, ind, arr) => arr[ind] = cards[item]);
        console.log(page4);
        let page5 = [7, 5, 1, 6, 3, 2, 4, 0];
        page5.forEach((item, ind, arr) => arr[ind] = cards[item]);
        console.log(page5);
        let page6 = [3, 6, 1, 7, 2, 4, 0, 5];
        page6.forEach((item, ind, arr) => arr[ind] = cards[item]);
        console.log(page6);

        let pages = [page1, page2, page3, page4, page5, page6];
        console.log(pages);

        if (petsIndicator.innerHTML == 1) {
            btn_prevPets.classList.add('button_paginator_inactive');
            btn_firstPets.classList.add('button_paginator_inactive');
            btn_prevPets.classList.remove('button_paginator');
            btn_firstPets.classList.remove('button_paginator');
        }

        function fillCards(n) {
            if (n == petsIndicator.innerText) {
                for (let i = 0; i < pages[n-1].length; i++) {
                    cardParent.append(pages[n-1][i]);
                }
            };
        }

        function changeIndicator() {
            if(petsCount > 1 || petsIndicator.innerText > 1) {
                btn_prevPets.classList.add('button_paginator');
                btn_firstPets.classList.add('button_paginator');
                btn_prevPets.classList.remove('button_paginator_inactive');
                btn_firstPets.classList.remove('button_paginator_inactive');
            }
            if(petsCount == 1 || petsIndicator.innerText == 1) {
                btn_prevPets.classList.add('button_paginator_inactive');
                btn_firstPets.classList.add('button_paginator_inactive');
                btn_prevPets.classList.remove('button_paginator');
                btn_firstPets.classList.remove('button_paginator');
            }
            if(petsCount < 6 || petsIndicator.innerText < 6) {
                btn_nextPets.classList.add('button_paginator');
                btn_lastPets.classList.add('button_paginator');
                btn_nextPets.classList.remove('button_paginator_inactive');
                btn_lastPets.classList.remove('button_paginator_inactive');
            }
            if(petsCount == 6 || petsIndicator.innerText == 6) {
                btn_nextPets.classList.add('button_paginator_inactive');
                btn_lastPets.classList.add('button_paginator_inactive');
                btn_nextPets.classList.remove('button_paginator');
                btn_lastPets.classList.remove('button_paginator');
            }
        }


        function listingRight() {
            cardParent.innerHTML = '';
            petsCount++;
            petsIndicator.innerText = petsCount;

            if (petsIndicator.innerText >= 6) {
                petsIndicator.innerText = 6;
                petsCount = 6;
            }
            changeIndicator();
            fillCards(petsIndicator.innerText);
        }


        function listingLeft() {
            cardParent.innerHTML = '';
            petsCount--;
            petsIndicator.innerText = petsCount;

            if (petsIndicator.innerText <= 1) {
                petsIndicator.innerText = 1;
                petsCount = 1;
            }
            changeIndicator();
            fillCards(petsIndicator.innerText);
        }

        function getFirstPage() {
            cardParent.innerHTML = '';
            petsIndicator.innerText = 1;
            petsCount = 1;
            changeIndicator();
            fillCards(petsIndicator.innerText);
        }
        function getLastPage() {
            cardParent.innerHTML = '';
            petsIndicator.innerText = 6;
            petsCount = 6;
            changeIndicator();
            fillCards(petsIndicator.innerText);
        }
        
        

        //for media-queries
        // if( window.screen.width >= 1100 ){
        //     btn_firstPets.style.background = "yellow";
        // } else {
        //     alert('hi');
        // } 
        

        btn_nextPets.addEventListener("click", listingRight);
        btn_prevPets.addEventListener("click", listingLeft);
        btn_firstPets.addEventListener("click", getFirstPage);
        btn_lastPets.addEventListener("click", getLastPage);


}


