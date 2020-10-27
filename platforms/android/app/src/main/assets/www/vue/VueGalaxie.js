class VueGalaxie {
  constructor () {
    this.html = document.getElementById("html-vue-galaxie").innerHTML;
    this.galaxie = null;
  }

  initialiserGalaxie(galaxie) {
    this.galaxie = galaxie;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("galaxie-nom").innerHTML = this.galaxie.nom;
    document.getElementById("galaxie-constellation").innerHTML = this.galaxie.constellation;
    document.getElementById("galaxie-description").innerHTML = this.galaxie.description;
  }
}
