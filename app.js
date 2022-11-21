textupdate("Kykkian, ", "Mbappé")
function textupdate(prenom, nom) {

    let element = document.getElementById("p1");
    element.innerText = prenom + nom;
    console.log("Hello" + "" +prenom + "" +nom);
}
text2("Lionel, ", "Messi");
function text2(prenom2, nom2) {
    let element2 = document.getElementById("p2");
    element2.innerText = prenom2 + nom2;
}

