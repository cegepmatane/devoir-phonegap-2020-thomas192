class Application {
  constructor(window, vueListeGalaxie) {
    this.window = window;
    this.vueListeGalaxie = vueListeGalaxie;
    this.vueListeGalaxie.afficher();
  }

}

new Application(window, new VueListeGalaxie());
