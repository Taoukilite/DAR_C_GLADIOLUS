import { Component } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';

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
  adresse:string;
  prenom:string;
  e_mail:string;
  nom:string;

  constructor(public navCtrl: NavController,public params: NavParams,public alertCtrl:AlertController){
    this.nom = this.params.get('nom');
    this.prenom = this.params.get('prenom');
    this.adresse= this.params.get('adresse');
    this.e_mail= this.params.get('mail');
  }

  ionViewDidLoad(){

    console.log('Hello ChangeprofilePage Page');
  }
  changeName()
  {	
  	console.log('ChangeprofilePage fonction Change Name');

     let prompt = this.alertCtrl.create({
      title: 'Changer Nom',
      message: "Entrez votre nouveau nom",
      inputs: [
        {
          name: 'Nnom',
          placeholder: this.nom
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accepter',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }
  changePrenom()
  {

     let prompt = this.alertCtrl.create({
      title: 'Changer le prenom',
      message: "Entrez votre prenom",
      inputs: [
        {
          name: 'Nprenom',
          placeholder: this.prenom
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accepter',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
	console.log('Hello ChangeprofilePage fonction Change Pass');
  }

  changeMail()
  {
     let prompt = this.alertCtrl.create({
      title: 'Changer email',
      message: "Entrez votre nouveau mail",
      inputs: [
        {
          name: 'Nemail',
          placeholder: this.e_mail
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accepter',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
	console.log('Hello ChangeprofilePage fonction Change Mail');
  }
  changeAddr()
  {
    let prompt = this.alertCtrl.create({
      title: 'Changer Adresse',
      message: "Entrez votre nouvelle adresse",
      inputs: [
        {
          name: 'Nemail',
          placeholder: this.adresse
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accepter',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
	console.log('Hello ChangeprofilePage fonction Change Addr');
  }
}
