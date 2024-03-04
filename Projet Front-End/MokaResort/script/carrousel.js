// Control de présence de l'élément sur la page
if ( document.querySelector('.carrousel')){

    let carrousel = document.querySelector('.carrousel');
    let reglette = document.querySelector('.carrousel .reglette');
    let figures = document.querySelectorAll('.carrousel .reglette figure');
    let nbFigures = figures.length;
    let vitesse = carrousel.dataset.vitesse || 3000;

    let tabOrganisation = new Array(nbFigures);

    //initialisation
    reglette.style.width = 100 * nbFigures + '%';

    for( let i=0; i< nbFigures; i++){
        figures[i].style.order = i;
        figures[i].style.width = (100/nbFigures) + '%';
        tabOrganisation[i] = i;

    }

    //attribution des orders
    function attribOrder(){
        for(let i =0; i< nbFigures; i++){
            figures[i].style.order = tabOrganisation[i];
        }
    }

    // organisation quand on avance
    function nextImage(){
        //Attribuer la valeur de 'order' du dernier élément du premier
        let element = tabOrganisation.pop();
        tabOrganisation.unshift(element);
        attribOrder();
    }

    //organisation quand on recule
    function previousImage(){
        //attribuer la valeur de 'order' du premier element au dernier
        let element = tabOrganisation.shift();
        tabOrganisation.push(element);
        attribOrder();
    }

    let timer = setInterval(carrouselNext,vitesse);
    function carrouselNext(){
        //lancer une animation avance
        reglette.classList.add('animavance');

        //Au bout d'une seconde, il faut placer l'image à la fin (nextImage), je réinitialise la position left à 0, je retire l'animation
        setTimeout(function(){
            nextImage();
            reglette.style.left = 0;
            reglette.classList.remove('animavance');
        },1000);
    }

    function carrouselPrevious(){
        // Il faut placer la dernière image au début
        previousImage();

        // je corrige la position left à -100%
        reglette.style.left='-100%';

        // Lancer l'animation recule
        reglette.classList.add('animrecule');
        
        // Au bout d'une seconde 
        setTimeout(function(){
            reglette.classList.remove('animrecule');
            reglette.style.left = 0;
        },1000);
    }

    //mettre en place une pause si la souris est dans la zone du carrousel et on le redemarre si la souris en sort
    carrousel.addEventListener('mouseenter',function(){
        clearInterval(timer);
    });
    carrousel.addEventListener('mouseleave',function(){
        clearInterval(timer); //par securite j'arrete le timer
        timer = setInterval(carrouselNext,3000);
    });

    let previous = document.querySelector('.previous');
    let next = document.querySelector('.next');

    previous.addEventListener('click',carrouselPrevious);
    next.addEventListener('click',carrouselNext);
}