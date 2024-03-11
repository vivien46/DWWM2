<?php
// les constantes sont aussi des espaces de stockage, des espaces mémoires, mais la valeur affectée ne pourra etre modifiée, variée.
// C'est la différence avec une variable, la donnée stockée est destinée à etre conservée definitivement
// Exemple, dans une constante on stockera l'URL (nom de domaine) qui permet au navigateur d'accéder à l'accueil du site. Idem avec le chemin physique vers le projet(c:/xampp/htdocs/nomDuProjet)

// syntaxe pour declarer une constante
// define est le mot clé pour introduire une constante
// pour declarer une constante, entre les parenthèses de define, on doit donner deux arguments.
// la première info sera le nom de la constante, ici VILLE
// La seconde, sa valeur (ici Noisiel)
// par convention, très importante à respecter, le nom des constantes doit etre ecrit en majuscules. Cela permet de très vite les distinguer par rapport au reste, sans reflechir, sans faire de recherches
define('VILLE','Roissy en Brie');

echo VILLE . "<br>";
// si je tente d'écraser la valeur d'origine par une nouvelle valeur, erreur PHP, Constant VILLE already defined
// define('VILLE', 'Paris');

// si par erreur une nouvelle valeur est injectée, la valeur d'origine sera protégée

// Comme pour les variables, le nom des constantes est sensible à la casse (case sensitive).
// Exemple, si à la ligne 14 on avait ecrit un echo VILLES, on aurait eu droit à un undifined Constant VILLES, car c'est VILLE (sans S) qui a été declarée au préalable

// Les constantes magiques
// Ce sont des constantes prédéfinies, immédiatement prete à l'emploi
echo "<h2>J'habite à " . VILLE ."</h2>";

// __FILE__ récupère dynamiquement le nom du fichier dans lequel on code
echo __FILE__ ."<br>";

// __LINE__ récupère dynamiquement la ligne du fichier dans lequel on code
echo __LINE__ ."<br>";

// les deux pourront nous servir pour faire du debug, pour permettre de situer dans quel fichier, à quelle ligne, le bug est survenu, à quel moment on perd une information etc...
// On se fera des messages à notre intention durant toute la période de développement du site