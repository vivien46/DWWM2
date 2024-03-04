let cookies = document.cookie;

let tabCookies = cookies.split('; ');
// Login=fred; langue=fr; autre=valeur
//     0            1          2      

let langue = 'en';

for(let i of tabCookies ){
    let elements = i.split('=');
    if(elements[0]=='langue'){
        langue = elements[1];
    }
}

function majLangue(langue){
    let cible = '#lang' + langue;
    let divLangues = document.querySelectorAll('.langue');
    for(let i=0; i< divLangues.length; i++){
        divLangues[i].style.display="none";
    }
    document.querySelector(cible).style.display='block';
}

majLangue(langue);

document.querySelector('#langue').addEventListener('change',function(){
    let langueChoisie = this.value;
    majLangue(langueChoisie);

    //on va mémoriser la langue choisie dans un cookie
    //caracterisé par un nom une valeur et une date d'expiration

    let expiration = new Date();
    expiration.setTime(expiration.getTime() + 10 * 24 * 3600 + 1000 );// 10 Jours exprimés en ms
    document.cookie = `langue=${langueChoisie}; expires=${expiration.toGMTString()}; path=/`;
});

// session storage ou local storage
/*
.setItem() ajoute une entrée
.getItem() recupere une entrée
.removeItem() détruire une entrée
.clear() vide le stotage

Les infos de sessionStorage disparaissents à la fermeture di site/ navigateur
Les infos de localStorage sont concervés
*/

sessionStorage.setItem('info1','valeur1');
localStorage.setItem('info2','valeur2');


/*
! Pas de données sensibles côté client (cookies, sessionStorage ou LocalStorage)
Les données sensibles seront stockées côté serveur (fichiers, bases de données, ...)
*/