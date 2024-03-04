//selection d'éléments
const imgPrincipal = document.querySelector('#principal img');
const vignettes = document.querySelectorAll('#vignettes img');

for( let i = 0; i < vignettes.length; i++){
    vignettes[i].addEventListener('click',function(){

        let urlImage = this.getAttribute('src');
        let altImage = this.getAttribute('alt');
        //console.log(urlImage);
        imgPrincipal.setAttribute('src',urlImage);
        imgPrincipal.setAttribute('alt',altImage);

    });
}

/* boucle avec for of 
for(let vignette of vignettes){
    vignette.addEventListener('click', function(){
        let urlImage = this.getAttribute('src');
        let altImage = this.getAttribute('alt');

        imgPrincipal.setAttribute('src',urlImage);
        imgPrincipal.setAttribute('alt',altImage);
    });
}*/


