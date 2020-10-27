class Application {
  constructor(window, galaxieDAO, vueListeGalaxie, vueAjouterGalaxie, vueGalaxie, vueModifierGalaxie) {
    this.window = window;
    this.galaxieDAO = galaxieDAO;
    this.vueListeGalaxie = vueListeGalaxie;
    this.vueAjouterGalaxie = vueAjouterGalaxie;
    this.vueGalaxie = vueGalaxie;
    this.vueModifierGalaxie = vueModifierGalaxie;

    // Equivalent de function(galaxie){this.actionAjouterGalaxie(galaxie)}
    this.vueAjouterGalaxie.initialiserActionAjouterGalaxie(galaxie =>
    this.actionAjouterGalaxie(galaxie));

    this.vueModifierGalaxie.initialiserActionModifierGalaxie(galaxie =>
    this.actionModifierGalaxie(galaxie));

    document.addEventListener('deviceready', ()=>this.intialiserNavigation(), false);

  }

  intialiserNavigation() {
    console.log("Application-->initialiserNavigation()");

    // Equivalent de function(){this.naviguer()}
        this.window.addEventListener("hashchange", () => this.naviguer());

    setTimeout(()=>this.naviguer(), 3000);
  }

  naviguer() {
    let hash = window.location.hash;

    if (!hash) {
      this.vueListeGalaxie.initialiserListeGalaxie(this.galaxieDAO.lister());
      this.vueListeGalaxie.afficher();
    } else if (hash.match(/^#ajouter-galaxie/)) {
      this.vueAjouterGalaxie.afficher();
    }else if (hash.match(/^#modifier-galaxie\/([0-9]+)/)) {
      let navigation = hash.match(/^#modifier-galaxie\/([0-9]+)/);
      let idGalaxie = navigation[1];
      this.vueModifierGalaxie.initialiserGalaxie(this.galaxieDAO.lister()[idGalaxie]);
      this.vueModifierGalaxie.afficher();
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

  actionModifierGalaxie(galaxie) {
    this.galaxieDAO.modifier(galaxie);
    this.window.location.hash = "#";
  }

}

new Application(window, new GalaxieDAO(), new VueListeGalaxie(), new VueAjouterGalaxie(), new VueGalaxie(), new VueModifierGalaxie());
