import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login'

import { PartenariatPage } from '../partenariat/partenariat'


/*
  Generated class for the Pro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pro',
  templateUrl: 'pro.html'
})
export class ProPage {

	nav:NavController;
  mail:string;
  mdp:string;	

  	constructor(public navCtrl: NavController,public http: Http, 
                public alertCtrl: AlertController) {
  		this.navCtrl = navCtrl;
      this.http = http;
  	}

 	back()
 	{
 		this.navCtrl.pop(LoginPage);
 	}
  submit_pro(){
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
            console.log(code);

            if (result==0){
              let alert = this.alertCtrl.create({
              title: "Email ou mot de passe invalide",
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
              title: "Email ou mot de passe invalide",
              buttons: ['OK']
            });
            alert.present();
            console.log(error);
          }); 
  }
  partenariat(){
    this.navCtrl.push(PartenariatPage, "forward");
  }
}
