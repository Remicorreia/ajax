/**
 * L'évènement "load" de l'objet 'window' permet de retarder l'exécution du js. Le script ne
 * sera exécuté qu'une fois toute la page HTML chargée (lorsque le DOM sera complet). Sinon
 * on ne peut pas récupérer des éléments de la page avec 'getElementById' ou 'querySelector'
 */
window.addEventListener("load", () => {
    document.querySelector("#action").addEventListener("click", (evt) => {
        // class XMLHttpRequest : classe qui permet de faire des appels AJAX
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status == 200){
                document.querySelector("#resultat").innerHTML = xhttp.responseText;
            } 
        }
        xhttp.open("GET", "js/fichier.txt", true);
        xhttp.send();

    });    
});


