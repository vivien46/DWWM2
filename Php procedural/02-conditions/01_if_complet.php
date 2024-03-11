<?php

$a = 5;
$b = 8;
$c = 12;
$d = 15;
$e = 25;

// la condition, donnée dans les parenthèses va etre testée, si elle est vraie, on est reversé dans le premier bloc d'instructions, le TRUE
if($a > $b){
    echo "Cette condition est vrai";
    // si elle est fausse, on est reversé dans le else, le FALSE
}else{
    echo "Cette condition est fausse <br>";
};
// je ne suis pas obligé de coder le else, si afficher ou utiliser le résultat du else ne m'interesse pas.

// une condition avec && AND
// il oblige à ce que les deux conditions soient vérifiées, sinon, on est versé dans le else
if( $a > $b && $b < $c){
    echo "Vrai, les deux conditions sont vérifiées";
}else{
    echo "Faux, au moins une des deux conditions est fausse <br>";
}

// une condition avec OU ||, qui vérifie, qui necessite qu'une des deux conditions est vérifiée
if( $a > $b || $b < $c){
    echo "Vrai, une des deux conditions est vérifiée <br>";
}else{
    echo "Faux";
}

// XOR est considéré comme le OU Exclusif, il ne permet qu'une solution soit vérifiables, si plusieurs le sont, il reverse dans le else, le FALSE
// le premier cas, il nous verse dans le TRUE, car seule une condition est vérifié
if( $a > $b XOR $b < $c){
    echo "Vrai, une des deux conditions est vérifiée <br>";
}else{
    echo "Faux";
}
// dans le second, comme les deux sont vérifiés, XOR stoppe le code et verse dans le FALSE
if($a < $b XOR $b < $c){
    echo "Vrai";
}else{
    echo "Faux<br>";
}
// XOR est surtout utilisé dans les langages d'applications (machines) et pas trop dans les langages web. Il sert à stopper le fonctionnement d'une machine pour éviter un bug