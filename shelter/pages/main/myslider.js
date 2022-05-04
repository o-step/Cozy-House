{
"use strict";
let sliderParent = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider__item');

console.log(slides);
console.log(slides[2]);
console.log(sliderParent);

let cloneWoody = slides[2].cloneNode(true);
let cloneSophia = slides[3].cloneNode(true);
let cloneTimmy = slides[4].cloneNode(true);
let cloneCharly = slides[5].cloneNode(true);
sliderParent.appendChild(cloneWoody);
sliderParent.appendChild(cloneSophia);
sliderParent.appendChild(cloneTimmy);
sliderParent.appendChild(cloneCharly);

console.log(sliderParent);
console.log(document.querySelectorAll('.slider__item').length);

let newItems = document.querySelectorAll('.slider__item');

console.log(newItems);

newItems.forEach((item, i, arr) => arr[i+3].classList.add('hidden'));

let step = 1;
let offsetShow = 0;
function right () {
    document.onclick = null;
    document.querySelectorAll('.slider__item').style.background = 'red';
    alert('zdfbg');
    //newItems.forEach((item, i, arr) => arr[2-i].classList.add('hidden'));
    // let newItems2 = document.querySelectorAll('.slider__item');
    // let n = 3;
    // for (let index = 0; index < n; index++) {
    //     // newItems2[i].classList.toggle('hidden');
    //     // newItems2+3;
    //     newItems2[index].classList.toggle('hidden');
    //     index + n;
    //     index++;
    // }
    // setTimeout(function(){
    //     right();
    //     document.getElementById('next').onclick = right;
    // }, 1000)

}
right();

//document.getElementById('prev').onclick = left;
document.getElementById('next').onclick = right;
}