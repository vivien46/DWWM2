<!--  une extension .php permet de mélanger du code php avec du html
l'extension .html ne le permettra pas, que du html, css et JS -->
<?php

// echo est la principale instruction en PHP pour afficher un résultat (string, integer, booléen etc...)
// Dans un passage PHP, je peux aussi mélanger du PHP avec du HTML
echo "salut";

// Deuxième instruction pour l'affichage, très peu utilisée : print (peu perfomante en temps d'éxécution)
print "<h2>Je suis le roi du dev<h2>";

//je ferme ma balise php que si après je dois coder du html pur (synthaxe emmet par exemple). Par contre, si mon fichier ne contient plus que du PHP, alors il vaut mieux ne pas le fermer, c'est plus facile pour le debug.

// En PHP, pour générer du commentaire sur une seule ligne, on l'introduit avec //
/* Pour un commentaire sur plusieur ligne on utilise : /**/