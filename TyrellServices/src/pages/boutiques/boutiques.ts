import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Professionnels page.
  Page qui affiche l'ensemble des boutiques de l'entreprise TyrellServices
*/

@Component({
  selector: 'page-boutiques',
  templateUrl: 'boutiques.html'
})
export class BoutiquesPage {

  selectedItem: any;
  items: Array<{title: string, icon: string}>;
  icon:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
		this.selectedItem = navParams.get('item');
    this.icon = 'home';
		this.items = [];
    
    storage.get('Boutiques').then((val) => {
       for (let i = 0; i < val.length; i++) {
         this.items.push({
             title: val[i]['nomBoutique'],
             icon: this.icon
          });
        }
      })
    }



  itemTapped(event, item) {
    /*this.navCtrl.push(BoutiquesPage, {
      item: item
    });*/
  }

}
