<!-- dans le href, je véhicule l'information en GET sur le choix de la langue (pays = en etc...) -->
<a style='margin:0 1rem 0 1rem' href="?pays=en"><img src="img/england.webp" alt="Drapeau de l'Anglettere" loading="lazy"></a>
<!-- le format webp + loading=lazy permettent d'optimiser le chargement de la page => meilleur référencement google -->
<a style='margin:0 1rem 0 1rem' href="?pays=es"><img src="img/spain.webp" alt="Drapeau de l'Espagne" loading="lazy"></a>
<a style='margin:0 1rem 0 1rem' href="?pays=dz"><img src="img/algeria.webp" alt="Drapeau de l'Algérie" loading="lazy"></a>


<?php
// condition pour eviter erreur PHP au premier chargementde la page
if($_GET){
    // si une info a transité dans l'URL, on affecte cette valeur à $pays
    $pays = $_GET['pays'];
}elseif(isset($_COOKIE['pays'])){
    // si un cookie nommé pays existe, on affecte sa valeur à $pays
    $pays = $_COOKIE['pays'];
}
else{
     // si aucun cookie existe et si aucune valeur n'a transité dans l'URL, alors on affectera la valeur fr par défaut à $pays
    $pays = 'fr';
}

//Création d'un cookie qui va stocker l'information de notre préférence de langue pour qu'a notre prochaine visite sur le site ce ne soit pas à nouveau par défaut la langue française selectionnée
// pour créer un cookie, il faut utiliser la fonction prédéfinie setcookie()
// premier argument: son nom (pays)
// second argument, la variable qui va stocker la préférence de la langue ($pays)
// troisième argument, la durée de validité (3 mois, 6 mois, max un an )
// Pour caluculer cette durée de validité, on va utiliser la fonction time() qui donne le temps écoulé en secondes depuis le 01/01/1970
// A ce temps écoulé, je dois ajouter une année, mais convertie en secondes => 365 jours pour une année, un jour = 24 h, une heure correspond à 60 mn, une minute correspondant à 60 secondes (3600 secondes pour une heure)

setcookie('pays', $pays, time()+365*24*3600);
//echo time();
//setcookie crée le cookie mais il va permettre aussi au cookie de se régénérer d'une année, a chaque visite sur le site
// il faudrait ne plus aller sur le site durant une année, pour que le cookie expire

//condition  switch qui va analyser notre choix pour décider de l'affichage
switch($pays){
    case 'fr' : 
        echo "<h1>Bonjour</h1>";
        break;
    case 'en' : 
        echo "<h1>hello</h1>";
        break;
    case 'es' : 
        echo "<h1>Hola</h1>";
        break;
    case 'dz' : 
        echo "<h1>Salaam</h1>";
        break;
        default : echo "Vous devez faire le choix d'une langue";
        break;
}
?>