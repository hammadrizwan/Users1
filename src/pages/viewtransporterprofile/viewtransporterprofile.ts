import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LivetrackPage } from '../livetrack/livetrack';
/**
 * Generated class for the ViewtransporterprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewtransporterprofile',
  templateUrl: 'viewtransporterprofile.html',
})
export class ViewtransporterprofilePage {
  ID: any;//Transporter ID
  name: any;//Transporter name
  contantInfo: any;//Transporter phone number
  rating: any;//Transporter rating
  clearenceDue: any;//Transporter amount to be settled
  activePackages: any;//Transporter package deliveries in progress
  cancelledPackages: any;//Transporter  cancelled
  deliveriesDone: any;//Transporter  number of deliveries completed
  profileImage: any;//Transporter profile image 
  userReviews = [];
  skips: number;
  infiniteScroll: any;
  Transporterparams: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage
    , public http: Http, private alertCtrl: AlertController) {

    
    this.onload().then(() => {

      this.http.get('http://localhost:5000/getransporterdata', { params: { 'TransporterID': this.ID } }).map(res => res.json()).subscribe(response => {
        console.log(response.content);
        this.name = response.content[0].Name;
        console.log(this.name);
        this.contantInfo = response.content[0].Phone;
        console.log(this.contantInfo);
        this.rating = Array(response.content[0].Rating).fill(response.content[0].Rating);
        console.log(this.rating);
        this.clearenceDue = response.content[0].ClearenceDue;
        console.log(this.clearenceDue);
        this.cancelledPackages = response.content[0].CancelledPackages;
        this.activePackages = response.content[0].ActivePackages;
        console.log(this.cancelledPackages);
        this.profileImage = response.content[0].ProfileImage;

      },
        err => {
          console.log('error');
        });

      /*_______________________________________________________________________________________________________________*/
      this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': this.ID, 'skips': this.skips } }).map(res => res.json()).subscribe(response => {

        response.content.map(item => {
          //console.log(item['rating'])
          item['ratings'] = Array(item['rating']).fill(item['rating']);
          //console.log("After"+item['ratings'])
          //console.log(item)
          this.userReviews.push(item);
          console.log("yohoo");
        });
      },
        err => {
          console.log('error');
        });

    });

    this.skips = 0;
    /*get Transporter ID from localstorage and  request data and put it into variables to show in view________________*/


  }
  onload(): Promise<any> {//promise used to ensure data has been loaded before it is acessed
    return new Promise((resolve, reject) => {
      this.Transporterparams = this.navParams.get('transporter');
      this.ID = this.Transporterparams.TransporterID;
      console.log(this.Transporterparams.TransporterID)
      console.log("inhere");
      resolve();
    });
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.skips = this.skips + 3;
    console.log("skips", this.skips)
    var length = this.userReviews.length;
    setTimeout(() => {
      this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': this.ID, 'skips': this.skips } }).map(res => res.json()).subscribe(response => {
        response.content.map(item => {
          item['ratings'] = Array(item['rating']).fill(item['rating']);
          this.userReviews.push(item);
        })
        if (response.content == '') {
          console.log("End reached");
        }
      },
        err => {
          console.log('error');
        });
      if (length == this.userReviews.length) {
        this.presentErrorAlert("There are no more packages left to show");
        infiniteScroll.enable(false);
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 300);

  }

  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidLoad() {//page has loaded
    console.log('ionViewDidLoad ProfilePage');
  }


  accept() {
    let userdecision;

    userdecision = {
      'Status': 'accept',
      'PackageID': this.Transporterparams.PackageID,
      'TransporterID': this.Transporterparams.TransporterID,
    }

    // userdecision = {
    //     'Status': 'accept',
    //     'PackageID': 1,
    //     'TransporterID': 1,
    //   }


    this.http.put('http://localhost:5000/senderresponse', JSON.stringify(userdecision)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      console.log(responseData);
      this.navCtrl.push(LivetrackPage,{
        data: this.Transporterparams.TransporterID,
      });
    },
      err => {
        console.log(err);
      });
  }

  reject() {
    let userdecision;

    userdecision = {
      'Status': 'reject',
      'PackageID': this.Transporterparams.PackageID,
      'TransporterID': this.Transporterparams.TransporterID,
    }

    // userdecision = {
    //   'Status': 'accept',
    //   'PackageID': 1,
    //   'TransporterID': 1,
    // }

    this.http.post('http://localhost:5000/senderresponse', JSON.stringify(userdecision)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      console.log(responseData);
     
    },
      err => {
        console.log(err);
      });
  }




}
