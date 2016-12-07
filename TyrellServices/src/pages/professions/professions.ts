import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Professions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-professions',
  templateUrl: 'professions.html'
})
export class ProfessionsPage {

  selectedItem: any;
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    // If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');

		this.items = [];
    storage.get('Professions').then((val) => {
       for (let i = 0; i < val.length; i++) {
         this.items.push({
             title: val[i]['nomProfession']
          });
        }
      })
    }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProfessionsPage, {
      item: item
    });
  }


}
