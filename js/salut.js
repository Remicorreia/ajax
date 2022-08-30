window.addEventListener("load", () => {
    document.querySelector("#btSaluer").addEventListener("click", (evt) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState == 4 && xhttp.status == 200){
                document.querySelector("#resultat").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("POST", "salut.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let parametre = "prenom=";
        let valeur = document.querySelector("#prenom").value;
        parametre += valeur;
        xhttp.send(parametre);
    });
});