window.addEventListener("load", () => {
    document.querySelector("#id").addEventListener("input", (evt) => {

        let id = document.querySelector("#id").value;
        const xhttp = new XMLHttpRequest();

        let url = "livre_by_id.php?id=" + id;
        xhttp.open("GET", url, true);

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //console.log(xhttp.text);
                document.querySelector(".fetch_livre").innerHTML = xhttp.responseText;
            }
        }
        xhttp.send();

    });
});