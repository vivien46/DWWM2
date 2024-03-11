<?php
echo '<center><h1>Les boucles</h1></center>';

echo "<h2>La Boucle While 1</h2>";
/* La boucle while demande une initialisation de la variable à l'exterieur de la boucle */

$i=0;

// dans les parenthèses de la while on donne une condition qui permet de stopper la boucle, sinon boucle infinie 
while ($i <= 5){

        echo "Tour de boucle numéro " . $i . " --- ";
        $i++;
    }
    
    /* Ci-dessous, les équivalences de $i++
    $i +=1;
    $i = $i +1;*/
echo "<br><br>";
// Boucle while équivalente sans les '---'
echo "<h2>La boucle While avec condition</h2>";
$i=0;
while ($i <= 5){
    // Une condition pour le dernier tour de boucle, lorsque $i prendra la valeur de 5
if ($i==5){
    echo "Tour de boucle numéro " . $i; 
}
else{

    echo "Tour de boucle numéro " . $i . " --- ";
}

$i++;
}

echo "<br><hr>";

echo "<h2>La boucle Do While</h2>";
// La do While
$i=0;
do{
    echo "Tour " . $i . " / ";
    $i += 2;
}while($i <= 10);