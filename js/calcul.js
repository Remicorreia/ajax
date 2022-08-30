window.addEventListener("load", () => {
    document.querySelector("form").addEventListener("submit", (evt) => {
        evt.preventDefault();  // j'annule le comportement par défaut de l'évènement (submit)
        const xhttp = new XMLHttpRequest;
        /**
         * la méthode 'onreadystatechange' permet de définir ce qu'il va se passer quand la requête
         * AJAX sera envoyée
         */
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                document.querySelector("#resultat").value = xhttp.responseText;
            }
        };

        // avec les données dans l'url
        nb1 = document.querySelector("[name='nb1']").value;
        nb2 = document.querySelector("[name='nb2']").value;
        let url = "resultat_calcul.php?nb1=" + nb1 + "&nb2=" + nb2;
        
       
        // nb1 = document.querySelector("[name='nb1']").value;
        // nb2 = document.querySelector("[name='nb2']").value;
        // let parametres = "nb1=" + nb1 + "&nb2=" + nb2;
        // let url = "resultat_calcul.php";

        xhttp.open("GET", url);
        xhttp.send();
    });
})
