import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
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
import { ViewtransporterprofilePage } from '../pages/viewtransporterprofile/viewtransporterprofile';
import { ProfilePage } from '../pages/profile/profile';
import { FCM } from '@ionic-native/fcm';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any
  Name: any;
  NotificationData = [];
  profileImage: any;
  loggedIn: Boolean;
  ID:any;
  Token:any
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM,
    public storage: Storage,private http:Http,public events: Events  ) {
    platform.ready().then(() => {
      //Notifications
     


      //end notifications.
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.get('ID').then((val) => {//check if user initals are set or not
        if (val == null) {
          this.rootPage = LoginPage; //set landing page as login page
        }
        else {
          this.rootPage = HomePage;//set landing page as home page
        }
      });
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
    this.loadData().then(() => {
      
      // this.subscribeWatch();
      this.updateToken();
      this.onNotification();
    })
    events.subscribe('user:loggedin', (text) => {
      this.storage.get('Name').then((val) => {
        this.Name = val;
      });
    });
  }

  private loadData(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
      this.loggedIn = true;
      this.events.subscribe('user:loggedin', (text) => {
        this.storage.get('Name').then((val) => {
          this.Name = val;
          //this.showNotification("thy name" + val);

        });
        this.storage.get('ProfileImage').then((val) => {
          this.profileImage = val;

        });
          resolve();
        //wait just in case
      });
    });
  }
  updateToken() {
    this.fcm.getToken().then(token => {
      console.log(token);
      this.Token = token;
      console.log("heres inside sdasd")
      this.storage.get('ID').then((val) => {
        this.ID = val;
        let data = {
          'ID': this.ID,
          'appType': "Sender",
          'FCMToken': this.Token,
        };
        this.storage.set('FCMToken', this.Token);//FCM token
        this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
        },
          err => {
            console.log('error');
          });
      });
    });
  }

  openPage(p) {
    this.nav.setRoot(p.component);
  }

  profile() {
    this.nav.push(ProfilePage)
  }

  onNotification(){
    this.fcm.getToken().then(token => {
      //backend.registerToken(token);
      console.log("token is" + token);
    });

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
        console.log(data);
        //this.NotificationData.push(data);
        this.nav.setRoot(ViewtransporterprofilePage, {transporter : data});
      
      } else {
        console.log("Received in foreground");
        console.log(data);
        console.log(data);
        //this.NotificationData.push(data);
        this.nav.setRoot(ViewtransporterprofilePage, {transporter : data});
      };
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      //backend.registerToken(token);
      console.log("token is" + token);
    });

    this.fcm.unsubscribeFromTopic('marketing');
  }
}

