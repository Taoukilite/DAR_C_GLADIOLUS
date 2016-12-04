import { Component} from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { SQLite } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  data;

  	constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) 
    {
  		this.navCtrl = navCtrl;

      this.data = {};
      this.data.mail = '';
      this.data.mdp = '';
      this.http = http;
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
  
    submit()
    {
      var link = 'http://tyrell.tk/check_credentials.php';
      this.data.mail = "manchot.coucou@tyrell.tk";
      this.data.mdp = "coucoucmoi";

      

      this.http.get(link)
        .subscribe(data =>{ 
          let alert = this.alertCtrl.create({
            title: 'ca marche',
            subTitle:"",
            buttons: ['OK']
          });
          alert.present();
        }, error=> {
          let alert = this.alertCtrl.create({
            title: 'ca marche pas',
            subTitle: error,
            buttons: ['OK']
          });
          alert.present();
        });
    }
}
