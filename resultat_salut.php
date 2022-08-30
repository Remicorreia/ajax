<?php
if (!empty($_POST)) {
    $prenom = $_POST["prenom"];
    echo $prenom;
} else {
    echo "Affichage impossible sans valeur données";
}
