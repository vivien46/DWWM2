// Fonction de Temps setTimeout

// function redirection(){
//     window.location.href = 'https://youtube.com';
// }
// window.open()
//window.open('https://youtube.com','_blank','width=800,height=600');
// Attention : peut être bloqué en tant que pop-up


// setTimeout(redirection,5000);// temps en ms
// setTimeout execute une fonction au bout d'un certaine delai exprimé en millisecondes

//fonction temps setInterval
//setInterval execute une fonction au bout d'un certain delai et repete l'action sur cet interval de temps

let compteur = 0;
function repetition(){
    compteur++;
    console.log('hello !');
    if(compteur == 5 ){
        clearInterval(timer);
    }
}

let timer = setInterval(repetition,2000);
