import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { CreatePage } from '../pages/create/create';
import { InprogressPage } from '../pages/inprogress/inprogress';
import { PendingPage } from '../pages/pending/pending';
import { HelpPage } from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { AllPage } from '../pages/all/all';
import { ActivePage } from '../pages/active/active';
import { ProfilePage } from '../pages/profile/profile';
import { FCM } from '@ionic-native/fcm';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = ProfilePage;
  Name: any;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM,
    public events: Events,public storage: Storage, ) {
    platform.ready().then(() => {
      //Notifications
     


      //end notifications.
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.callFCM();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Create Package', component: CreatePage },
      { title: 'All Packages', component: AllPage },
      { title: 'Active Packages', component: ActivePage },
      { title: 'In Transit', component: InprogressPage },
      { title: 'Pending Reviews', component: PendingPage },
      { title: 'Help', component: HelpPage },

    ];
    events.subscribe('user:loggedin', (text) => {
      this.storage.get('Name').then((val) => {
        this.Name = val;
      });
    });
  }

  openPage(p) {
    this.nav.setRoot(p.component);
  }

  profile() {
    this.nav.push(ProfilePage)
  }

  callFCM(){
    console.log("subscribing to topic");
    this.fcm.subscribeToTopic('marketing');
    console.log("subscribed to topic");
    this.fcm.getToken().then(token => {
      //backend.registerToken(token);
      console.log("token is" + token);
    });

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
        console.log(data);
        console.log(data.Room);
      } else {
        console.log("Received in foreground");
        console.log(data);
        console.log(data.Room);
      };
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      //backend.registerToken(token);
      console.log("token is" + token);
    });

    this.fcm.unsubscribeFromTopic('marketing');
  }
}

