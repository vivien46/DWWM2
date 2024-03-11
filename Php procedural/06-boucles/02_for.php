<?php
echo "<h1>Les Boucles For<h1>";

echo "<h2>La boucle For 1</h2>";
for ($i=0; $i <=5 ; $i++) { 
    echo " Tour " . $i;
}

echo "<br><hr><br>";
echo "<form>";
echo "<select>";
echo "<option selected>Choisissez l'année</option>";
for($annee =date('Y'); $annee >= date('Y') - 100; $annee--){

    echo "<option>".$annee."</option>";
}

echo "</select>";
echo "</form>";

echo "<table border='1' style='border-colapse:colapse' bcolor=red>";
echo "<tr>";

for($cel=0; $cel<=9; $cel++){
    echo "<td style='padding: 1.5rem'>". $cel+1 ."</td>";
    }
    echo "</tr>";
    for($cel=10; $cel<=19; $cel++){
    echo "<td style='padding: 1.5rem'>". $cel+1 ."</td>";

    }
    echo "</tr>";
echo "</table>";

//correction
echo "<table border='1' style='border-colapse:colapse' bcolor=red>";
for($ligne=0; $ligne<=9; $ligne++){
        echo "<tr>";
        for($cel=0; $cel<=9; $cel++){
        echo "<td style='padding: 1.5rem'>". (10 * $ligne + $cel) + 1 ."</td>";

        }
    echo "</tr>";
}
    echo "</table>";
