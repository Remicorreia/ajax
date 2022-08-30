<?php

/**
 * Récupérer le livre dont l'id vaut 101 dans la bdd 'biblio'
 * dans un array associatif
 * 
 * Modifier le code pour récupérer le livre dont l'idenfiant sera 
 * dans l'URL : livre_by_id.php?id=102
 */

$id = $_GET["id"] ?? null;
$pdo = new PDO("mysql:host=localhost;dbname=biblio", "root", "");
if( $id ){
    $pdostatement = $pdo->query("SELECT * FROM livre WHERE id = '$id'");

    if($pdostatement) {
        $livre = $pdostatement->fetch(PDO::FETCH_ASSOC);
        echo json_encode($livre);
    } else {
        echo "Erreur SQL";
    }
} else {
    echo "L'id ne peut pas être nul";
}
