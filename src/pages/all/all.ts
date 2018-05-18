import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackagedetailPage } from '../../pages/packagedetail/packagedetail';
import { Http } from '@angular/http';
/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all',
  templateUrl: 'all.html',
})
export class AllPage {
  activedata: any;
  nodata: boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,) {
    this.getPackages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPage');
  }


  

  packagedetails(ID){
    this.navCtrl.push(PackagedetailPage,{
      data: ID,
    });
  }
  getPackages() {
    
    const sub =  this.http.get('http://localhost:5000/all',{params:{'SenderID': 1}}).map(res => res.json()).subscribe(data => {
    if(data['content'] == "failed"){
      this.nodata = true;
    }  
    this.activedata = data;
          
    console.log(this.activedata);
    
        },
      (err)=>{
        
        console.log(err);
        
      });
    }
}
