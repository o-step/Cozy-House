{
    "use strict";

    // for media-queries
    if( window.screen.width >= 1280 ){
        let cards = document.querySelectorAll('.pets__item'); // статичная коллекция карточек
        console.log(cards);

        let cardParent = document.getElementById('listPets'); //родитель карточек
        cardParent.innerHTML = '';
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

            let pages = [page1, page2, page3, page4, page5, page6]; //массив массивов элементов
            console.log(pages);


            

            
            function funonload() {
                cardParent.innerHTML = '';
                function shuffle(arr) {
                    arr.sort(() => Math.random() - 0.5);
                };
                shuffle(pages); //перемешать массив при каждой загрузке
                for (let i = 0; i < pages[0].length; i++) {
                    cardParent.append(pages[0][i]);
                }
            } 
            window.onload = funonload;


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

            btn_nextPets.addEventListener("click", listingRight);
            btn_prevPets.addEventListener("click", listingLeft);
            btn_firstPets.addEventListener("click", getFirstPage);
            btn_lastPets.addEventListener("click", getLastPage);

    } 
    if (window.screen.width >= 768 && window.screen.width < 1280) {
        let cards = document.querySelectorAll('.pets__item'); // статичная коллекция карточек
        console.log(cards);

        let cardParent = document.getElementById('listPets'); //родитель карточек
        cardParent.innerHTML = '';
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
            let page7 = [4, 7, 5, 1, 6, 3, 2, 0];
            page7.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page7);
            let page8 = [5, 3, 4, 7, 1, 6, 0, 2,];
            page8.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page8);

            let pages = [page1, page2, page3, page4, page5, page6, page7, page8]; //массив массивов элементов
            console.log(pages);


            

            
            function funonload() {
                cardParent.innerHTML = '';
                function shuffle(arr) {
                    arr.sort(() => Math.random() - 0.5);
                };
                shuffle(pages); //перемешать массив при каждой загрузке
                for (let i = 0; i < pages[0].length; i++) {
                    cardParent.append(pages[0][i]);
                }
            } 
            window.onload = funonload;


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
                if(petsCount < 8 || petsIndicator.innerText < 8) {
                    btn_nextPets.classList.add('button_paginator');
                    btn_lastPets.classList.add('button_paginator');
                    btn_nextPets.classList.remove('button_paginator_inactive');
                    btn_lastPets.classList.remove('button_paginator_inactive');
                }
                if(petsCount == 8 || petsIndicator.innerText == 8) {
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

                if (petsIndicator.innerText >= 8) {
                    petsIndicator.innerText = 8;
                    petsCount = 8;
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
                petsIndicator.innerText = 8;
                petsCount = 8;
                changeIndicator();
                fillCards(petsIndicator.innerText);
            }

            btn_nextPets.addEventListener("click", listingRight);
            btn_prevPets.addEventListener("click", listingLeft);
            btn_firstPets.addEventListener("click", getFirstPage);
            btn_lastPets.addEventListener("click", getLastPage);
    } 
    if (window.screen.width >= 320 && window.screen.width < 768) {
        let cards = document.querySelectorAll('.pets__item'); // статичная коллекция карточек
        console.log(cards);

        let cardParent = document.getElementById('listPets'); //родитель карточек
        cardParent.innerHTML = '';
        let liveCards = cardParent.children; // живая коллекция
        console.log(liveCards);


        let btn_firstPets = document.getElementById('btn_firstPets'),
            btn_prevPets = document.getElementById('btn_prevPets'),
            petsIndicator = document.getElementById('petsIndicator'),
            btn_nextPets = document.getElementById('btn_nextPets'),
            btn_lastPets = document.getElementById('btn_lastPets');
        
            petsCount = 1;

            let page1 = [2, 3, 1, 4, 7, 5, 0, 6];
            page1.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page1);
            let page2 = [1, 7, 2, 6, 5, 4, 0, 3];
            page2.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page2);
            let page3 = [5, 0, 6, 4, 1, 7, 3, 2];
            page3.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page3);
            let page4 = [3, 5, 1, 7, 0, 6, 4, 2];
            page4.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page4);
            let page5 = [7, 6, 3, 4, 0, 2, 1, 5];
            page5.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page5);
            let page6 = [6, 2, 4, 0, 5, 3, 1, 7];
            page6.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page6);
            let page7 = [4, 7, 5, 1, 6, 3, 2, 0];
            page7.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page7);
            let page8 = [1, 3, 4, 7, 5, 6, 2, 0];
            page8.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page8);
            let page9 = [2, 3, 1, 4, 7, 5, 0, 6];
            page9.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page9);
            let page10 = [1, 7, 2, 6, 5, 4, 0, 3];
            page10.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page10);
            let page11 = [2, 3, 1, 4, 7, 5, 0, 6];
            page11.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page11);
            let page12 = [1, 7, 2, 6, 5, 4, 0, 3];
            page12.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page12);
            let page13 = [5, 0, 6, 4, 1, 7, 3, 2];
            page13.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page13);
            let page14 = [3, 5, 1, 7, 0, 6, 4, 2];
            page14.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page14);
            let page15 = [7, 6, 3, 4, 0, 2, 1, 5];
            page15.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page15);
            let page16 = [6, 2, 4, 0, 5, 3, 1, 7];
            page16.forEach((item, ind, arr) => arr[ind] = cards[item]);
            console.log(page16);
            let pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16]; //массив массивов элементов
            console.log(pages);

            function funonload() {
                cardParent.innerHTML = '';
                function shuffle(arr) {
                    arr.sort(() => Math.random() - 0.5);
                };
                shuffle(pages); //перемешать массив при каждой загрузке
                for (let i = 0; i < pages[0].length; i++) {
                    cardParent.append(pages[0][i]);
                }
            } 
            window.onload = funonload;


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
                if(petsCount < 16 || petsIndicator.innerText < 16) {
                    btn_nextPets.classList.add('button_paginator');
                    btn_lastPets.classList.add('button_paginator');
                    btn_nextPets.classList.remove('button_paginator_inactive');
                    btn_lastPets.classList.remove('button_paginator_inactive');
                }
                if(petsCount == 16 || petsIndicator.innerText == 16) {
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

                if (petsIndicator.innerText >= 16) {
                    petsIndicator.innerText = 16;
                    petsCount = 16;
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
                petsIndicator.innerText = 16;
                petsCount = 16;
                changeIndicator();
                fillCards(petsIndicator.innerText);
            }

            btn_nextPets.addEventListener("click", listingRight);
            btn_prevPets.addEventListener("click", listingLeft);
            btn_firstPets.addEventListener("click", getFirstPage);
            btn_lastPets.addEventListener("click", getLastPage);


            
    } 

    

}


