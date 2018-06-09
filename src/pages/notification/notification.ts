import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  data: any;
  transporterID: any;
  packageID: any;
  NotificationData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('NotificationData').then((val) => {
      this.NotificationData = val;
      console.log(val);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  removeNotification(index){
    console.log(index);
    this.NotificationData.splice(index,1)
  }

}
