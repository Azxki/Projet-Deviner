
let choixOrdi = Math.floor((Math.random() * 100) + 1),
    choixUtilisateur;

let grand = "Nombre plus grand";
let petit = "Nombre plus petit";

let compteur = 0;

console.log(choixOrdi);

let fin = true;
choixUtilisateur = prompt("Devinez un nombre entre 0 et 100");

while (choixOrdi != choixUtilisateur) {
    compteur++;

    if (choixUtilisateur < choixOrdi)
        alert(grand);
    else
        alert(petit);

    alert("Vous avez " + compteur + " tentative.")

    if (compteur === 10)
        alert("Tu as perdu !");

    choixUtilisateur = prompt("choisissez un nombre entre 0 et 100");


}

alert("vous avez trouvé le bon chiffre/nombre bravo !");