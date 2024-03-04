/*
Effectuer l'opération mathématique à partir du nombre1, du nombre 2 et du signe choisi des lors que l'utilisateur clique sur le bouton calculer.
Faire tout controle que vous jugez utile.
! Division par 0

! rappels : les saisies dans des inputs arrivent sous forme de string
*/

let nombre1 = document.getElementById('nombre1');
let nombre2 = document.getElementById('nombre2');
let signe = document.getElementById('signe');
let calculer = document.getElementById('calculer');
let resultat = document.getElementById('resultat');
let valeur1;
let valeur2;


//utilisateur rentre nombre 1 

// selectionne l'opérateur

// utilisateur rentre nombre 2

// appuis sur bouton calculer

// resultat = nombre1 + signe.value + nombre2;

// resultat.innerHTML= resultat.value;

nombre1.addEventListener('input',function(){
     valeur1 = parseFloat(this.value);
    console.log(nombre1.value);
    if (isNaN (valeur1)){
        let message = `La valeur saisie n'est pas un nombre`;
        resultat.innerHTML = message;
    }
    });

nombre2.addEventListener('input',function(){
     valeur2 = parseFloat(this.value);
    console.log(nombre2.value);
    });
    

calculer.addEventListener('click',function(){
    let operation;
    console.log(valeur1);
    switch(signe.value){
        case "+" : operation = valeur1 + valeur2; break;

        case "-" : operation = valeur1 - valeur2; break;

        case "*" : operation = valeur1 * valeur2; break;

        case "/" : operation = valeur1 / valeur2; break;
        default : operation = "impossible";
    };
        resultat.innerHTML += 'Le resultat est ' + operation;
    });

// Correction possible
/*
let nombre1 = document.querySelector('#nombre1');
let nombre2 = document.querySelector('#nombre2');
let signe = document.querySelector('#signe');
let resultat = document.querySelector('#resultat');

calculer.addEventListener('click',function()){
    if(nombre1.value.length > 0 && nombre2.value.length >0){

        let valeur1 = parseFloat(nombre1.value);
        let valeur2 = parseFloat(nombre2.value);
        let operation;

        switch(signe.value){
            case "+" : operation = valeur1 + valeur2; break;
            case "-" : operation = valeur1 - valeur2; break;
            case "*" : operation = valeur1 * valeur2; break;
            case "/" :
                    if (valeur2 !=0){
                        operation = valeur1 / valeur2;
                    }
                    else{
                        operation = "Division par 0 impossible"
                    }    
                    break;
                default :
                operation = 'Pas de signe choisi';
        }
        if( isNaN(operation)){
            resultat.innerHTML = opération;
        }
        else{
            resultat.innerHTML = valeur + signe.value + valeur2 + '=' + operation;
        }
    }
    else{
        resultat.innerHTML = "Les deux nombres doivent être renseignés";
    }

});
*/