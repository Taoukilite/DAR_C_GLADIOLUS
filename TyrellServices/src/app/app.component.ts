import { Component, ViewChild} from '@angular/core';
import { Nav, Platform, Menu, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SQLite } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ServicesPage } from '../pages/services/services';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Menu) menu: Menu;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public events: Events) {
    this.initializeApp();
    this.logged();

    events.subscribe('logged', () => {
      this.logged();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      localStorage['logged']= 0
    });
  }

  logged(){
    if(localStorage['logged'] == 1)
    {
      console.log("logger")
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Services', component: ServicesPage },
        { title: 'Profil', component: ProfilePage },
      ];
    }
    else{
      console.log("Pas logger")
      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Services', component: ServicesPage },
        { title: 'Login', component: LoginPage },
      ];
    } 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.enable(true);
    this.nav.setRoot(page.component);
    this.menu.close();
  } 
}
