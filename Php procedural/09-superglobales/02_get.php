<?php
//get pour faire transiter les infos sur la meme page

//recup des infos sur une autre page
// echo "<button style='margin: 2rem 0 0 2rem'><a href='landing_get.php?produit=gateau&variete=chocolat&prix=20' target=_blanck>Afficher le résultat</a></button>";

// infos sur la meme page
if(!$_GET){
echo "<button style='margin: 2rem 0 0 2rem'><a href='?produit=gateau&variete=chocolat&prix=20' target=_blanck>Afficher le résultat</a></button>";
}

if($_GET){
    echo "<br><br>" . $_GET['produit'] . ' au ' . $_GET['variete'] . "<br>";
    echo "vendu au prix de " . $_GET['prix'] . " €, aujourd'hui seulement";
}