<?php
// Synthaxe de base pour une fonction utilisateur, besoin non couvert pas les fonctions prédéfinies

//Si au moment de coder un fonction je décide qu'elle attend un argent , alors au moment de l'executer (ligne 10), je devrais lui donner cet argument.
function salut($prenom){
    echo "Bonjour ". $prenom ."<br>";
}

salut('Vivien');
// Focntion utilisateur pour calculer la TVA d'un produit dans une boutique, TVA applicable dans la fiche produit, sur le panier etc...
// Fonction que l'on va faire évoluer progressivement pour qu'elle devienne de plus en plus interessante et pas basqiue.

function calculTva1(){
    return 100 * 1.2;
}

echo "La TVA Appliquée pour 100 € HT conrrespondant à " . calculTva1() ."€ TTC<br>";

function calculTva2($prix){
    return $prix * 1.2;
}

echo "150 € HT conrrespondant à " . calculTva2(150) ."€ TTC<br>";

//V3, ma fonction pouvoir appliquer un taux de TVA différent

function calculTva3($prix,$taux){
    return $prix * $taux;
}
echo " 25 € HT, auquel j'applique un taux de TVA de 5,5% donnera un prix TTC de " . calculTva3(25,1.055) . " € <br>";

echo "75 € HT, auquel j'applique un taux de TVA de 20% donnera un prix TTC de " . calculTva3(75,1.2) . " € <br>";

//V4, pour appliquer un taux de TVA par défaut, de 20%, si on ne spécifie pas qu'il sera de 5.5%
// si lors de l'éxecution de la fonction on ne donne qu'un paramètre, c'est le taux de 20% qui sera appliqué.
//Pour appliquer le taux de 5.5% alors il faudra renseigner un second argument comme à la ligne 47
function calculTva4($prix, $taux =1.2){
return $prix * $taux;
}
echo " 25 € HT, auquel j'applique un taux de TVA de 5,5% donnera un prix TTC de " . calculTva4(25,1.055) . " € <br>";

echo "75 € HT, auquel j'applique un taux de TVA de 20% donnera un prix TTC de " . calculTva4(75) . " € <br>";