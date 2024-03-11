<?php

$listePrenoms ="Irène, Richard, Stéphane, Souleïmane, Lucas";

//la variable $ListePrenom contient des prénoms, mais indissiables les uns par rapport aux autres. C'est une chaine de caractères globale. Je ne peux pas récupérer la valeur d'une seul prénom

echo $listePrenoms . "<br>";

// Un tableau va nous permettre de recuperer une valeur sans se soussier des autres

$tableauPrenom = array('Irène','Richard','Stéphane', 'Souleïman','Lucas');
// Affichage non conventionnel des valeurs du tableau, pas destiné à être afficheé pour les visiteurs du site
echo print_r($tableauPrenom) ."<br>";
echo "<pre>"; print_r($tableauPrenom); echo "</pre>";
// seconde manière, avec un var_dump
// il permet de récuperer des informations plus précises donc selon l'utilité, utiliser un print_r ou un var_dump
echo "<pre>"; var_dump($tableauPrenom); echo "</pre>";
// L'affichage conventionnel est utile durant la phase de développement d'un projet. Il sert a savoir à quel moment on perd l'information (exemple, pourquoi les infos collectées dans le formulaire n'arrivent pas en BDD)
// Les print_r et var_dump vont jalonner notre script caer ils vont aider au debug. Par contre, le jour de la mise en ligne du projet, fini, ils faudra absolument les mettre en comme taire ou les supprimer, ils ne doivent pas etre visibles par les utilisateurs du site

// Pour l'affichage conventionnel, a destination des utilisateurs, avec une echo
//Il faudra crocheter à l'indice de la valeur voulue du  tableau
echo $tableauPrenom[2]."<br>";

//seconde manière de déclarer un tableau

$listePays[]="France";
$listePays[]="Italie";
$listePays[]="Tunisie";
$listePays[]="Algérie";
$listePays[]="Maroc";
$listePays[]="Espagne";

echo "<pre>"; var_dump($listePays);echo "</pre>";

//permet d'ajouter des elements plus tard dans le code à un tableau deja existant (pas la première synthaxe)
//tres utile pour 
$tableauPrenom[] = "Assia";
$tableauPrenom[] = "Julie";
echo "<pre>"; var_dump($tableauPrenom);echo "</pre>";

foreach ($tableauPrenom as $prenom){
    echo "<table border='1'>";
    echo "<tr>";
    echo "<td width='150'>";
    echo $prenom;
    echo "</td>";
    echo "</tr>";
    echo "</table>";
}

//correction
foreach($tableauPrenom as $indice => $valeur){
    echo "<p>L'indice " . $indice . " a pour valeur " . $valeur . "</p>";
}
echo "<hr><h2>Autre Exemple de forEach</h2>";

// ma foreach exige en syntaxe obligatoire, le as et la =>, les deux noms de variables qui les suivent sont fixées de manière arbitraire. J'aurais pu leur donner un autre nom, ma foreach s'en fiche 
foreach($tableauPrenom as $mickey => $mouse){
    echo "<p>L'indice " . $mickey . " a pour valeur " . $mouse . "</p>";
}

//La forEach, selon les informations que l'on veut utiliser /afficher ne demande pas necessairement de collecter l'indice et la valeur.
//Si je n'ai besoin que de la valeur en BDD, je peux utiliser la synthaxe ci-dessous $nomtableau as $variable et de par sa programmation, elle stockera les valeurs trouvés en BDD dans la variable
echo "<ul>";
foreach($tableauPrenom as $valeur){
    echo "<li>".$valeur."</li>";
}
echo "</ul>";

//quelques fonctions prédéfinies utiles pour travailler sur les tableaux
//implode
//il sert à eclater les informations contenues dans un tableau
// Si on à besoin d'un séparateur entre nos informations, il faudra le lui donner avant le tableau sur lequel implode travaille

echo "<p>" . implode(' - ', $listePays) ."</p>";

//Fonction count et Sizeof, permettent de calculer le nombre d'éléments stockés dans un tableau

echo count($listePays) . "<br>";
echo sizeof($tableauPrenom) . "<br>";

for($i=0; $i < count($listePays); $i++){
    echo "<p>". $listePays[$i] . "</p>";
}
