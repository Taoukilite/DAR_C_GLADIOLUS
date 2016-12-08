import { Component, ViewChild} from '@angular/core';
import { Nav, Platform, Menu, Events, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen, Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ServicesPage } from '../pages/services/services';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ProfessionsPage } from '../pages/professions/professions';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Menu) menu: Menu;

  //RootPage ==> LoginPage
  rootPage: any = LoginPage;
  //Tableau contenant les pages
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public events: Events, public http: Http,
              public alertCtrl: AlertController, public storage:Storage) {

    //Requete http
    this.http = http;
    //Initialisation de l'app
    this.initializeApp();
    //Création de l'event qui va permettre de mettre à jour la liste des pages
    //en fonction de si l'utilisateur est connecté ou pas
    events.subscribe('logged', () => {
      this.logged();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      //Initialisation de la variable pour la gestion de la connexion
      localStorage['logged']= 0;
      //Initialise les pages en fonction de si l'utilisateur est loggué ou non
      this.logged();

      //Mise à jours BDD, seulement si nécessaire
      this.majDB();

    });

  }

  /*Fonction qui va permettre plusieurs choses :
    - Vérifier la boutique à laquelle l'application est reliée en regardant la
      position de l'utilisateur
    - Vérifier la version de la bdd locale
    - Et mettre à jours cette BDD si nécessaire
  */
  majDB(){
    //Tout d'abord on récupère la position de l'utilisateur
    Geolocation.getCurrentPosition ({enableHighAccuracy: true, timeout: 5000, maximumAge: 0})
    .then(position=> {
      //On récupère les positions de l'utilisateur
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      //Ensuite on va envoyer un requète à la BDD globale pour obtenir l'adresse
      //de la bdd de la boutique la plus proche
      let link = 'http://tyrell.tk/boutique.php?latitude='+lat+'&longitude='+long;

      //On envoie la requète au serveur
      this.http.get(link)
      .subscribe(data=>{
        //On récupère les données de la boutique la plus proche
        let boutique = JSON.parse(data["_body"]).boutique;
        //On regarde quelle boutique est déjà présente la BDD
        this.storage.get('Boutique').then((val) => {
          //On compare avec la boutique actuelle
          if (val['nomBoutique'] == null || val['nomBoutique'] != boutique['nomBoutique']){
            //On change le nom de la boutique si nécessaire
            this.storage.set('Boutique', boutique);
            //Vu que ce n'était pas la même boutique on met directement à jours la bdd
            //Récup des professions
            link = 'http://'+boutique['urlBoutique']+'/recup_professions.php';
            this.http.get(link)
            .subscribe(data=>{
              let professions = JSON.parse(data["_body"]).professions;
              this.storage.set("Professions", professions);
            }, error=>{
              this.alert("Erreur lors du chargement des professions");
              console.log(error);
            });

            //Récup des services
            link = 'http://'+boutique['urlBoutique']+'/recup_services.php';
            this.http.get(link)
            .subscribe(data=>{
              let services = JSON.parse(data["_body"]).services;
              this.storage.set("Services", services);
            }, error=>{
              this.alert("Erreur lors du chargement des services");
              console.log(error);
            });
          }
          //Cas où c'était la même boutique dans la bdd
          else
          {
            //On va intéroger le serveur sur la version de sa bdd
            //On définit le lien pour la bdd de la boutique
            link = 'http://'+boutique['urlBoutique']+'/version.php';
            this.http.get(link)
            .subscribe(data=>{
              //On récupère la version de la boutique
              let version = JSON.parse(data["_body"]).version;
              //On regarde la version actuelle de la bdd
              this.storage.get('Version').then((val) => {
                //Si elle n'est pas à jours on la met à jours
                if (val==null || val != version){
                  console.log("MAJ BDD");
                  //On maj la version
                  this.storage.set("Version", version);
                  //Récup des professions
                  link = 'http://'+boutique['urlBoutique']+'/recup_professions.php';
                  this.http.get(link)
                  .subscribe(data=>{
                    let professions = JSON.parse(data["_body"]).professions;
                    this.storage.set("Professions", professions);
                  }, error=>{
                    this.alert("Erreur lors du chargement des professions");
                    console.log(error);
                  });

                  //Récup des services
                  link = 'http://'+boutique['urlBoutique']+'/recup_services.php';
                  this.http.get(link)
                  .subscribe(data=>{
                    let services = JSON.parse(data["_body"]).services;
                    this.storage.set("Services", services);
                  }, error=>{
                    this.alert("Erreur lors du chargement des services");
                    console.log(error);
                  });
                }
              }, error=>{
                this.alert("Erreur lors de la récupération de la version de la base");
                console.log(error);
              });
            }, error=>{
              this.alert("Erreur lors du chargement de la version de la base");
              console.log(error);
            });
          }
        }, error=>{
          this.alert("Erreur lors de la récupération de la boutique");
          console.log(error);
        });
      }, error=>{
        this.alert("Erreur lors du chargement de la boutique");
        console.log(error);
      });
    });
  }

  alert(title){
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }
  //Fonction qui va modifier la liste des pages en fonction de si l'utilisateur
  //est connecté ou non, notamment pour remplacer les pages Profil et Login
  logged(){
    if(localStorage['logged'] == 1)
    {
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Services', component: ServicesPage },
        { title: 'Professions', component: ProfessionsPage },
        { title: 'Profil', component: ProfilePage },
      ];
    }
    else{
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Services', component: ServicesPage },
        { title: 'Professions', component: ProfessionsPage },
        { title: 'Login', component: LoginPage },
      ];
    }
  }

  //Permet de désigner une nouvelle page en tant que root et d'ouvrir cette page
  openPage(page) {
    this.menu.enable(true);
    this.nav.setRoot(page.component);
    this.menu.close();
  }

}
