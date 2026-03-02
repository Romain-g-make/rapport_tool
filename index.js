const bouton = document.getElementById("monBouton");

bouton.addEventListener("click", function() {
    let baliseNom = document.getElementById('name');
    let nom = baliseNom.value;
    console.log(nom);

    const nomReturn = document.getElementById('nomReturn');
    nomReturn.textContent = nom;
});

