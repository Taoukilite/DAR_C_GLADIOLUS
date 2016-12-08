import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Services page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

	selectedItem: any;
	icons: string[];
	items: Array<{title: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
		//On récupère le paramètre passé en arguement dans la dernière page
		this.selectedItem = navParams.get('item');
    //Si c'est la première page de services l'item sera undefined
    //Pour le reconnaitre on lui attribuera donc la valeur null
    if (this.selectedItem == undefined){
      this.selectedItem = Object;
      this.selectedItem['title'] = null;
    }
		// Let's populate this page with some filler content for funzies
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
		'american-football', 'boat', 'bluetooth', 'build'];

		this.items = [];
    //On récupère d'abord la liste des services
    storage.get('Services').then((val)=>{
      //On parcourt la liste des services
      for (let i = 0; i < val.length; i++) {
        //Ici 2 cas de figures :
        // - Le service n'a pas de père (nomPere=null)
        // - Le service est un sous-service, il n'est alors pas affiché dans la
        //  première page des services mais seulement quand on clique sur son
        //  service père 
        if (val[i]['nomPere'] == this.selectedItem['title'])
          this.items.push({
  			    title: val[i]['nomService']
  		  	});
      }
    })
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		this.navCtrl.push(ServicesPage, {
			item: item
		});
	}

}
