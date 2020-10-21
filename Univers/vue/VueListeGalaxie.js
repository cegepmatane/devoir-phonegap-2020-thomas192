class VueListeGalaxie {
  constructor() {
    this.html = document.getElementById("html-vue-liste-galaxie").innerHTML;
    this.listeGalaxieDonnee = null;
  }

  initialiserListeGalaxie(listeGalaxieDonnee) {
    this.listeGalaxieDonnee = listeGalaxieDonnee;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listeGalaxie = document.getElementById("liste-galaxie");
    const listeGalaxieItemHtml = listeGalaxie.innerHTML;
    let listeGalaxieHtmlRemplacement = "";

    for (var numeroGalaxie in this.listeGalaxieDonnee) {
      let listeGalaxieItemHtmlRemplacement = listeGalaxieItemHtml;
      listeGalaxieItemHtmlRemplacement =
        listeGalaxieItemHtmlRemplacement.replace("{Galaxie.id}",
        this.listeGalaxieDonnee[numeroGalaxie].id);
      listeGalaxieItemHtmlRemplacement =
        listeGalaxieItemHtmlRemplacement.replace("{Galaxie.nom}",
        this.listeGalaxieDonnee[numeroGalaxie].nom);
      listeGalaxieItemHtmlRemplacement =
        listeGalaxieItemHtmlRemplacement.replace("{Galaxie.id}",
        this.listeGalaxieDonnee[numeroGalaxie].id);
      listeGalaxieHtmlRemplacement += listeGalaxieItemHtmlRemplacement;
    }

    listeGalaxie.innerHTML = listeGalaxieHtmlRemplacement;
  }
}
