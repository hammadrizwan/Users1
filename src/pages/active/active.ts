import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackagedetailPage } from '../../pages/packagedetail/packagedetail';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { normalizeURL} from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';


/**
 * Generated class for the ActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {

  path: string;
  activedata: any;
  nodata: boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File, private filePath: FilePath,
    public http: Http,private transfer: FileTransfer,private fcm: FCM,) {
//       this.fcm.subscribeToTopic('marketing');

// this.fcm.getToken().then(token => {
//   //backend.registerToken(token);
//   console.log(token);
// });

// this.fcm.onNotification().subscribe(data => {
//   if(data.wasTapped){
//     console.log("Received in background");
//   } else {
//     console.log("Received in foreground");
//   };
// });

// this.fcm.onTokenRefresh().subscribe(token => {
//   //backend.registerToken(token);
//   console.log(token);
// });

// this.fcm.unsubscribeFromTopic('marketing');
//       this.getPackages();
       
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }
  packagedetails(ID){
    this.navCtrl.push(PackagedetailPage,{
      data: ID,
    });
  }
  getPackages() {
    
    const sub =  this.http.get('http://localhost:5000/active',{params:{'SenderID': 1}}).map(res => res.json()).subscribe(data => {
    if(data['content'] == "failed"){
      this.nodata = true;
    }  
    this.activedata = data;
          
    console.log(this.activedata);
    
        },
      (err)=>{
        
        console.log(err);
        
      });
      // setTimeout(() => {
      //   sub.unsubscribe();
      //   console.log("Unsubbed");
      // }, 10)
  }
  
  

}
