import { Component } from '@angular/core';
import { NavController,NavParams, Events } from 'ionic-angular';
import { ChangeprofilePage } from '../changeprofile/changeprofile';
import { Http } from '@angular/http';

import { LoginPage } from '../login/login';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  nav:NavController;
	range: number = 0;

  adresse:string;
  prenom:string;
  e_mail:string;
  nom:string;
  constructor(public navCtrl: NavController, public http: Http,public events: Events,public params: NavParams){


    this.nom="Neige ";
    this.prenom="Jean ";
    this.adresse="Le mur";
    this.e_mail="toto@mail";

   //Initialisation de notre URL : URL + parametres : mail et mdp
   // var link = 'http://tyrell.tk/refresh_profil.php?mail='+this.e_mail
    //Déclarations des variables
    //var answer;
    //var result;
    //var code;

    //Requete http en get à l'url initialisé
    //this.http.get(link)
      //.subscribe(data=>{ 
     //   //On récupère la réponse dans data._body (sous la forme d'un JSON)
      //  answer = data["_body"];

        //On transforme le JSON en objet et on récupère les différents paramètres
       // result = parseInt(JSON.parse(answer).result);
        //console.log(result);
        //code = parseInt(JSON.parse(answer).code);
        //console.log(code);
        //this.nom = (JSON.parse(answer).nom);
        //console.log(code);
        //this.prenom = (JSON.parse(answer).prenom);
        //console.log(code);
        //this.adresse = (JSON.parse(answer).adresse);
        //console.log(code);
    //  });
  }


  change(){
    this.navCtrl.push(ChangeprofilePage,{
      'nom': this.nom,
      'prenom': this.prenom,
      'adresse': this.adresse,
      'mail': this.e_mail
    });
  }

  disconnect(){
    localStorage['logged'] = 0;
    this.events.publish('logged');
    this.navCtrl.setRoot(LoginPage);
  }

}
