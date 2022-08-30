<?php
$id = $_GET["id"] ?? null;
$pdo = new PDO("mysql:host=localhost;dbname=biblio", "root", "");
if( $id ){
    $pdostatement = $pdo->query("SELECT * FROM abonne WHERE id = '$id'");

    if($pdostatement) {
        $abonne = $pdostatement->fetch(PDO::FETCH_ASSOC);
        echo json_encode($abonne);
    } else {
        echo "Erreur SQL";
    }
} else {
    echo "L'id ne peut pas être nul";
}
