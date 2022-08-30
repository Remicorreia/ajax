<?php
if( !empty($_POST["prenom"]) ){
   echo "Bonjour " . strtoupper($_POST["prenom"]) . " et bienvenue parmi nous";
} else {
    echo "pas de prénom, pas de salutation !";
}