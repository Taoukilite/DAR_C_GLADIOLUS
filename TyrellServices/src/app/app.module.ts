import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ServicesPage } from '../pages/services/services';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProPage } from '../pages/pro/pro';
import { ProfilePage } from '../pages/profile/profile';
import { PartenariatPage } from '../pages/partenariat/partenariat';
import { ChangeprofilePage } from '../pages/changeprofile/changeprofile';
import { SearchResultPage } from '../pages/search-result/search-result';
import { ProfessionsPage } from '../pages/professions/professions';
import { BoutiquesPage } from '../pages/boutiques/boutiques';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    RegisterPage,
    ProPage,
    ProfilePage,
    PartenariatPage,
    ChangeprofilePage,
	  SearchResultPage,
    ProfessionsPage,
    BoutiquesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicesPage,
    LoginPage,
    RegisterPage,
    ProPage,
    ProfilePage,
    PartenariatPage,
    ChangeprofilePage,
	  SearchResultPage,
    ProfessionsPage,
    BoutiquesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
