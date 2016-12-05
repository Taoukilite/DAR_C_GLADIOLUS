import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Http } from '@angular/http';

import { LoginPage } from '../login/login'


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
  	
  	constructor(public navCtrl: NavController) {
  		this.navCtrl = navCtrl;
  	}

 	back()
 	{
 		this.navCtrl.pop(LoginPage);
 	}
  submit_pro(){

  }
  partenariat(){

  }

}
