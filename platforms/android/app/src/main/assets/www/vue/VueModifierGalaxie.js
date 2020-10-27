class VueModifierGalaxie {
  constructor() {
    this.html = document.getElementById("html-vue-modifier-galaxie").innerHTML;
    this.galaxie = null;
    this.actionAjouterGalaxie = null;
  }

  initialiserGalaxie(galaxie) {
    this.galaxie = galaxie;
  }

  initialiserActionModifierGalaxie(actionModifierGalaxie) {
    this.actionModifierGalaxie = actionModifierGalaxie;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("galaxie-nom").value = this.galaxie.nom;
    document.getElementById("galaxie-constellation").value = this.galaxie.constellation;
    document.getElementById("galaxie-description").value = this.galaxie.description;
    document.getElementById("formulaire-modifier").addEventListener("submit",
    evenement => this.enregistrer(evenement));
  }

  enregistrer(evenement) {
    evenement.preventDefault();

    let nom = document.getElementById("galaxie-nom").value;
    let constellation = document.getElementById("galaxie-constellation").value;
    let description = document.getElementById("galaxie-description").value;
    this.actionModifierGalaxie(new Galaxie(this.galaxie.id, nom, constellation, description));
  }
}
