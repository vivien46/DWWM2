<?php
//A mettre obligatoirement pour récupérer les informations de session provenant de 04_session.php
session_start();

//Pour eviter les erreurs PHP au premier chargement de la page
if($_SESSION){
    // utilisation encore de la superglobale $_SESSION
    echo "Bienvenue ". $_SESSION['identifiant'] . ", vous avez sur ce site le statut de <font style='text-transform: capitalize'>" . $_SESSION['statut'] . "</font><br>";
 
}
    if(isset($_SESSION['statut']) && $_SESSION['statut'] == 'admin'){
        echo "Bienvenue ". $_SESSION['identifiant'] . ", vous êtes " . $_SESSION['statut'] . "<br>";
        }
        else{
        echo "vous etes personne";
        }

    //correction
    // pour éviter les erreurs PHP au premier chargement dela page
if($_SESSION){
    // utilisation encore de la superglobale $_SESSION, cette fois pour récupérer les infos en affichage

    // code de la condition qui affichera un message de bienvenue différent, selon que l'on soit utilisateur ou administrateur
    // Bienvenue cher machin ou Bienvenue machin
    // il faudra modifier le statut à la mano dans le fichier 04_session et aussi supprimer les sessions existantes dans xampp/tmp pour tester les deux cas de figure
    if($_SESSION['statut'] == 'administrateur'){
        echo "Bienvenue cher " . $_SESSION['identifiant'] . ", vous avez sur ce site le statut de " . $_SESSION['statut'] . "<br>";
    }else{
        echo "Bienvenue " . $_SESSION['identifiant'] . ", vous avez sur ce site le statut de " . $_SESSION['statut'] . "<br>";
    }
}
?>