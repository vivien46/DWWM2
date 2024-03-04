//l'objet document detient une methode Write()

document.write("<h1>javascript</h1>");
document.write("<h2>Les bases</h2>");

//variables
var uneVariable = 10;
// return uneVariable;

let uneAutrevariable = "un text";//let permet aussi de déclarer une variable depuis JS es6 (ECMA Script 2015)
//déclaration Affectation

document.write(uneAutrevariable)// j'écris ce qu'il y'a dans la variable uneAutrevariable

//declaration
let prenom;

//affectation
prenom = "Lucas";

document.write("<br>");
document.write(prenom);

//concatenation : symbole +
let nom = "Hardouin";
document.write("<br>" + prenom + " " + nom + "<br>");
document.write( 4 + 3 + "<br>" );//adition
document.write("4" + 3);//concatenation

//alternative à la concatenation : `
document.write(`<br> ${prenom} ${nom}<br>`);

//console de debugage (phase de developpement)
console.log("hello");
console.log(prenom);

//Exercice: déclarer 2 variables Loisir1 et Loisir2 avec un contenu et d'écrire sur la page par exemple : J'aime la musique et le cinéma

let Loisir1 = "Sports mecaniques";
let Loisir2 = "Animes Japonais";

document.write(`J'aime les ${Loisir1} et les ${Loisir2}<br>`);//recommandée

let varA = 12;
let varB ="toto";

console.log(typeof(varA));
console.log(typeof(varB));

//M. BOOL
//type Booléen : Vrai ou faux (1 ou 0)
//               true ou False

let comparaison1 = 10 > 5; //true
console.log(comparaison1);
console.log(typeof(comparaison1));

let comparaison2 = 20 > 100;//false
console.log(comparaison2);
console.log(typeof(comparaison2));

let regexp1 = /^[0-9]{5}$/;// expression régulière code postal Français 5 chiffres (regExp = regular Expression) . Pattern

console.log(regexp1.test(75015));
console.log(regexp1.test("toto"));

// concaténation à l'affectation
fruit ="pomme";
fruit +="cerise";
document.write('La variable fruit contient '  +  fruit + '<br>');

document.write( 5 + 5 +'<br>');
document.write( 10 - 5 + '<br>');
document.write( 10 * 5 + "<br>");
document.write( 10 / 5 + "<br>");
document.write( 10 % 3 + "<br>");

//constantes
const URL = "https://monsite.com";

document.write(`mon site est ${URL}<br>`);



document.write("<h2>Conversions</h2>");
console.log(8);
console.log("8");

//parseInt() et parseFloat()
console.log( parseInt("8"));
console.log( parseInt("140px"));

console.log(parseFloat("42.7"));// number
console.log(parseFloat("42.7m"));//42.7

//boite de dialogue
// window.alert("Hello");
// let reponse1 = window.confirm("Etes-vous sûr de faire cela ?");
// console.log(reponse1);
//ok ==> true, annuler ==> False

// let reponse2 = window.prompt("Quel age avez-vous ?"); // la reponse arrive en chaine de caractère

// document.write(`Vous avez ${reponse2} ans<br>`);
// console.log(reponse2);

//Après avoir demander l'age de l'utilisateur et l'afficher, ajouter l'age qu'aura la personne dans 5 ans

// let age = window.prompt(`Quel age avez-vous ?`);

// let age2 = parseInt(age) +5;

// document.write(`Vous avez ${age}<br>`); 
// document.write(`Dans 5 ans vous aurez ${age2}`);

//ou
//document.write(`Dans 5 ans vous aurez ${parseInt(age)}+5);

document.write("les fonctions parseInt() et parseFloat() permettent d'extraire la partie numérique au début d'une chaine");

document.write("<h2>Structures conditionnelles</h2>");

let monArgent = 400;//camelcase : unPetitHommeVert
//snake_case : un_petit_homme_vert

let prixIPhone = 1800;

//booleen : vrai ou faux
if(monArgent >= prixIPhone){
    document.write("J'achète un Iphone !");
}
else{
    document.write("J'acheterai un téléphone moins cher <br>");
}


let a = 10, b = 5, c = 2;

if( a == 10){
    document.write("A vaut 10 <br>");
}

//! : NOT
if( a != 9 ){
    document.write("A est différent de 9<br>");
}

// if/else if/else
if( a == 9){
    document.write("cas 1 : A vaut 9<br>");
}
else if (b > c){
    document.write("cas 2 : B est supérieur à A<br>");
}

else{
    document.write("cas 3 : aucune des conditions précédemment testées n'est vraie");
}

//NOT sur expression ou Fonction
if( b !== 6){
    document.write("B ne vaut pas 6<br>");
}

if( !(b == 6) ){
    document.write("B ne vaut pas 6<br>");
}

// fonction isNaN() : is not a number
console.log(isNaN(12));// false, 12 est un nombre
console.log(isNaN("toto"));//true toto n'est pas un nombre

//controler qu'une variable est un nombre
// !isNan : NOT is NOT a number ==> is a number
if ( !isNaN(a)){
    document.write("A est bien un nombre !<br>");
}

//Plusieurs conditions
// ET : &&
if ( a>b && b>c){
    document.write("Ok pour les 2 conditions<br>");
}
// vrai && vrai ==> vrai
// vrai && faux ==> faux
// faux && faux ==> faux

// OU : ||
if( a==9 || b>c){
    document.write("OK pour au moins l'une des deux conditions<br>");
}

/*
Vrai || vrai ==> Vrai
Vrai || Faux ==> Vrai
Faux || Faux ==> Faux
*/

if( a == 10){
    document.write("A vaut 10<br>")
}
if( a == "10"){
    document.write("A vaut 10<br>")
}
if( a === "10"){
    document.write("A vaut 10<br>")
}
/* = Affectation
== comparaison en valeur
=== comparaison en valeur et en type
!= différence en valeur
!== différence en valeur OU en type
*/

if ( 0 == false){
    console.log("vrai !");
}

if( 0 === false){
    console.log("vrai une deuxième fois!!!!!");
}

// forme contractée : forme ternaire
let sexe = "m";
if( sexe == "m" ){
    document.write("Bonjour Monsieur<br>");
}
else {
    document.write("Bonjour Madame<br>");
}

document.write( ( sexe == "m") ? "Bonjour Monsieur<br>" : "Bonjour Madame<br>" );
//              Condition   ?       si oui         sinon

let bienvenue = ( sexe == "m" ) ? "Bonjour Monsieur<br>" : "Bonjour Madame<br>";

//exemple avec condition intermediaire
sexe ="nb";
if( sexe =="m"){
    document.write("Bonjour Monsieur<br>");
}
else if ( sexe == "f"){
    document.write("Bonjour Madame<br>");
}
else{
    document.write("Bonjour<br>");
} 

document.write( ( sexe =="m") ? "Bonjour Monsieur<br>" : ( (sexe = "f") ? "Bonjour Madame<br>" : "Bonjour !<br>"));

//structure du switch

let couleur = "bleu";

switch(couleur){
    case "rouge" : document.write("vous aimez le rouge"); break;
    case "bleu" : document.write("vous aimez le bleu"); break;
    case "vert" : document.write("vous aimez le vert"); break;
    default: document.write("Vous n'aimez ni le rouge, ni le bleu ni le vert<br>");
}

/*
Vous inscrivez votre enfant dans un club Vacances.
Les enfants de 3 à 6 ans seront dans le club bambins
            de 7 à 9 ans seront dans le club junior
            de 10 à 13 ans seront dans le club ados
Définir l'age de l'enfant et écrire l'algorithme permettant d'indiquer le club dans lequel il sera inscrit.
Si l'enfant a moins de 3ans ou plus de 13 ans, il sera indiqué que votre enfant ne sera pas pris en charge*/


// let age = window.prompt("Quel est l'âge de votre enfant ?")

// switch(age){
// case "3" : 
// case "4" :
// case "5" :
// case "6" : document.write("Votre enfant est dans le club Bambins<br>"); break;

// case "7" : 
// case "8" : 
// case "9" :
// case "10" : document.write("Votre enfant est dans le club Juniors<br>"); break;
// case "11" : 
// case "12" : 
// case "13" : document.write("Votre enfant est dans le club Ados<br>"); break;

//     default: document.write("Votre enfant ne sera pas pris en charge<br>")

// case age =7 : document.write("Votre enfant est dans le club Junios<br>"); break;
// case ageEnfant=13 : document.write("Votre enfant est dans le club Ados<br>"); break;
// default : document.write("Votre enfant n'est pas pris en charge");
// }

//premiere solution
// let ageEnfant = 5;

// if ( ageEnfant >= 3 && ageEnfant <=6){
//     document.write("Votre enfant est dans le club Bambins !");
// }
// else if( ageEnfant >=7 && ageEnfant <=9){
//     document.write("Votre enfant est dans le club Juniors !")
// }
// else if( ageEnfant >=10 && ageEnfant <=13){
//     document.write("Votre enfant est dans le club Ados !")
// }
// else{
//     document.write("Votre enfant ne sera pas pris en charge")
// }

// switch(true) { 
//     case (ageEnfant>= 3 && ageEnfant <= 6) : document.write("Club bambins !"); break;
//     case (ageEnfant>= 7 && ageEnfant <= 9) : document.write("Club juniors !"); break;
//     case (ageEnfant>= 10 && ageEnfant <= 13) : document.write("Club ados !"); break;
//     default : document.write(" Enfant non prit en charge!");
// }

//journéé du 28/03

document.write('<h2>Le prototype Math</h2>');

document.write('La valeur de PI est ' + Math.PI + '<br>');

//arrondis
document.write(`Arrondi de 2.2 est ${Math.round(2.2)}<br>`);
document.write(`L'arrondi de 2.7 est ${Math.round(2.7)}<br>`);

document.write(`L'arrondi à l'entier infèrieur de 2.7 est de ${Math.floor(2.7)}<br>`);
document.write(`L'arrondi à l'entier superieur de 2.2 est de ${Math.ceil(2.2)}<br>`);

//arrondis et nombre décimales
document.write(`Si je souhaite concerver 2 décimales de 2.4887512 j'aurais ${(2.4887512).toFixed(2)}<br>`);
// /!\ La méthode toFixed renvoie un string

document.write(`40€ en notation monétaire : ${(40).toFixed(2)}€<br>`);

//puissance et racine carré
document.write(`4 a la puissance 2 fait ${Math.pow(4,2)}<br>`);//4²
document.write(`La racine carré de 25 est ${Math.sqrt(25)}<br>`);// sqrt, square root (racine carré)

//nombre aléatoire
document.write(`génération d'un nombre aléatoire : ${Math.random()}<br>`); //nombre compris entre 0 (inclus) et 1 (non inclus)

//simuler un jet de dès (6 faces)
//Math.random() + 6             0   5.9999
// math.random()+ 6 + 1         1   6.9999
//Math.floar(math.random()*6)+ 1
document.write(`Je lance le dès et j'obtiens ${Math.floor(Math.random()*6)+1}`);

document.write(`<h2>Structures itératives : boucles</h2>`);

/*
1- Situation de départ
2- Condition qui fait tourner la boucle
3- Incrémentation ou décrémentation
*/

// boucle WILE (tant que)
//point 1
let nbp = 7;
//   BOOLEEN
while(nbp > 0){ //Point 2 - condition qui fait tourner la boucle
    document.write(`J'épluche la patate ${nbp}<br>`);
    //nbp = nbp - 1;
    //nbp -= 1;
    nbp --;//Point 3 - Décrémentation
}

//Exemple Boucle en HTML
let htmlselect = "<select>";
let annee = "2005";
while(annee >="1905"){
    htmlselect +=`<option>${annee}</option>`;
    annee--;
}
htmlselect += "</select><hr>";
document.write(htmlselect);

let d = 5;
    d = d + 1;
    d += 3;
    d ++ ;
    d --;

//boucle For
//
for(let i=10; i<=100; i +=5){
    document.write(i + ` `);
}

//boucle do.While
let j = 6;
do{
    document.write("<br>ce code sera exécuté au moins 1 fois<br>");
    j++;
}
while(j < 5);

// let couleurs ='';

// do{
//     couleur = window.prompt(`Ecrire une couleur que vous aimez ou stop pour arrêter`);
//     if(couleur != 'stop'){
//         couleurs += couleur + ' ';
//     }
// }
// while( couleur != 'stop');
// document.write(`Voici vos couleurs: ${couleurs}`);

document.write('<h2>Fonctions prédéfinies</h2>');
//Les Fonctiosn prédéfinies sont souvent reliées à un prototype ou a un objet
//on parle aussi de méthode lorsque l'on fait référence à des fonctions d'objet

let phrase = `Je m'appelle Julie`;//String  il y a un prototype string
document.write(`Ma phrase contient ${phrase.length} caractères<br>`)
document.write(phrase.toUpperCase()+ `<br>`);
document.write(phrase.toLowerCase()+ `<br>`);
document.write( `Le prénom Julie commence à la position ${phrase.indexOf('Julie')}<br>`);// Le premier caractère se trouve à la position 0

document.write(phrase.substring(13,18)+ '<br>');//J'extrais une sous-chaine de la position 13 à 18
//ou
document.write(phrase.substring(phrase.indexOf('Julie'),('Julie').length+ phrase.indexOf('Julie'))+ '<br>');

let email = 'jean.dupond@free.fr';
//extraire la partie nominative d'un mail (quelqu'il soit)

document.write(email.substring(0,email.indexOf("@"))+'<br>');
//OU
let debut = 0;
let fin = email.indexOf('@');
document.write(email.substring(debut,fin) + '<br>');

console.log(window.innerWidth + 'X' + window.innerHeight);

navigator.geolocation.getCurrentPosition( function(infos){
    console.log(infos);
    console.log(`Vos coordonnées sont ${infos.coords.latitude},${infos.coords.longitude}`);
});

document.write(`<h2>Fonctions utilisateur</h2>`);

function direBonjour(){
    return "Bonjour<br>";
}

document.write(direBonjour());


let direBonjourBis = function(){
    return "Bonjour Bis <br>"
};

document.write(direBonjourBis() );

//ici prenom est un parametre de la fonction
// le fait de lui attribué une valeur le rend optionnel (la valeur sera utilisée comme valeur par défaut si le paramètre n'est pas renseigné au moment de l'appel de la fonction)
function direBonjour3(prenom = 'tout le monde'){
    return `Bonjour ${prenom} !<br>`;
};

document.write(direBonjour3("Kevin"));
document.write(direBonjour3("Julie"));
document.write(direBonjour3("Stephane"));
document.write(direBonjour3("Sandrine"));
document.write(direBonjour3("Yoan"));
document.write(direBonjour3());

function addition(a,b){
    return a+b;
}

document.write(addition(5,4));
//JS ES6 fonction fléchée
let addition2 = (a,b) => a+b;
let addition3 = (a,b) => {
    return a+b;
}

document.write('<hr>');
/*
paramètres
- prixHT
- taux - 20
*/

function calculTVA(prixHT, taux = 20 ){
    let prixTTC = prixHT * ( 1 + taux/100 );
    return prixTTC;
    
}
document.write(calculTVA(100)+ '€ <br>');//taux de 20% appliqué par défaut
document.write(calculTVA(100,5.5)+ '€<br>');// taux fourni : 5.5
document.write(calculTVA(250)+ '€<br>');


/*
C'est les soldes !!!
-----------------------------
Etiquette bleu - 10%
etiquette rouge - 15%
Etiquuette verte - 20%
Sans etiquette - 5%

prix, couleur d'étiquette
==> prix avec la réduction
*/

function couleurTVA( prixHT,couleur = ' '){
        
    if (couleur == "bleu"){
        let prixTTC = prixHT * ( 1 - 10/100 );
        return prixTTC + "<br>";
    }
    else if(couleur == "rouge"){
        let prixTTC = prixHT * ( 1 - 15/100 );
        return prixTTC + "<br>";
    }
    else if(couleur == "vert"){
        let prixTTC = prixHT * ( 1 - 20/100 );
        return prixTTC + "<br>";
    }
    else{
        let prixTTC = prixHT * ( 1 - 5/100 );
        return prixTTC + "<br>";
    }
}

document.write(couleurTVA("150",'bleu'));
document.write(couleurTVA("300",'rouge'));
document.write(couleurTVA("200",'vert'));
document.write(couleurTVA("250"));

/* Version Obtimisée
function couleurTVA( prixHT,couleur = ' '){
    
    let taux;
    if (couleur == "bleu"){
        taux =10;
    }
    else if(couleur == "rouge"){
        taux =15;
    }
    else if(couleur == "vert"){
       taux = 20;
    }
    else{
        taux = 5;
    }

    let prixTTC = prixHT * ( 1 - taux/100 );
    return prixTTC + "<br>";
    */

//Exemple d'écriture

function prixSolde(prix, couleurEtq = null){
    let taux;
    switch(couleurEtq){
        case "bleu" : taux = 10; break;
        case "rouge" : taux = 15; break;
        case "verte" : taux = 20; break;
        default : taux = 5;
    }
    return prix * (1 - taux/100);
}

// document.write(`100€ etiquette bleu : ${prixSolde(100,'bleu')}€<br>`);
// document.write(`100€ etiquette rouge : ${prixSolde(100,'rouge')}€<br>`);
// document.write(`100€ etiquette verte : ${prixSolde(100,'verte')}€<br>`);
// document.write(`100€ etiquette  : ${prixSolde(100,'')}€<br>`);


//exemple avec prompt









//Espaces global et Local
if( a== 10){
    let maVariable = 15; // maVariable est locale au bloc de IF et n'est pas connue dans l'espace global de JS
}

//Espace global
// document.write(maVariable); // JS ne connait pas la variable maVariable

let animal = 'lion';//global
function afficheAnimal(){
    let animal = "Tigre"; // locale
    return animal;
}
document.write(animal +"<br>");
document.write(afficheAnimal() +"<br>");
document.write(animal +"<br>");

//une varible est locale au bloc dans lequel elle est déclarée

document.write(`<h2>Les tableaux de données : array</h2>`);

//declaration d'un tableau []
let hero = ['Ironman','Thor','Spiderman'];
console.log(hero);
document.write(`Mon tableau contient ${hero.length} éléments<br>`);
document.write(hero[2]);

//ajouter un élément à la fin du tableau
hero.push('black Widow');
console.log(hero);

//ajouter un élément au début du tableau
hero.unshift('captain america');
console.log(hero);

//retirer un element à la fin du tableau
hero.pop();
console.log(hero);

//retirer un element au début du tableau
hero.shift();
console.log

//retirer un élément au milieu du tableau
hero.splice(1,1) // index de départ, nombre d'éléments à retirer

// remplacer un element
hero.splice(1,1,"Hulk");

// Intercaler des éléments
hero.splice(1,0,"Spiderman","Black Widow");

document.write('<hr>');

for(let i=0 ; i< hero.length; i++){
    document.write(hero[i]+'<br>')
}

document.write('<hr>');

//autre maniere pour boucler sur les valeurs d'un tableau
hero.forEach( function(valeur, index){
    document.write(`Le hero à l'index ${index} est ${valeur}<br>`);
});

//La fonction incluse dans les parenthèses s'appelle une fonction callback

document.write(hero.join()+"<br>");
document.write(hero.join('-')+"<br>");
document.write(hero.join(',')+"<br>");

let maraicher = [
    ['pomme','fraise','banane'], // 0
    // 0        1       2
    ['carotte','courgette','artichaud']// 1
    // 0            1           2
];
console.log(maraicher);

document.write( maraicher[1][2] +'<br>');// Artichaud
document.write( maraicher[0][1] +'<br>');// Fraise

console.log( maraicher[0].includes('banane'));
console.log( maraicher[0].indexOf('banane'));
console.log( maraicher[0].indexOf('kiwi'));


document.write(`<hr>`);
document.write(`<h2>Les objets / Classes</h2>`);

let monObjet = {
    //propriétés
    "modele" : "standard",
    "premiere-couleur" : "Jaune",
    "matiere" : "métal",
    //méthodes
    "quiSuisJe": function(){
        return `Je suis un objet en ${this.matiere} et de couleur ${this['premiere-couleur']}`;
    }
};
// JavaScript Object Notation : JSON

document.write(monObjet.couleur +'<br>');
document.write(monObjet['premiere-couleur'] +'<br>');

document.write(monObjet.quiSuisJe() + '<br>')


let maDate = new Date(); // new permet d'instancier la classe date et de fabriquer un objet (avec ses propriétés et ses méthodes)

document.write(maDate.getFullYear());









