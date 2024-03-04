// set (gestion automatique des doublons)
let monSet = new Set();


/*

.size (taille du set)


.add()
.delete()
.has() test de présence (bool)
.clear() vider le set

*/

monSet.add('lait');
monSet.add('oeufs');
monSet.add('oeufs');// le set gère les doublons et n'ajoute pas une valeur déjà présente

monSet.add('beurre');
console.log(monSet);

console.log('Mon set contient ' + monSet.size + ' éléments');
console.log(monSet.has('lait'));
console.log(monSet.has('pain'));

// paralèlle avec classList.contains ('classe')
// ou tableau.includes ('valeur')

for(let item of monSet){
    console.log(item);
}

for(let index of monSet.keys()){
    console.log(index);
}

for(let valeur of monSet.values()){
    console.log(valeur);
}

for ( let [index,valeur] of monSet.entries()){
    console.log(index + ':' + valeur);
}

// --------------------------------------------

// Map

let user = new Map();

/*
.set() Ajouter un élément (couple index, valeur)
.get() récupérer un élément par son index
.delete()
.clear
.has()
.entries()
.keys()
.values()
*/

user.set('Prenom','Vivien');
user.set('Nom','VLAD');


console.log(user.get('Prenom'));

user.forEach(function(valeur,index){
    console.log(index + ' => ' + valeur);
});

console.log(user.entries());
for  (let [index,valeur] of user.entries()){
    console.log(index + ' => ' + valeur );
}

console.log(user.has('Prenom'));

// ! Ne pas confondre avec la méthode .map() du prototype Array

// exemple

let tableau1 = [5,8,27,42];

let tableau2 = tableau1.map(function(element){
    return element * 1.2;
});

console.log(tableau2);

// Autre Exemple 

let prixHT = [100,250,300,500];
//             0   1   2   3

let prixTTC = prixHT.map(function(element){
    return element * 1.2;
});

console.log(prixTTC);

for ( let i in prixTTC){
    console.log(`${prixHT[i]}€ HT => ${prixTTC[i]}€ TTC`);
}

// -------------------------------------

let idProduits = [36,81, 27];
let prixUnitaire = [49.9,29.9, 200];
let quantite = [1,2,5];

let totaux = prixUnitaire.map(function(element,index){
    return element * quantite[index];
});

console.log(totaux);

idProduits.forEach(function(element,index){

    let ligne = document.createElement('tr');

    let idProduit = document.createElement('td');
    idProduit.innerHTML = element;

    let prixProduit = document.createElement('td');
    prixProduit.innerHTML = prixUnitaire[index].toFixed(2) + '€';

    let quantiteProduit = document.createElement('td');
    quantiteProduit.innerHTML = quantite[index];

    let totalLigne = document.createElement('td');
    totalLigne.innerHTML = totaux[index].toFixed(2) + '€';

    ligne.appendChild(idProduit);
    ligne.appendChild(prixProduit);
    ligne.appendChild(quantiteProduit);
    ligne.appendChild(totalLigne);

    document.querySelector('#panier').appendChild(ligne);
});
