import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { PackagedetailPage } from '../../pages/packagedetail/packagedetail';
/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  delivereddata=[];
  ID: any;
  nodata: boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public storage: Storage) {
    this.storage.get('ID').then((val) => {
      this.ID = val;
    const sub =  this.http.get('http://localhost:5000/delivered',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
    if(data['content'] == "failed"){
      this.nodata = true;
    }
    else  {
    data.map(item => {
      this.delivereddata.push(item);
    })}
    console.log(this.delivereddata);
        },
      (err)=>{ 
        console.log(err);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingPage');
  }
  packagedetails(i: any){
    this.navCtrl.push(PackagedetailPage, this.delivereddata[i]);
  }
  
  doRefresh(refresher) {
    console.log('refreshing', refresher);
this.delivereddata = []
    setTimeout(() => {
      console.log('Async operation has ended');
      this.storage.get('ID').then((val) => {
        this.ID = val;
      this.http.get('http://localhost:5000/delivered',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
      if(data['content'] == "failed"){
        this.nodata = true;
      }  
      else  {
      data.map(item => {
        this.delivereddata.push(item);
      })}
      console.log(this.delivereddata);
          },
        (err)=>{ 
          console.log(err);
        });
      });
      refresher.complete();
    }, 2000);
  }
}
