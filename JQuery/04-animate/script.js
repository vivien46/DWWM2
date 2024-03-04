$(function(){

    $('#rondvert').on('click',function(){

        $(this).animate({
            'width' : '150px',
            'height' : '150px',
            'top' : '+=150px', // on peut modifier une valeur de manière relative à sa position actuelle
            'left': '+=100px'
        },600,function(){

            console.log('animation terminée');
        });
    });



    /**
     * exercice :
     * quand on clique sur le carre bleu on aimerait qu'il effectue les animation suivantes :
     * - se deplacer vers la droite
     * - descendre
     * - se décaler vers la gauche
     * - remonter à sa position initiale
     * 
     * ! si on raccorde plusieurs méthodes animates () à un élément, elles s'éxecutent l'une après l'autre 
     */



    $('#carrebleu').on('click',function(){
            console.log('click');
        $(this)
        .animate({ left: '350px'}, 500)
        .animate({ top: '80px'}, 500)
        .animate({ left: 0}, 500)
        .animate({ top: 0}, 500);
               
    });

    //Filtre et fenetre 

    /*
        au bout de 2 secs, on fait apparaitre le filtre en fondu et on deploie la fenetre.

        sur clic de la fenetre, on enroule la fenetre et on fait disparaitre le filtre en fondu.
    */

        setTimeout(function(){

            $('#filtre').fadeIn(600,function(){

                $('#fenetre').slideDown(600);
            });
            
            $('#fenetre').on('click',function(){
                $(this).slideUp(600,function(){
                    $('#filtre').fadeOut(600);
                });
            });
        },2000);
/*
        .parent() qui permet de selectionner le parent de l'élément .find('span') qui permet de trouver un enfant
        .closest('span')
        .before()
        .after()
        .append('') ajoute à l'interieur del'élément à la suite

        .html() getter (innerHTML)
        .html("<h2>Suite</h2>") 

        .text() getter (innerHTML)
        .text("du texte") setter

        .attr("type") getter (équivalent de getAttribute("type"))
        .attr("type", "text") setter (équivalent de setAttribute("type", "text"))

        .prop("disabled") getter
        .prop("disabled", false) setter
        
*/
        
})