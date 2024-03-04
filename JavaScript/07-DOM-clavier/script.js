let selection = document.querySelector('#choix');
let resultat = document.querySelector('#resultat');

selection.addEventListener('change',function(){

console.log(this.value);
let valeurChoisie = this.value;

resultat.innerHTML = `<br>Vous avez choisi ${valeurChoisie}<br>`;

});

let message = document.querySelector('#message');
let comptage = document.querySelector('#comptage');

message.addEventListener('input',function(){
    
    let nbCaracteres = this.value.length;
    comptage.innerHTML = nbCaracteres;

});

message.addEventListener('keypress',function(e){
    console.log(`Vous avez tapé sur ` + e.key);
});

message.addEventListener('keydown',function(e){
    e.stopPropagation();
    //on stoppe la propagation de l'évenement aux éléments parents
})

document.addEventListener('keydown',function(e){
    console.log('Vous avez tapé sur ' + e.key);
})

/*
evenement focus quand l'élement récupère le curseur
evenement blur quand l'element perd le focus
*/

let saisie = document.querySelector('#saisie');

saisie.addEventListener('focus',function(){
    this.classList.add('focus');
});

saisie.addEventListener('blur',function(){
    this.classList.remove('focus');
});

let carrebleu = document.querySelector('#carrebleu');

//initie
carrebleu.style.left = 0;
carrebleu.style.top = 0;

//ecoute
document.addEventListener('keydown', function(e){

    console.log(`Vous avez tapé sur` + e.key);
    let posLeftActuelle;
    let posTopActuelle;

    switch(e.key){
        case 'ArrowRight' :
        case 'd' :
        case 'D' :
              posLeftActuelle = parseInt(carrebleu.style.left);
        posLeftActuelle += 5;
        carrebleu.style.left = posLeftActuelle + 'px'; break;

        case 'ArrowLeft' : posLeftActuelle = parseInt(carrebleu.style.left);
        if(posLeftActuelle > 0){
        posLeftActuelle -= 5;
        carrebleu.style.left = posLeftActuelle + 'px';
        } 
        break;

        case 'ArrowUp' :  posTopActuelle = parseInt(carrebleu.style.top);
        if(posTopActuelle > 0)
        posTopActuelle -= 5;
        carrebleu.style.top = posTopActuelle + 'px'; break;

        case 'ArrowDown' :  posTopActuelle = parseInt(carrebleu.style.top);
        // if(posLeftActuelle > 0)
        posTopActuelle += 5;
        carrebleu.style.top = posTopActuelle + 'px'; break;
    }
});