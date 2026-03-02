const bouton = document.getElementById("monBouton") as HTMLInputElement;

bouton.addEventListener("click", function() {
    let baliseNom = document.getElementById('name') as HTMLInputElement;
    let nom = baliseNom.value;
    console.log(nom);

    const nomReturn = document.getElementById('nomReturn')!;
    nomReturn.textContent = nom;
});