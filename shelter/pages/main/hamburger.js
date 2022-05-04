{
    "use strict";

    let menuBtn = document.getElementById('hamburger');
    let menu = document.getElementById('header__navigation');
    let navigation = document.getElementById('navigation');
    let promoSection = document.getElementById('promo');
    let promoDescription = document.getElementById('layout_2_column_promo');
    let link_active = document.getElementById('link_active');
    let link_no_active_1 = document.getElementById('link_no_active_1');
    let link_no_active_2 = document.getElementById('link_no_active_2');
    let link_no_active_3 = document.getElementById('link_no_active_3');
    let block = document.getElementsByClassName('burger-block');
    let section = document.getElementsByTagName('section');
    
    function disableScrolling() {
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }

    function enableScrolling(){
        window.onscroll=function(){};
    }





    function clickMenu() {
        // block.classList.toggle("transformed-state");
        document.body.classList.toggle('noscroll');
        document.body.classList.toggle('background');
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        promoSection.classList.toggle('active');
        promoDescription.classList.toggle('active');
        navigation.classList.toggle('active');
        link_active.classList.toggle('active');
        link_no_active_1.classList.toggle('active');
        link_no_active_2.classList.toggle('active');
        link_no_active_3.classList.toggle('active');
        // block.classList.add('slide-in');
        block.classList.toggle('active');
        block.classList.toggle('transformed-state');
        block.classList.toggle('move');
        //section.classList.toggle('active');
        //console.log(section)
        // for(let sec of section) {
        //     section[sec].classList.toggle('background');
        //     section[sec].classList.toggle('active')
        // }
        // for(let i = 0; i < section.length; i++) {
        //     section[i].classList.toggle('background');
        //     section[i].classList.toggle('active')
        // }
        //clickMe();
    }
    

    // if (!menuBtn.classList.contains('active')) {
    //     disableScrolling = null;
    //     block.classList.toggle('slide-in');
    // }
    

    function clickMe () {
        // for(let i = 0; i < section.length; i++) {
        //     //section[i].classList.toggle('background');
        //     section[i].classList.remove('noscroll');
        // }
        // document.body.classList.remove('noscroll');//
        // menuBtn.classList.remove('active');
        // menu.classList.remove('active');
        // promoSection.classList.remove('active');//
        // promoDescription.classList.remove('active');
        // navigation.classList.remove('active');
        // link_active.classList.remove('active');
        // link_no_active_1.classList.remove('active');
        // link_no_active_2.classList.remove('active');
        // link_no_active_3.classList.remove('active');
        // block.classList.add('slide-in');
        window.onclick = function (event) {
            if (event.target == promoSection) {
                window.onscroll=function(){};
                clickMenu() = null
            }
        }
    }
    function linking2() {
        clickMenu () = null;
        location.href = 'index.html#Help';
    }
    function linking3() {
        clickMenu () = null;
        location.href = 'index.html#Footer-contacts';
    }

    

    promoSection.addEventListener('click', clickMe);
    menuBtn.addEventListener('click', clickMenu)
    link_no_active_2.addEventListener('click', linking2)
    link_no_active_3.addEventListener('click', linking3)



}
