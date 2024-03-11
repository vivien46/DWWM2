<?php
/* permet de créer une session et doit être codé sur chaque fichier du projet en haut de chaque fichier, sinon la transition des informations de page en page ne pourra s'effectuer */
session_start();
// Utilisation de la superglobale $_SESSION pour générer les différents indices qui vont etre affectés des différentes valeurs que l'on veut stocker dans cette session
$_SESSION['identifiant'] = "Vivien";
$_SESSION['statut'] = "admin";

echo "<button><a style='margin: 0 1rem 0 1rem;padding: 1.5rem' href='landing_session.php' target='_blank'>Vers fichier infos</a></button>";

?>