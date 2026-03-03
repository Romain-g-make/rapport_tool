const bouton = document.getElementById("boutonValider") as HTMLInputElement;

bouton.addEventListener("click", function() {
    let baliseTitre = document.getElementById('titre') as HTMLInputElement;
    let titre = baliseTitre.value;
    console.log(titre);

    const titreReturn = document.getElementById('titreReturn')!;
    titreReturn.textContent = titre;
});