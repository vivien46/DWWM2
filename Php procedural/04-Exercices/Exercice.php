<?php
//declarer deux variables nommées type et marque, affectée chacune de la valeur Mégane et Renault
// afficher le résultat sous forme de phrase en concaténant les variables avec du texte (Concaténation obligatoire, même si usage de double quotes)
$type = "megane";
$marque ="Renault";

echo "<center><h1>Exercices</h1></center>";

echo "<h2>Exercice 1</h2>";

echo "La voiture " . $type . " de marque " . $marque . ", a été construite en " . date('Y')."<br>";

echo "<hr>";

echo "<h2>Exercice 2</h2>";

define('VILLE','Paris');// Pays FRANCE
echo "J'habite près de " . VILLE;

echo "<hr>";

echo "<h2>Exercice 3</h2>";

$nombre1 = 15;
$nombre2 = 25;
$nombre3 = 35;
$nombre4 = 45;

if ( $nombre1 < $nombre2 || $nombre3 < $nombre4){
    echo "La condition est vérifié au moins une fois<br>";
}
else{
    echo "Faux";
}

echo "<hr>";

echo "<h2>Exercice 4</h2>";

switch($nombre1){
    case "35":
        echo " La variable Vaut 35";
        break;
    case "25":
        echo " La variable vaut 25";
        break;
    default :
        echo "erreur, nombre1 ne contient aucune de ces valeurs";
}

echo "<hr>";

echo "<h2>Exercice 5</h2>";

$string = "Je suis apprenant(e) dans un centre de formation, et je réside en IDF";

echo strlen($string)."<br>";
echo substr($string,0,35);
