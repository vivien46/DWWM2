<?php 
if($_GET){
    echo $_GET['produit'] . ' au ' . $_GET['variete'] . "<br>";
    echo "vendu au prix de " . $_GET['prix'] . " €, aujourd'hui seulement";
}