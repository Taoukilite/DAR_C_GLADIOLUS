import { Component} from '@angular/core';
import { NavController, AlertController, Events } from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ProPage } from '../pro/pro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	nav:NavController;

  mail:string;
  mdp:string;

  	constructor(public navCtrl: NavController, public http: Http,
                public alertCtrl: AlertController, public events: Events){
  		this.navCtrl = navCtrl;
      this.http = http;
  	}

  	home(){
  		this.navCtrl.setRoot(HomePage);
  	}
   	register(){
   		this.navCtrl.push(RegisterPage, "forward");
   	}
   	pro(){
   		this.navCtrl.push(ProPage, "forward");
   	}

    submit()
    {
      //Initialisation de notre URL : URL + parametres : mail et mdp
      var link = 'http://tyrell.tk/check_credentials.php?mail='
                  +this.mail+'&mdp='+this.mdp
      //Déclarations des variables
      var answer;
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

          if (result==0){
            let alert = this.alertCtrl.create({
            title: "Email ou mot de passe invalide",
            buttons: ['OK']
            });
            alert.present();
          }
          if (result==1){
            localStorage['logged'] = 1;
            localStorage['mail'] = this.mail;
            this.events.publish('logged');
            this.navCtrl.setRoot(HomePage);
          }
        }, error=>{
          let alert = this.alertCtrl.create({
            title: "Email ou mot de passe invalide",
            buttons: ['OK']
          });
          alert.present();
          console.log(error);
        });
    }
}
