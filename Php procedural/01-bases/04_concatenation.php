<?php

$prenom = 'vivien';
$nom = 'VLAD';

echo "Je suis $prenom $nom <br>";
// première façon de concaténer, la plus fréquente, avec des points (pas besoin de concaténer dans le cas du dessus, on utilise des doubles quotes qui interpretent les valeurs des variables)
echo 'je suis ' . $prenom . ' ' . $nom . '<br>';

// seconde manière de concaténer, très rare, avec des virgules
echo 'je suis ' , $prenom , ' ' , $nom , '<br>';

// la concaténation par affectation
$nombre = 15;
echo $nombre .= 24;
// la syntaxe ci-dessous détaille ce que fait la ligne du dessus
// echo $nombre = $nombre . 24;
// le echo ci-dessus va générer 1524 ( et non 39, on ne les additionne pas, on les concatène)