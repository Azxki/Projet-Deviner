
let choixOrdi = Math.floor((Math.random() * 100) + 1),
    choixUtilisateur;

console.log(choixOrdi);

let fin = true;
choixUtilisateur = prompt("choisissez un nombre entre 0 et 100");

while (choixOrdi != choixUtilisateur) {

    if (choixUtilisateur < choixOrdi)
        alert("plus grand");
    else
        alert("plus petit");
50
    choixUtilisateur = prompt("choisissez un nombre entre 0 et 100");
}

alert("vous avez trouvé le bon chiffre bravo !");