class GalaxieDAO {
  constructor() {
    this.listeGalaxie = [
      {id:0, nom:"Voie Lactée", constellation:"Sagittaire", description:"La Voie lactée, aussi nommée la Galaxie (avec une majuscule), est une galaxie spirale barrée qui comprend de 200 à 400 milliards d'étoiles et au minimum 100 milliards de planètes. Son diamètre est estimé à environ 100 000 à 120 000 années-lumière, voire à 150 000 ou à 200 000 années-lumière bien que le nombre d'étoiles au-delà de 120 000 années-lumière soit très faible. Elle et son cortège de galaxies satellites font partie du Groupe local, lui-même rattaché au superamas de la Vierge appartenant lui-même à Laniakea. Le Système solaire, qui en fait partie, se situe à environ 27 000 années‌-lumière du centre de la Voie lactée, lequel est constitué d'un trou noir supermassif."},
      {id:1, nom:"Galaxie d\'Andromède", constellation:"Andromède", description:"La galaxie d'Andromède, également identifiée sous les numéros M31 dans le Catalogue de Messier et NGC 224, est une galaxie spirale située à environ 2,55 millions d'années-lumière du Soleil, dans la constellation d'Andromède. Appelée grande nébuleuse d’Andromède jusqu'à ce que sa vraie nature ait été reconnue dans les années 1920, la galaxie d'Andromède est la galaxie spirale la plus proche de la Voie lactée (toutes classes confondues, la galaxie la plus proche est la naine du Grand Chien) et le plus grand membre du Groupe local d'une soixantaine de galaxies individuelles dont toutes deux font partie. D'un diamètre d'environ 220 000 années-lumière, elle contiendrait environ mille milliards d'étoiles."},
      {id:2, nom:"Galaxie du Triangle", constellation:"Triangle", description:"La galaxie du Triangle, également appelée M33, est une galaxie spirale de type SA(s)cd appartenant au Groupe local et située dans la constellation du Triangle. Sans doute satellite de la galaxie d'Andromède, sa distance au Soleil est assez mal connue. Les mesures actuelles donnent une distance allant de environ 0,73 Mpc (∼2,38 millions d'a.l.) à environ 0,94 Mpc (∼3,07 millions d'a.l.). C'est la troisième galaxie la plus massive du Groupe local après la galaxie d'Andromède et la Voie lactée, et devant le Grand Nuage de Magellan ; avec une masse évaluée à 60 milliards de masses solaires, elle ne représente que 5 % de la masse de la galaxie d'Andromède, la matière noire constituant près de 85 % de cette masse."}
    ]
  }

  lister() {
    for (let position in this.listeGalaxie) {
      let galaxie = new Galaxie(this.listeGalaxie[position].id,
                                this.listeGalaxie[position].nom,
                                this.listeGalaxie[position].constellation,
                                this.listeGalaxie[position].description);
      this.listeGalaxie[galaxie.id] = galaxie;
    }
    return this.listeGalaxie;
  }

  ajouter (galaxie) {
    if (this.listeGalaxie.length > 0)
      galaxie.id = this.listeGalaxie[this.listeGalaxie.length-1].id + 1.
    else
      galaxie.id = 0;

    this.listeGalaxie[galaxie.id] = galaxie;
  }
}
