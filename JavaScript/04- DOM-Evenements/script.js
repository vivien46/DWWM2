//selection 
const maSection = document.querySelector('#masection');

// Ecoute de l'évenement
maSection.addEventListener('click', function(){
    this.classList.toggle('bordure');
});

//fonction anonyme est déclanchée dès que l'évenement est intercepté

function afficheTaille(){
    document.querySelector('#taille').innerHTML = window.innerWidth + '&nbspX&nbsp' + window.innerHeight;
}

afficheTaille();

//a chaque redimensionnement de la fenetre je ré-execute La fonction afficherTaille qui met les informations à jour
window.addEventListener('resize',afficheTaille);

maSection.addEventListener('mouseover',function(){
    this.classList.add('fond');
});
maSection.addEventListener('mouseout',function(){
    this.classList.remove('fond');
});
//mouseenter, mouseLeave

let mesParagraphes = document.querySelectorAll('p');
for(let paragraphes of mesParagraphes){
    paragraphes.addEventListener('mousedown',function(){
        this.classList.add('fond','bordure');
    });
    paragraphes.addEventListener('mouseup',function(){
        this.classList.remove('fond','bordure');
    });
}