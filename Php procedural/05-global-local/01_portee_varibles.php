<?php
// Laporte des variables permet de distinguer deux espaces, global et local, pour comprendre quand une variable est utilisable, reconnaissable

// Cas Numéro 1, une variable declarée dans l'espace global, n'est pas reconnue dans l'espace local (entre les accolades de la fonction affiPays)
$pays ="France";

function affichePays(){
    //Pour que la variable $pays soit reconnue et utilisable dans cet espace local, je vais devoir faire appel au mot clé global, qui va servir d'importateur, de pont en l'espace global et local
    global $pays;
    echo $pays . "<br>";
}

affichePays();

// cas N°2, passer du local au global

function afficheJour(){
    $jour ="Mercredi";
    // pour exporter vers le global, il faudra utiliser le mot clé return
    return $jour;
    // Ce qui suit un return, ne pourra etre executer. En programmation, un return stocke une info, permet d'exporter vers le global et en plus stoppe le code ecrit après
    echo "et demain c'est Jeudi";
}
echo afficheJour();

// est concidéré comme espace local tout le code compris entre les accolades d'une fonction et sera considéré comme espace global, tout ce qui sera à l'exterieur de ces accolades

// Espace Global
/* Function monScript(){
    espace local
}
code 
espace global
*/

