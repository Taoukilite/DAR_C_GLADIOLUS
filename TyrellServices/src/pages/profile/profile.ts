import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ChangeprofilePage } from '../changeprofile/changeprofile';

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
	text: number = 0;
  
  constructor(public navCtrl: NavController, public events: Events) {}


  change(){
    this.navCtrl.push(ChangeprofilePage);
  }

  disconnect(){
    localStorage['logged'] = 0;
    this.events.publish('logged');
    this.navCtrl.setRoot(LoginPage);
  }

}
