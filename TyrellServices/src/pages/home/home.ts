import { Component, ViewChild } from '@angular/core';
import { NavController, Searchbar, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProfessionnelsPage } from '../professionnels/professionnels';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Searchbar) sb: Searchbar;
  private showList: boolean;
  searchQuery: string = '';
  item: Array<{title: string, fromPage: string}>;
  items: Array<{title: string, fromPage: string}>;
  service:string;
  selectedItem: any;

  constructor(public navCtrl: NavController, public storage:Storage,
              public alertCtrl: AlertController) {
    this.showList = false;

    //Initialisation des items
    this.item=[];
    //On récupère les professions
    this.storage.get('Professions').then((val)=>{
      for (let i=0; i<val.length; i++){
        this.item.push({
          title: val[i]['nomProfession'],
          fromPage: 'ProfessionPage'
        });
      }
    }, error=>{
      this.alert("Erreur lors de la récupération des professions");
      console.log(error);
    });
    //On récupère les services
    this.storage.get('Services').then((val)=>{
      for (let i=0; i<val.length; i++){
        this.item.push({
          title: val[i]['nomService'],
          fromPage: 'ServicePage'
        });
      }
    }, error=>{
      this.alert("Erreur lors de la récupération des professions");
      console.log(error);
    });
  }
  alert(title){
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

  initializeItems() {
    this.items = this.item;
  }

  listClick(event, item) {
  	this.navCtrl.push(ProfessionnelsPage, {
   		 item: item,
       fromPage: item.fromPage
   	});
  }

  getItems(ev) {
    // Show the results
    this.showList = false;

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
	  this.showList = true;
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(ev) {
    // Show the results
    this.showList = false;

    // Reset the field
    ev.target.value = '';
  }
}
