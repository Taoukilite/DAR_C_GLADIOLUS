import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from 'ionic-native';
import { Http } from '@angular/http';

/*
  Generated class for the Professionnels page.
  Page qui affiche les professionnels en rapport avec un service ou une profession
*/
@Component({
  selector: 'page-professionnels',
  templateUrl: 'professionnels.html'
})
export class ProfessionnelsPage {

  selectedItem: Object;
  items: Array<{title: string, note:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage,
              public http: Http, public alertCtrl: AlertController) {
    //Requete http
    this.http = http;
    //On récupère les données de la page précèdente
    //Notamment l'item sélectionné ainsi que la page depuis laquelle on vient
    this.selectedItem = Object;
    this.selectedItem['item'] = navParams.get('item');
    this.selectedItem['fromPage'] = navParams.get('fromPage');

    this.items = [];

    this.recupProfessionnels();
  }
  itemTapped(event, item) {
    this.alert("Poke !");
    /*this.navCtrl.push(ProfessionsPage, {
      item: item
    });*/
  }
  alert(title){
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }
  recupProfessionnels(){
    //Tout d'abord on récupère la position de l'utilisateur
    Geolocation.getCurrentPosition ({enableHighAccuracy: true, timeout: 5000, maximumAge: 0})
    .then(position=> {
      //On récupère les positions de l'utilisateur
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      //On récupère l'url de la boutique à laquelle on est rattaché dans la bdd locale
      this.storage.get('Boutique').then((boutique) => {
        let phpFunction;
        let id;
        let link;
        //Si on vient de la page profession
        if (this.selectedItem['fromPage'] == 'ProfessionPage'){
          phpFunction = '/professions_professionnel.php?idProfession=';
          this.storage.get('Professions').then((val) => {
            let i = 0;
            //Ici on va chercher l'id de la profession
            while(val[i]['nomProfession'] != this.selectedItem['item'].title && i<val.length){
              i++;
            }
            id = val[i]['idProfession'];
            //Distance max pas encore géré, on la met par défaut à 20km
            link = 'http://'+boutique['urlBoutique']+phpFunction+id+'&latitude='+lat
                      +'&longitude='+long+'&distanceMax='+20;
            this.http.get(link)
            .subscribe(data=>{
              let professionnels = JSON.parse(data["_body"]).professionnels;
              this.items = professionnels;
            }, error=>{
              this.alert("Erreur lors du chargement des professionnels");
              console.log(error);
            });
          }, error=>{
            this.alert("Erreur lors de la récupération des professions");
            console.log(error);
          });
        }
        else if (this.selectedItem['fromPage'] == 'ServicePage'){
          phpFunction = '/professionnels_service.php?idService=';
          this.storage.get('Services').then((val) => {
            let i = 0;
            //Ici on va chercher l'id de la profession
            while(val[i]['nomService'] != this.selectedItem['item'].title && i<val.length){
              i++;
            }
            id = val[i]['idService'];
            //Distance max pas encore géré, on la met par défaut à 20km
            link = 'http://'+boutique['urlBoutique']+phpFunction+id+'&latitude='+lat
                      +'&longitude='+long+'&distanceMax='+20;
            this.http.get(link)
            .subscribe(data=>{
              let professionnels = JSON.parse(data["_body"]).professionnels;
              this.items = professionnels;
            }, error=>{
              this.alert("Erreur lors du chargement des professionnels");
              console.log(error);
            });
          }, error=>{
            this.alert("Erreur lors de la récupération des professions");
            console.log(error);
          });
        }
      }, error =>{
        this.alert("Erreur lors du chargement de la boutique");
        console.log(error);
      });
    });
  }
}
