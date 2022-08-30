<?php

/* Ecrire le code PHP pour récupérer les valeurs tapés dans un formulaire
    en méthode GET. Les inputs s'appellent nb1 et nb2.
    Affichez le résultat de nb1 + nb2  */

if( $_GET ){
    $nb1 = $_GET["nb1"];
    $nb2 = $_GET["nb2"];
    $resultat = $nb1 + $nb2;
    echo $resultat;
} else {
    echo "Calcul impossible sans valeurs données";
}