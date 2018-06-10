import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackagedetailPage } from '../../pages/packagedetail/packagedetail';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

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
  alldata=[];
  ID: any;
  nodata: boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public storage: Storage) {
    this.storage.get('ID').then((val) => {
      this.ID = val;
    const sub =  this.http.get('http://localhost:5000/all',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
    if(data['content'] == "failed"){
      this.nodata = true;
    }
    else  { 
    data.map(item => {
      this.alldata.push(item);
    })}
    console.log(this.alldata);
        },
      (err)=>{ 
        console.log(err);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPage');
  }


  

  packagedetails(i: any){
    this.navCtrl.push(PackagedetailPage, this.alldata[i]);
  }

  doRefresh(refresher) {
    console.log('refreshing', refresher);
this.alldata = []
    setTimeout(() => {
      console.log('Async operation has ended');
      this.storage.get('ID').then((val) => {
        this.ID = val;
      this.http.get('http://localhost:5000/all',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
      if(data['content'] == "failed"){
        this.nodata = true;
      }  

      else  {
      data.map(item => {
        this.alldata.push(item);
      })}
      console.log(this.alldata);
          },
        (err)=>{ 
          console.log(err);
        });
      });
      refresher.complete();
    }, 2000);
  }
//   getPackages() {
//     this.storage.get('ID').then((val) => {
//       this.ID = val;
//       //this.showNotification("thy name" + val);    
//     const sub =  this.http.get('http://localhost:5000/all',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
//     if(data['content'] == "failed"){
//       this.nodata = true;
//     }  
//     this.alldata = data;
//     console.log(this.alldata);
    
//         },
//       (err)=>{
        
//         console.log(err);
        
//       });
//     });
//     }
}
