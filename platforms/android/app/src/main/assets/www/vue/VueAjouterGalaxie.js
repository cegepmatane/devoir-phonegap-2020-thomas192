class VueAjouterGalaxie {
  constructor() {
    this.html = document.getElementById("html-vue-ajouter-galaxie").innerHTML;
    this.actionAjouterGalaxie = null;
  }

  initialiserActionAjouterGalaxie(actionAjouterGalaxie) {
    this.actionAjouterGalaxie = actionAjouterGalaxie;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",
    evenement => this.enregistrer(evenement));
  }

  enregistrer(evenement) {
    evenement.preventDefault();

    let nom = document.getElementById("galaxie-nom").value;
    let constellation = document.getElementById("galaxie-constellation").value;
    let description = document.getElementById("galaxie-description").value;
    this.actionAjouterGalaxie(new Galaxie(null, nom, constellation, description));
  }
}
