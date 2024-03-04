// EXERCICE 1 : combat de dé
/*

Simuler un jet de dé pour Lordinateur
Simuler un jet de dé pour vous
Indiquer le résultat du duel :
- Vous avez gagné
- Vous avez perdu
- match nul
*/

//simuler un jet de dès (6 faces)
//Math.random() + 6             0   5.9999
// math.random()+ 6 + 1         1   6.9999
//Math.floar(math.random()*6)+ 1

document.write(`<h1> Exercices JS</h1>`);

document.write(`<h2> Combat de dé</h2>`);

let deOrdi = Math.floor(Math.random()*6)+1;
let deMoi =  Math.floor(Math.random()*6)+1;

document.write(`Lordinateur lance le dé et obtient ${deOrdi}<br>`)
document.write(`Je lance le dè et j'obtiens ${deMoi}<br>`);

if(deOrdi > deMoi){
    document.write(`L'ordinateur à gagné`);
}
    else if(deOrdi< deMoi){
    document.write(`J'ai Gagné`);
}
else{
    document.write(`Match Nul`);
}

/*
Exercice 2
------------
Ecrire une fonction qui indiquera Le signe Astrologique d'une personne en fonction de sa date de naissance.
*/
// document.write(`<hr>`);
document.write(`<h2>Horoscope en Fonction de la date</h2>`);


function signeAstro(jour,mois){
    if(jour < 10) {
       jour = "0"+`${jour}`;
    }
    else{
        jour = jour;
    }
    return mois + jour;
}

document.write (signeAstro("9","12") + '<br>');
//------------------------------------------------------------------//
//Exemple de correction

// Ajouter un 0 au jour s'il est inférieur à 10 ==> 09
// if (jour < 10) {
//     jour = '0' + jour;
// }
// // Concaténer le mois et le jour 609 (string)
// let dateN = mois.toString() + jour.toString();
// let signe;

// // comparer si ce que l'obtient appartient à une tranche associée à un signe
// // si 609 >= 521 && 609 =< 620 ==> gémeaux
// switch (true) {
//     case (dateN >= 120 && dateN <= 219): signe = 'Verseau'; break;
//     case (dateN >= 220 && dateN <= 320): signe = 'Poissons'; break;
//     case (dateN >= 321 && dateN <= 419): signe = 'Bélier'; break;
//     case (dateN >= 420 && dateN <= 520): signe = 'Taureau'; break;
//     case (dateN >= 521 && dateN <= 620): signe = 'Gémeaux'; break;
//     case (dateN >= 621 && dateN <= 722): signe = 'Cancer'; break;
//     case (dateN >= 723 && dateN <= 823): signe = 'Lion'; break;
//     case (dateN >= 824 && dateN <= 922): signe = 'Vierge'; break;
//     case (dateN >= 923 && dateN <= 1022): signe = 'Balance'; break;        
//     case (dateN >= 1023 && dateN <= 1121): signe = 'Scorpion'; break;        
//     case (dateN >= 1122 && dateN <= 1221): signe = 'Sagittaire'; break;  
//     default : signe = 'Capricorne';
// }

// return signe;

// }

// console.log(signeAstro(9, 6));
// console.log(signeAstro(12, 2));
// console.log(signeAstro(4, 10));

// (5).toString()   ==> '5'  //  toString() convertit un number en string


