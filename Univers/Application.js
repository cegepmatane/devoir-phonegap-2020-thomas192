class Application {
  constructor(window, galaxieDAO, vueListeGalaxie, vueAjouterGalaxie, vueGalaxie) {
    this.window = window;
    this.galaxieDAO = galaxieDAO;
    this.vueListeGalaxie = vueListeGalaxie;
    this.vueAjouterGalaxie = vueAjouterGalaxie;
    this.vueGalaxie = vueGalaxie;

    // Equivalent de function(galaxie){this.actionAjouterGalaxie(galaxie)}
    this.vueAjouterGalaxie.initialiserActionAjouterGalaxie(galaxie =>
    this.actionAjouterGalaxie(galaxie));

    // Equivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () => this.naviguer());

    this.naviguer();
  }

  naviguer() {
    let hash = window.location.hash;

    if (!hash) {
      this.vueListeGalaxie.initialiserListeGalaxie(this.galaxieDAO.lister());
      this.vueListeGalaxie.afficher();
    } else if (hash.match(/^#ajouter-galaxie/)) {
      this.vueAjouterGalaxie.afficher();
    } else {
      let navigation = hash.match(/^#galaxie\/([0-9]+)/);
      let idGalaxie = navigation[1];
      this.vueGalaxie.initialiserGalaxie(this.galaxieDAO.lister()[idGalaxie]);
      this.vueGalaxie.afficher();
    }
  }

  actionAjouterGalaxie(galaxie) {
    this.galaxieDAO.ajouter(galaxie);
    this.window.location.hash = "#";
  }

}

new Application(window, new GalaxieDAO(), new VueListeGalaxie(), new VueAjouterGalaxie(), new VueGalaxie());
