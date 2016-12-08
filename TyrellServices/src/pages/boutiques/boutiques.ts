import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Boutiques page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
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
    // If we navigated to this page, we will have an item available as a nav param
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
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BoutiquesPage, {
      item: item
    });
  }

}
