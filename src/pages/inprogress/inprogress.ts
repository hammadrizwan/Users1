import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
  activedata: any;
  nodata: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, ) {
    this.getPackages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InprogressPage');
  }

  getPackages() {

    const sub = this.http.get('http://localhost:5000/intransit', { params: { 'SenderID': 1 } }).map(res => res.json()).subscribe(data => {
      if (data['content'] == "failed") {
        this.nodata = true;
      }
      this.activedata = data;

      console.log(this.activedata);

    },
      (err) => {

        console.log(err);

      });
    // setTimeout(() => {
    //   sub.unsubscribe();
    //   console.log("Unsubbed");
    // }, 10)
  }

  viewLive(ID) {

    
  }

}
