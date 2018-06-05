import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';
import { CreatePage } from '../create/create';
import { NotificationPage } from '../notification/notification';
import { LandingPage } from '../landing/landing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  LandRoot = LandingPage;
  NotificationRoot = NotificationPage;
  tab1BadgeCount=1;
  constructor(public navCtrl: NavController,app: App, menu: MenuController) {
    
  }


 

}
