import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from 'ionic-native';
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

  private showList: boolean;
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
    this.showList = false;
  }

  initializeItems() {
    this.items = [
      'Jean-Michel Plombier',
      'J adore les frites',
      'tkt',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
];
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
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
