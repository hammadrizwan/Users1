import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App, AlertController, MenuController, Nav } from 'ionic-angular';
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
import { LivetrackPage } from '../pages/livetrack/livetrack';
import { ProfilePage } from '../pages/profile/profile';
import { FCM } from '@ionic-native/fcm';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Ionic2RatingModule } from 'ionic2-rating';
import * as firebase from 'Firebase';
import "rxjs/add/observable/interval";
var config = {
  apiKey: "AIzaSyDK3eYlkVHJTY83OOYXVIZQRq5C549pBcc",
  authDomain: "transporterdnd.firebaseapp.com",
  databaseURL: "https://transporterdnd.firebaseio.com",
  projectId: "transporterdnd",
  storageBucket: "transporterdnd.appspot.com",
  messagingSenderId: "680127595430"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any
  Name: any;
  NotificationData = [];
  profileImage: any;
  loggedIn: Boolean=false;
  ID: any;
  Token: any
  ref: any;//firebase reference
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM,
    public storage: Storage, private http: Http, public events: Events, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      //Notifications
      firebase.initializeApp(config);//intialise firebase
      this.ref = firebase.database().ref('geolocations/');//assign data base to store gelocation
      this.loggedIn = false;
      //end notifications.
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.get('Name').then((val) => {//check if user initals are set or not
        if (val == null) {
          this.rootPage = LoginPage; //set landing page as login page
          this.loadData().then(() => {
            console.log("inhere")
            //this.updateToken();
            //this.onNotification();
          })
        }
        else {
          this.rootPage = HomePage;//set landing page as home page
          this.getData().then(() => {
            console.log("inhere")
            this.loggedIn = true;
            //this.updateToken();
            //this.onNotification();
          })
        }
      })
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'All Packages', component: AllPage },
      { title: 'Active Packages', component: ActivePage },
      { title: 'In Transit', component: InprogressPage },
      { title: 'Help', component: HelpPage },

    ];
    
  }

  private loadData(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
    this.events.subscribe('user:loggedin', (text) => {//event fires when user logs in or signups
        this.storage.get('Name').then((val) => {
          this.Name = val;
        });
        this.storage.get('ProfileImage').then((val) => {
          this.profileImage = val;
        });
        this.loggedIn = true;
        resolve();
        //wait just in case
      })
    });
  }
  private getData(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      //put the values in local storage
      this.storage.get('Name').then((val) => {
        this.Name = val;
      });
      this.storage.get('ProfileImage').then((val) => {
        this.profileImage = val;
      });
      this.loggedIn = true;
      resolve();
      //wait just in case
    })

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

  logout() {

    /*remove all storage values*/
    this.storage.set('Name', null);
    this.storage.set('Email', null);
    this.storage.set('Password', null)
    this.storage.set('ID', null);
    this.storage.set('Rating', null);
    this.storage.set('ProfileImage', null);
    this.storage.set('FCMToken', null);
    this.loggedIn=false;
    /*________________________________*/
    console.log(this.nav.getAllChildNavs())
    this.rootPage=LoginPage;
    this.nav.setRoot(LoginPage);//reroute to to login page
  }

  presentConfirm() {
    let myAlert = this.alertCtrl.create({
      title: 'Package Delivered!',
      enableBackdropDismiss: false,
      message: 'Your Package *insertname* was successfully delivered!',
      buttons: [
        
        {
          text: 'Rate!',
          handler: data => {
            console.log('Rated. Data -> ' + JSON.stringify(data));
            this.rateTransporter(data);
          },
          role: 'cancel'
        }
      ],
      inputs: [
        {
          type: 'radio',
          id: '1',
          name: '1',
          'label': '★',
          value: '1',
          'checked': false
        },
        {
          type: 'radio',
          id: '2',
          name: '2',
          'label': '★ ★',
          value: '2',
          'checked': false
        },
        {
          type: 'radio',
          id: '3',
          name: '3',
          'label': '★ ★ ★',
          value: '3',
          'checked': false
        },
        {
          type: 'radio',
          id: '4',
          name: '4',
          'label': '★ ★ ★ ★',
          value: '4',
          'checked': false
        },
        {
          type: 'radio',
          id: '5',
          name: '5',
          'label': '★ ★ ★ ★ ★',
          value: '5',
          'checked': false
        },
      ],
      
    });
    myAlert.present();

  }

  rateTransporter(data){
      if(data){//if the user has rated it then call the server
        //server code here
      }
      else{//else ask the user to rate!
        this.presentConfirm();
      }
  }

  onNotification() {
    this.fcm.getToken().then(token => {
      //backend.registerToken(token);
      console.log("token is" + token);
    });

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
        this.NotificationData.push(JSON.stringify(data));//open app and show notification page
        console.log(data);
        this.storage.get('NotificationData').then((val) => {
          this.NotificationData.push(val);
          this.storage.set('NotificationData', this.NotificationData);//notification data
          this.nav.push(ViewtransporterprofilePage, { transporter: data });
        });


      } else {
        console.log("Received in foreground");
        if (data.Delivered == "true") {
          this.presentConfirm();
        }
        else {
          this.NotificationData.push(JSON.stringify(data));//open app and show notification page
          console.log(data);
          this.storage.get('NotificationData').then((val) => {
            this.NotificationData.push(val);
            this.storage.set('NotificationData', this.NotificationData);//notification data
            this.nav.push(ViewtransporterprofilePage, { transporter: data });
          });
        }
      };
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      //backend.registerToken(token);
      console.log("token is" + token);
    });

    this.fcm.unsubscribeFromTopic('marketing');
  }
}

