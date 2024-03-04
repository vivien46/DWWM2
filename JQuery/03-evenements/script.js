    // ! attention 
    // ? Elle fait quoi cette fonction 
    //* commentaire plus claire
    /**Annotation */ 
    $(function(){

    $('#carrebleu')
    .on('click',function (){

      $(this)
      .removeClass('bleu')
      .addClass('rouge');

      /**
       * classList.add()      addclass()
       * classList.remove()   remove.class()
       * classList.contains() hasClass()
       * classList.toggle()   toggleClass()
       */
    });

    $('#carrebleu')
    .on('mouseenter',function(){
      $(this)
          .removeClass('carre')
          .addClass('rond')
    })

    .on('mouseleave',function(){
      $(this)
            .removeClass('rond')
            .addClass('carre');
    });
  
  
 
 /**
  * Jquery possède les méthodes
  * .show(500)
  * .hide(500)
  * .toggle(500)
  *         chiffre en ms
  *         'slow','fast'
  */

 //quand je clique sur le rond jaune, je cache le rond vert, si je reclique sur le rond jaune, je fais réapparaitre le rond vert
 
$('#rondjaune')
.on('click',function(){
    $('#rondvert').toggle('slow');
})

// Animations d'apparition/disparition
/**
 * .slideDown()
 * .slideup()
 * .slideToggle()
 * 
 * fondus
 * .fadeIn()
 * .fadeOut()
 * .fadeToggle()
 * .fadeTo()
 */




/**
 * si je clique sur l'image, je la fais disparaitre en fondu sortant, je change l'url de l'image que je fais apparaitre en fondu entrant
 */
let i = 1;
$('#monimage').on('click',function(){

  $(this).fadeOut(500,function(){
    i++;
    $(this).attr('src',`https://picsum.photos/200/200?random=${i}`)
    .fadeIn(500);
  })
})

$('#carrebleu').fadeTo(500,.4); // Atteint l'opacité .4 en 500 ms


});// fin du DOM Ready