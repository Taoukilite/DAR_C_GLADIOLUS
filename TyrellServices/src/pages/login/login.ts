import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ProPage } from '../pro/pro';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	nav:NavController;
  	
  	constructor(public navCtrl: NavController) {
  		this.navCtrl = navCtrl;
  	}

  	home()
  	{
  		this.navCtrl.setRoot(HomePage);
  	}
 	register()
 	{
 		this.navCtrl.setRoot(RegisterPage);
 	}
 	pro()
 	{
 		this.navCtrl.push(ProPage, "forward");
 	}

}
