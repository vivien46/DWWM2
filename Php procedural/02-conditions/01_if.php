<?php

echo "<h1>Les conditions IF</h1>";

$nb1 = 2;
$nb2 = 4;
$nb3 = 7;
$nb4 = 12;
$nb5 = 17;

// la condition, donnée dans les parenthèses va etre testée, si elle est vraie, on est reversé dans le premier bloc d'instructions, le TRUE

if ($nb1 > $nb2){
    echo "Cette condition est vrai";
}
else{
    echo "Cette condition est fausse <br>";
};
// je ne suis pas obligé de coder le else, si afficher ou utiliser le résultat du else ne m'interesse pas.

// condition avec && AND
// il oblige à ce que les deux conditions soient vérifiées, sinon, on est versé dans le else

if ( $nb1 > $nb2 && $nb2 < $nb3){
    echo "Vrai, les deux conditions sont vérifiés";
}
else{
    echo "<strong>Faux, au moins une des deux conditions est fausse.</strong><br>";
}

// une condition avec OU ||, qui vérifie, qui necessite qu'une des deux conditions est vérifiée

if ( $nb1 > $nb2 || $nb2 < $nb3){
    echo "vrai, une des deux conditions est vérifié.<br>";
}
else{
    echo "Faux, les deux conditions sont faussent.<br>";
}
// XOR est considéré comme le OU Exclusif, il ne permet qu'une solution soit vérifiables, si plusieurs le sont, il reverse dans le else, le FALSE
// le premier cas, il nous verse dans le TRUE, car seule une condition est vérifié

if ( $nb1 > $nb2 XOR $nb2 < $nb3){
    echo "vrai, une des deux conditions est vérifié.<br>";
}
else{
    echo "Faux, les deux conditions sont faussent.<br>";
}

// dans le second, comme les deux sont vérifiés, XOR stoppe le code et verse dans le FALSE

if ( $nb1 < $nb2 XOR $nb2 < $nb3){
    echo "vrai, une des deux conditions est vérifié.<br>";
}
else{
    echo "Faux, les deux conditions sont faussent.<br>";
}
// XOR est surtout utilisé dans les langages d'applications (machines) et pas trop dans les langages web. Il sert à stopper le fonctionnement d'une machine pour éviter un bug

//eslsif permet de tester progressivement différents cas de figure. Tant que la condition est respectée, dans le if ou le elseif, on execute le code dans le bloc

if ( $nb1 > $nb2){
    echo "Vrai, $nb1 est supérieur à $nb2";
}elseif ($nb1 == 12){
    echo "vrai, cette variable est égale à 12";
}else{
    echo "Faux, auncune n'a été vérifié <br>";
}
// Synthaxe contracte pour une condition ternaire
echo ( $nb1 < $nb2) ? "Vrai, $nb1 est bien inferieur à $nb2<br>" : "Faux";

// Condition classique, équivalente à la ternaire en haut
if ($nb1 < $nb2){
    echo "Vrai, $nb1 est bien infèrieur à $nb2<br>";
}else{
    echo "Faux";
}

//IF ELSE avec les opérateurs de comparaison == et ===
$var1 = 100;
$var2 = '100';

if ($var1 == $var2){
    echo "Vrai, les deux variables ont la même valeur<br>";
}
else{
    echo "la comparaison est fausse";
}

// === compare les valeurs mais aussi les types, ci-dessous Faux car l'une est un entier (integer) tandis que l'autre est une chainede caractères (string)
if ($var1 === $var2){
    echo "Vrai";
}
else{
    echo "Faux, elles ont la même valeur mais pas le même type<br>";
}

echo ($var1 === $var2) ? "Vrai" : "Faux, elles ont la même valeur mais pas le même type<br>";

// condition avec la fonction prédéfinie isset() qui permet de tester qi quelquechose existe ou non 

if (isset($test)){
    echo " la variable existe";
}
else {
    echo "La variable n'existe pas<br>";
}

echo (!isset($test)) ? "la variable n'existe pas<br>" : "La variable existe"; 