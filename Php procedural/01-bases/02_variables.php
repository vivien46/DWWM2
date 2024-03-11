<?php

// une variable est un espace de stockage dans lequel on affecte une valeur. Cette valeur pourra évoluer (varrier), par exemple le montant total d'un panier sera représenté par une variable et sa valeur variera au fur et a mesure que l'on ajoute ou retire des produits du panier.

//Elle peut accueillir des valeurs de type string, integer, float (nombre décimale) ou un tableau.

// une variable doit être introduite par le signe $ et ne peut commencer par un chiffre, par exemple $8prenom. Cela entraine une erreur PHP.
// Par convention elle ne pourra commencer par un '_' ( underscore ).Elle ne contiendra pas non plus de caractères spéciaux (accents ...).
//Pour le nommage, on va demander à utiliser un nom évocateur ou pertinent.
// Pour affecter une valeur à cette variable, on utilise le signe égale ( = ), qui n'est pas un signe d'égalité mais un signe d'affectaction.

$prenom = 'toto';

echo "je me prenomme $prenom<br>";
// différence en simple et double quotes, dans le premier cas la valeur de la variable est interprétée, dans le second, la valeur ne s'affichera pas car la variable sera traitée comme une chaine de caractères.
echo 'je me prenomme $prenom<br>';

// $^nomreProduits ou $nombre_produits, si le nom de la variable est un mot composé comme ici, on peut utiliser le camelcase ou du snake_case.

$prenom = "tutu";

//la valeur affectée à une variable est modifiable à tout instant, autant de fois que l'on veut.
echo "<h3>Je me prenomme $prenom</h3>";

$nbEntier = 20;
$nbDeci = 2.5;
$booleen = FALSE;

echo gettype($prenom) . '<br>';
echo gettype($nbEntier) . '<br>';
echo gettype($nbDeci) . '<br>';
echo gettype($booleen) . '<br>';
echo $booleen;

// ci dessus, le echo du booleen va afficher 1. C'est la valeur affectée à TRUE par PHP (et 0 pour FALSE, ou alors NULL)