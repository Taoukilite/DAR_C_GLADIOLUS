import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';

/*
  Generated class for the Partenariat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-partenariat',
  templateUrl: 'partenariat.html'
})
export class PartenariatPage {
  nav:NavController;
  
  mail:string;
  mdp:string;
  nom:string;
  prenom:string;
  adresse:string;

  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController){
  	this.http = http;
  	this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  submit(){

      //Initialisation de notre URL : URL + parametres : mail et mdp
      var link = 'http://tyrell.tk/inscription_client.php?nom='+this.nom+'&prenom='+this.prenom+'&mail='+this.mail+'&mdp='+this.mdp+'&adresse='+this.adresse
      //Déclarations des variables
      var answer;''
      var result;
      var code;

      //Requete http en get à l'url initialisé
      this.http.get(link)
        .subscribe(data=>{ 
          //On récupère la réponse dans data._body (sous la forme d'un JSON)
          answer = data["_body"];

          //On transforme le JSON en objet et on récupère les différents paramètres
          result = parseInt(JSON.parse(answer).result);
          console.log(result);
          code = parseInt(JSON.parse(answer).code);
          console.log(code);

          if (result==0){
            let alert = this.alertCtrl.create({
            title: "Email deja prise,Reesayer",
            buttons: ['OK']
            });
            alert.present();
          }
          if (result==1){
            this.navCtrl.setRoot(HomePage);
            localStorage['logged'] = 1;
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
