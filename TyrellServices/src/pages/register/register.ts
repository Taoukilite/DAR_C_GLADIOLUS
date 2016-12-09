import { Component } from '@angular/core';
import { NavController, AlertController, Events} from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { LoginPage } from '..//login/login';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  nav:NavController;

  mail:string;
  mdp:string;
  nom:string;
  prenom:string;
  adresse:string;

  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController,
              public events: Events){
  	this.http = http;
  	this.navCtrl = navCtrl;
    this.nom = this.prenom = this.mail = this.mdp = this.adresse = "";
  }


  submit(){
      //Initialisation de notre URL : URL + parametres : mail et mdp
      var link = 'http://tyrell.tk/inscription_client.php?nom='+this.nom+'&prenom='+this.prenom+'&mail='+this.mail+'&mdp='+this.mdp+'&adresse='+this.adresse;

      //Déclarations des variables
      var answer;
      var result;
      var code;

      if (this.nom =="" || this.prenom =="" || this.mail==""|| this.mdp=="" || this.adresse =="")
      {
        let alert = this.alertCtrl.create({
          title: "Veuillez renseigner tous les champs",
          buttons: ['OK']
        });
        alert.present();
      }
      else
      {
        //Requete http en get à l'url initialisé
        this.http.get(link)
          .subscribe(data=>{
            //On récupère la réponse dans data._body (sous la forme d'un JSON)
            answer = data["_body"];
            //On transforme le JSON en objet et on récupère les différents paramètres
            result = parseInt(JSON.parse(answer).result);
            code = parseInt(JSON.parse(answer).code);

            if (result==0){
              let alert = this.alertCtrl.create({
              title: "Email déjà utilisé",
              buttons: ['OK']
              });
              alert.present();
            }
            if (result==1){
              let alert = this.alertCtrl.create({
                title: "Inscription validée !",
                buttons: ['OK']
              });
              alert.present();
              localStorage['logged'] = 1;
              this.events.publish('logged');
              this.navCtrl.setRoot(HomePage);
              }
          }, error=>{
            let alert = this.alertCtrl.create({
              title: "Erreur lors de la creation du compte",
              buttons: ['OK']
            });
            alert.present();
            console.log(error);
          });
        }
    }

    back(){
      this.navCtrl.pop(LoginPage);
    }
}
