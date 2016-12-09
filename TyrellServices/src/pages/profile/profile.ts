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
   //Initialisation de notre URL : URL + parametres : mail et mdp
   var link = 'http://tyrell.tk/recup_infos_client.php?mail='+localStorage['mail']
    //Déclarations des variables
    var answer;
    var result;
    var code;

    //Requete http en get à l'url initialisé
    this.http.get(link).subscribe(data=>{
        answer = data["_body"];
        console.log(data["_body"]);

        result = parseInt(JSON.parse(answer).result);
        code = parseInt(JSON.parse(answer).code);
        var infos=JSON.parse(answer).infos;
        this.e_mail=localStorage['mail'];
        this.adresse=infos[0]['adresse'] ;
        this.prenom=infos[0]['prenom'];
        this.nom= infos[0]['nom'];
        this.range= infos[0]['perimetre'];
      });
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
