import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProfessionnelsPage } from '../professionnels/professionnels';

/*
  Generated class for the Professions page.
  Page qui affiche les professions disponibles dans la boutique la plus proche
*/
@Component({
  selector: 'page-professions',
  templateUrl: 'professions.html'
})
export class ProfessionsPage {

  selectedItem: any;
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
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
    this.navCtrl.push(ProfessionnelsPage, {
      item: item,
      fromPage: 'ProfessionPage'
    });
  }


}
