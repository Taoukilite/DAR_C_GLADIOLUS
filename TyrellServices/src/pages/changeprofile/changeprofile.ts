import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Changeprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-changeprofile',
  templateUrl: 'changeprofile.html'
})
export class ChangeprofilePage {

  constructor(public navCtrl: NavController,public params: NavParams){

  }

  ionViewDidLoad() {
    console.log('Hello ChangeprofilePage Page');
  }
  changeName()
  {	
  	console.log('ChangeprofilePage fonction Change Name');
  }
  changePass()
  {
	console.log('Hello ChangeprofilePage fonction Change Pass');
  }
  changeMail()
  {
	console.log('Hello ChangeprofilePage fonction Change Mail');
  }
  changeAddr()
  {
	console.log('Hello ChangeprofilePage fonction Change Addr');
  }
}
