// DOM : Document Object Model
//cela designe l'ensemble de ce qui constitue la page web (les éléments, la fenêtre, les documents, les évenements utilisateur (souris, clavier))


// Selecteur naturel (non recommandé)
let monElement = masection;
// JS cherche un eventuel ID sur la page qui porterait ce nom
console.log(monElement);

// Selecteur par ID
monElement = document.getElementById('masection');
console.log(monElement);
monElement.style.color = 'blue';
monElement.style.backgroundColor = 'yellow';
//ou
monElement.style['background-color'] = 'yellow';

//selecteur de classe
let mesElements = document.getElementsByClassName('avion');
console.log(mesElements);
mesElements[0].style.border="1px solid black";// premier élément

//Boucle pour appliquer un style à chaque élément de classe avion
for(let i=0 ; i< mesElements.length; i++){
    mesElements[i].style.fontStyle = 'italic';
}


//Selection par balise HTML
let mesParagraphes = document.getElementsByTagName('p');
console.log(mesElements);

//boucle for , of -----A privilègier
for(let i of mesParagraphes){
    console.log(i);
}

//boucle for,in ----Attention pas que les index numériques des paragraphes
for(let i in mesParagraphes){
    console.log(i);
}

// Selecteur par nom
let monImput = document.getElementsByName('prenom');//NodeList
console.log(monImput);

// Selecteurs Universels (terminologie CSS)
let selectionClasse = document.querySelector('.avion');
console.log(selectionClasse);
//ne recupere que le premier element repondant à la selection

// adapté à un identifiant
let selectionID = document.querySelector('#masection');
let selectionsClasses = document.querySelectorAll('.avion');
console.log(selectionsClasses);

//selection Multiple
let multiple = document.querySelectorAll('.avion,#masection,p');
console.log(multiple);

//Base d'une bibliothèque JQuery

//selection avancée
let unElement = document.querySelector('section#masection+p');

unElement.style.color='white';
unElement.innerHTML += '<br>Un <strong>autre</strong> contenue';//contenu HTML
console.log(monImput[0].getAttribute('type')); // Getter : recuperer la valeur
monImput[0].setAttribute('type','date'); //setter : attribuer une valeur à un attribut

monImput[0].disabled = true;
console.log(monImput);
// propriétés : disabled, checked, selected

// Manipulation des classes CSS
//selection de la span

let maSpan = document.querySelector('span');
maSpan.classList.add('style1');
/*
.add() ajouter une classe
.remove() supprimer une classe
.replace() remplacer une classe
.toggle() mode bascule ==> j'ajoute la classe si elle est absente / je la retire si elle est présente

.contains() => vrai ou faux - Tester La présence d'une classe
*/ 