  $(function(){

    // jQuery s'appui sur les selecteurs universels

    // selection par id
    $('#monarticle').css('border','1px solid red');

    $('#monarticle').css({
      'font-family' : 'arial','background-color' : 'yellow',
      'color' : 'blue'
    });
    /**
     * La méthode .css() accepte :
     *  - 1 propriété, valeur
     *  - 1 objet (JSON) avec la liste des propriétés/valeurs
     */

    // Selection par classe

    $('.voiture').css('font-weight','bold');

    // Appliquer une méthode à un élément en particulier
    $('.voiture:eq(0)').css('background','purple');

    $('.voiture').eq(1).css('background','chocolate');
  
  //selection par balise
  $('p').css('font-style','italic');
  
  });
 
 
 