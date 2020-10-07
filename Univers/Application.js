class Application {
  constructor(window, galaxieDAO, vueListeGalaxie) {
    this.window = window;
    this.galaxieDAO = galaxieDAO;

    this.vueListeGalaxie = vueListeGalaxie;

    this.vueListeGalaxie.initialiserListeGalaxie(this.galaxieDAO.lister());
    this.vueListeGalaxie.afficher();
  }

}

new Application(window, new GalaxieDAO(), new VueListeGalaxie());
