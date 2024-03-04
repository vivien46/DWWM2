let texte1 = document.getElementById('texte1');
let texte2 = document.getElementById('texte2');

texte1.addEventListener('input',function(){
    let valeur = this.value;
    texte2.value = valeur;
});

//-------------------Exercice 2------------------------------
let nombre = document.getElementById('nombre');
let table_resultats = document.getElementById('table_resultats');
let ligne;



nombre.addEventListener('input',function(){
    let valeur = parseFloat(this.value);

    if(ligne){
        ligne.remove();
    }
if (!isNaN(valeur)){


    ligne = document.createElement('tr');
    let cellule1 = document.createElement('td');
    cellule1.innerHTML = valeur;
    let cellule2 = document.createElement('td');
    cellule2.innerHTML = Math.pow(valeur,2);
    let cellule3 = document.createElement('td');
    cellule3.innerHTML = Math.pow(valeur,3);

    ligne.appendChild(cellule1);
    ligne.appendChild(cellule2);
    ligne.appendChild(cellule3);

    table_resultats.appendChild(ligne);
}
});

//---------------------Exercice 3--------------
let monImage = document.getElementById('monimage');

monImage.addEventListener('click',function(){
    if (this.getAttribute('src') == './img/usopp.jpg'){
        this.setAttribute('src','./img/goku.jpg');
    }
    else{
        this.setAttribute('src','./img/usopp.jpg')
    }
        
});
//il existe une méthode .removeEventListener