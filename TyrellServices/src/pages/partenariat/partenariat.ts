import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login'
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
    console.log('Hello PartenariatPage Page');
  }

  submit(){

  }
  back()
  {
    this.navCtrl.pop(PartenariatPage);
  }
}
