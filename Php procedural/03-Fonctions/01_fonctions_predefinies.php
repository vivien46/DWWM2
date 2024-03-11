<?php
// Fonction pré-défénies ===> Fonctions déjà dispos dans PHP

$phrase = "Nous sommes en Seine et Marne, dans les locaux de ALTRH à Noisiel";

// Deux Fonctions prédéfinies pour calculer la longueur d'une chaine de caractères

//strlen()
echo strlen($phrase)."<br>";

//iconv_strlen()
echo iconv_strlen($phrase)."<br>";

// la différence entre les deux réside dans le fait que strlen va comptabiliser les caractères spéciaux (accents, idéogrammes, pictogrammes), alors que iconv_strlen n'en tient pas compte et englobe le tout en un seul caractère (comme au dessus avec le "à").

// substr() permet de selectionner un élément d'une chaine de caractère.
// Utile pour n'afficher que des extraits d'articles (exemple, les 50 premiers mots, puis un lien)
// ci-dessous, je récupere les trente trois premiers caractères de la chaine de caractère stockés dans la variable $phrase
echo substr($phrase,0,33)."<br>";

$mot1 = "lapins";
$mot2 = "souris";
$mot3 = "Chateaux";

// Pour retirer la dernière lettre d'une chaine de caractères, je peux travailler en partant de la fin, donnant une valeur negative. -1 pour enlever la dernière lettre,-2 les deux dernières.....

echo substr($mot1,0,-1)."<br>";
echo substr($mot2,0,-1)."<br>";
echo substr($mot3,0,-1)."<br>";

// date(), fonction prédéfinie pour récuperer dynamiquement la date en cours
echo date('D / M / Y') . "<br>";
//  Elle prend différents paramètres, tester avec D / M / y pour voir la différence
//utile dans un footer pour récupérer le nom du site avec l'année en cours (ou alors pour un site d'onformation, le jour ou à été publié l'article de presse).
echo "&copy; - Mon site - " . date('Y')."<br>";

// Empty() fonction pour vérifier si une variable à été affecter d'un contenu.
// ne pas confondre avec isset, si la variable existe.
// Utile pour stocker l'information qui verifie si en base de donnée un pseudo ou email à déjà été utilisé.
// Si la variable revient vide, empty, cela veut dire que l'utilisateur peut choisir ce pseudo ou email qui doit rester unique, sinon c'est PHP qui génerera et affichera un message d'erreur le cas échéant.

if ( empty ($phrase)){
    echo "Vrai, cette variable n'a pas reçu de contenu<br>";
}
else{
    echo "Faux, la variable a été affecté d'un contenu<br>";
}