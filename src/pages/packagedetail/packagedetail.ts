import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packagedetail',
  templateUrl: 'packagedetail.html',
})
export class PackagedetailPage {
  activedata: any;
  PackageID: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.PackageID = navParams.get('data');
    this.getPackages(this.PackageID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagedetailPage');
  }

  getPackages(ID) {
    this.http.get('http://localhost:5000/packagedetails',{params:{'PackageID': ID}}).map(res => res.json()).subscribe(data => {
            this.activedata = data;
    console.log(this.activedata);
    console.log(this.activedata[0]['PImage'])
        });
    
  }

}
