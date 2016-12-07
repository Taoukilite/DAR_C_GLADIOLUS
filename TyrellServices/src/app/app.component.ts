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
    //Initialise les pages en fonction de si l'utilisateur est loggué ou non
    this.logged();
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

      this.getLocation ();
      //Envoie à la bdd tout ça tout ça

      var link = 'http://tyrell.tk/recup_professions.php'
      this.http.get(link)
      .subscribe(data=>{
        let professions = JSON.parse(data["_body"]).professions;
        //On remplit la BDD locale à la clef 'Professions'
        this.storage.set('Professions', professions);
      }, error=>{
        let alert = this.alertCtrl.create({
          title: "Erreur lors du chargement de la base",
          buttons: ['OK']
        });
        alert.present();
        console.log(error);
      });
      link = 'http://tyrell.tk/recup_services.php'
      this.http.get(link)
      .subscribe(data=>{
        let services = JSON.parse(data["_body"]).services;
        console.log(data);
        //On remplit la BDD locale à la clef 'Professions'
        this.storage.set('Services', services);
      }, error=>{
        let alert = this.alertCtrl.create({
          title: "Erreur lors du chargement de la base",
          buttons: ['OK']
        });
        alert.present();
        console.log(error);
      });

    });

  }

  getLocation(){
    Geolocation.getCurrentPosition ({enableHighAccuracy: true, timeout: 5000, maximumAge: 0})
    .then(position=> {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
  }

  logged(){
    if(localStorage['logged'] == 1)
    {
      console.log("logger")
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Services', component: ServicesPage },
        { title: 'Professions', component: ProfessionsPage },
        { title: 'Profil', component: ProfilePage },
      ];
    }
    else{
      console.log("Pas logger")
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Services', component: ServicesPage },
        { title: 'Professions', component: ProfessionsPage },
        { title: 'Login', component: LoginPage },
      ];
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.enable(true);
    this.nav.setRoot(page.component);
    this.menu.close();
  }

}
