const bouton = document.getElementById("boutonValider");

bouton.addEventListener("click", function() {
    let baliseTitre = document.getElementById('titre');
    let titre = baliseTitre.value;
    console.log(titre);

    let baliseInfo = document.getElementById('information');
    let info = baliseInfo.value;
    console.log(info);

    const {jsPDF} = window.jspdf;
    const doc = new jsPDF();

    doc.text(40, 20, "Titre :");
    doc.text(100, 20, titre);
    
    doc.text(40, 40, "Information :");
    doc.text(100, 40, info);

    doc.save("test.pdf")
});

