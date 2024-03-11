l<?php

// Un tableau associatif se distingue du classique car en plus de donner des valeurs pour ses éléments, on leur attribuerais au prealable leur indices

$listFruits = array("o" => "orange", "tu" => "tutu", "to" =>"toto");

// Très utile car désormais je sais sur quel indice crocheter (c'est moi qui l'ai nommé) plutot que de devoir faire un print_r pour connaitre les différents indices (pour des tableaux importants à plus de 1000 indices/entrées)

echo $listFruits['o'] . '<br>';

// ! cas de figure particulier à maitriser
// Lorsque je suis dans des doubles quotes qui necessitent pas de concatenation au moment de crocheter sur l'indice ce dernier ne doit pas etre entouréde quote

echo "L' $listFruits[o] a pour indice o<br>";
// Inversement dans le cas de simple quotes qui vont nécessiter de la concatenation alors au moment de crocheter, l'indice devra etre compris entre quotes
echo $listFruits['tu'] . ' a pour indice tu<br>';

// ------------
// Les tableaux bi-dimentionnels (ou multi-dimensionnels)
//Ce sont en fait les vrais tableaux à 99% ceux sur lequels on devra trailler en permanence

// premiere synthaxe
$listeMarvel = array(
    array('Personnage' => 'Ironman', 'Nom' => 'Stark', 'Prenom' => 'Tony'),
    array('Personnage' => 'Black Widow', 'Nom' => 'Romannof', 'Prenom' => 'Natasha'),
    array('Personnage' => 'Hulk', 'Nom' => 'Banner', 'Prenom' => 'Bruce'),

);

print_r($listeMarvel);

echo "<br>";

echo "Le personnage de ". $listeMarvel['1']['Personnage'] . ' à pour prenom '. $listeMarvel['1']['Prenom'] . '<br>'; 

//seconde synthaxe
$tableauMarvel = array(
    "Hulk" => array('Nom' => 'Banner','Prenom' => 'Bruce'),
    "Ironman" => array('Nom' => 'Stark','Prenom' => 'Tony'),
    "Black Widow" => array('Nom' => 'Romanof','Prenom' => 'Natasha'),
);

echo "<pre>"; var_dump($tableauMarvel); echo "</pre>";

echo "Le prenom de IronMan est " . $tableauMarvel['Ironman']['Prenom']."<br>";

// Double forEach pour explorer un tableau bi-dim
foreach($tableauMarvel as $key => $value){
    echo "<ul>";
    //on  teste avec is_array si les valeurs contenuent dans $tableauMarvel sont à leur Tour un tableau (un tableau dans un tableau)
    if(is_array($value)){
        echo "<li>";
        //si donc c'est bien un tableau bi-dim on récupère l'indice $key pour l'afficher dans le <h4> ça sera le nom de chaque Personnage/Tableau
        echo "<h4>" . $key . "</h4>";
        //Puis une deuxieme ForEach pour extraire les données de chaque personnage
        //notez qu'il n'est pas necessaire de les nommer $key2 et $value2 pour les différencier du premier forEach
        //On pourrait garder le nom de $key et $value, le code fonctionnerait très bien
        // Volontairement, on modifie les noms pour montrer que ce ne sont pas des mots clés
        
        foreach ($value as $key2 => $value2) {
            echo "<p>$key2 : $value2 </p>";
        }
        echo "</li>";
    }
    echo "</ul>";
}