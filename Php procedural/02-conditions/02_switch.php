<?php

// équivalente au else IF pour tester plusieurs cas de figure. Elle s'écute plus vite, il faut donc la préféré si on a trop de cas de figure à tester

$couleur = "bleu";

switch($couleur){
    case "vert":
        echo " La variable contient bien la couleur Vert";
        break;
    case "bleu":
        echo " La variable contient bien la couleur Bleu<br>";
        break;
    default :
        echo "la varible ne contient aucune de ces couleurs";
}

// condition elseif équivalente au switch du dessus
if ( $couleur == 'vert'){
    echo "La variable contient bien la couleur Vert";
}
elseif ($couleur == 'bleu'){
    echo "La variable contient bien la couleur Bleu (avec switch)<br>";
}
else {
    echo "La variable ne contient aucune couleur (avec switch)";
}