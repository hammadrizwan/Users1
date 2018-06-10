import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LivetrackPage } from '../livetrack/livetrack';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the InprogressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inprogress',
  templateUrl: 'inprogress.html',
})
export class InprogressPage {
  intransitdata: any;
  nodata: boolean = false;
  SenderID: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage: Storage ) {
    this.storage.get('ID').then((val) => {//get the user ID form storage
      this.SenderID = val;
    const sub = this.http.get('http://localhost:5000/intransit', { params: { 'SenderID': this.SenderID } }).map(res => res.json()).subscribe(data => {
      if (data['content'] == "failed") {
        this.nodata = true;
      }
      else  {
      this.intransitdata = data;
      }
      console.log(this.intransitdata);

    },
      (err) => {

        console.log(err);

      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InprogressPage');
  }

  viewLive(ID) {
    this.navCtrl.push(LivetrackPage,{
      data: ID,
    });
    
  }

  doRefresh(refresher) {
    console.log('refreshing', refresher);
    this.intransitdata = []
    setTimeout(() => {
      console.log('Async operation has ended');
      this.storage.get('ID').then((val) => {//get the user ID form storage
        this.SenderID = val;
      const sub = this.http.get('http://localhost:5000/intransit', { params: { 'SenderID': this.SenderID } }).map(res => res.json()).subscribe(data => {
        if (data['content'] == "failed") {
          this.nodata = true;
        }
        else  {
        this.intransitdata = data;
        }
        console.log(this.intransitdata);
  
      },
        (err) => {
  
          console.log(err);
  
        });
      });
      refresher.complete();
    }, 2000);
  }

}
