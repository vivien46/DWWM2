<?php

$nombre1 = 4;
$nombre2 = 2;
echo '<center><h1>Les Operateurs Arithmétiques</h1></center>';

echo $nombre1 + $nombre2 . '<br>';
echo $nombre1 - $nombre2 . '<br>';
echo $nombre1 * $nombre2 . '<br>';
echo $nombre1 / $nombre2 . '<br>';

// le signe % permet d'obtenir le modulo (le reste d'une division)
echo $nombre1 % $nombre2 . '<br>';

// l'exponentiation ** veut dire puissance (ici, 4 puissance 2, au carré)
echo $nombre1 ** $nombre2 . '<br>';

echo '<br><hr><br>';

// les opérateurs par affectation

echo $nombre1 += $nombre2;
echo '<br>';
echo $nombre1 -= $nombre2;
echo '<br>';
echo $nombre1 *= $nombre2;
echo '<br>';
echo $nombre1 /= $nombre2;
echo '<br>';

// attention, la valeur d'origine, avec l'affectation (concaténation par affectation ou opérateur d'affectation) sera ecrasée.
// en passant de la ligne 21 à la 23, $nombre1 n'aura plus la valeur de 4, d'origine, mais 6 ( 4 + 2)
// préférez cette syntaxe, plus longue
// echo $nombre3 = $nombre1 + $nombre2;
// mais qui à l'avantage de ne pas ecraser les valeurs d'origine (on pourrait en avoir besoin plus loin dans le code) et qui ont le mérite de ne pas réserver de surprises