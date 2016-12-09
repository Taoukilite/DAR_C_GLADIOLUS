import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProfessionnelsPage } from '../professionnels/professionnels';

/*
  Generated class for the Services page.
  Page qui affiche les différents service disponible dans la boutique
*/
@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

	selectedItem: any;
	icons: string[];
	items: Array<{title: string}>;
  nextPage:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
		//On récupère le paramètre passé en arguement dans la dernière page
		this.selectedItem = navParams.get('item');

    //Cette variable permet de choisir si la prochaine page à afficher sera une
    //page de service ou une page de professionnels
    this.nextPage = ServicesPage;

    //Si c'est la première page de services l'item sera undefined
    //Pour le reconnaitre on lui attribuera donc la valeur null
    if (this.selectedItem == undefined){
      this.selectedItem = Object;
      this.selectedItem['title'] = null;
    }
    /*
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
		'american-football', 'boat', 'bluetooth', 'build'];*/

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
      /*Dans cette partie on va regarder si la prochaine page sera une page où
        on affichera des sous-services ou bien des professionnels*/
      let k = 0;
      //On parcourt tous les services pour regarder leurs pères
      for (let i=0; i<val.length; i++){
        //On parcourt les services de la page courante
        for (let j = 0; j < this.items.length; j++){
          //Et enfin o regarde si des services de la page courante sont pères
          //d'autres services
          if (val[i]['nomPere'] == this.items[j].title){
            //Si c'est le cas on incrémente k
            k++;
          }
        }
      }
      //Si k=0 il n'a pas été incrémenté ça veut dire que la prochaine page sera
      //une page où on affiche les professionnels qui correspondent à une service
      //de la page courante
      if (k==0){
        this.nextPage = ProfessionnelsPage;
      }
    })
	}

	itemTapped(event, item) {
		this.navCtrl.push(this.nextPage, {
			item: item,
      fromPage: 'ServicePage'
		});
	}

}
