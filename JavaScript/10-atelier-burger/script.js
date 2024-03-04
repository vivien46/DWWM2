/*
ul menu
burger
fermer
*/

let menu = document.querySelector('#menu');
let burger = document.querySelector('#burger');
let fermer = document.querySelector('#fermer');

burger.addEventListener('click',function(){
    menu.classList.add('deploye','transition');
});

fermer.addEventListener('click',function(){
    menu.classList.remove('deploye');
});

window.addEventListener('resize',function(){

    if(this.window.innerWidth <=768){
        menu.classList.remove('deploye','transition');
    }
});