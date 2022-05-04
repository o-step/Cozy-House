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
    let myHeader = document.getElementById('myHeader');
    let sticky = document.getElementsByClassName('sticky');

    document.getElementById('hamburger').onclick = function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        promoSection.classList.toggle('active');
        promoDescription.classList.toggle('active');
        navigation.classList.toggle('active');
        link_active.classList.toggle('active');
        link_no_active_1.classList.toggle('active');
        link_no_active_2.classList.toggle('active');
        link_no_active_3.classList.toggle('active');
        myHeader.classList.toggle('active');
        sticky.classList.toggle('active');
        // header.classList.toggle("sticky");
        // menuBtn.classList.contains('active')? header.classList.remove("sticky") : header.classList.add("sticky");
        // if (menuBtn.classList.toggle('active') !== this) {
        //     header.classList.remove("sticky");
        // }
        //menuBtn.classList.toggle('active')? header.classList.remove("sticky") : header.classList.add("sticky");
    }
    //menuBtn.classList.toggle('active')? header.classList.remove("sticky") : header.classList.add("sticky");
    // menuBtn.classList.contains('active')? header.classList.remove("sticky") : header.classList.add("sticky");
}
