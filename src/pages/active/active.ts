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
  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File, private filePath: FilePath,
    public http: Http,private transfer: FileTransfer) {
      this.getPackages();
      //this.download();  
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
    this.http.get('http://localhost:5000/active',{params:{'SenderID': 1}}).map(res => res.json()).subscribe(data => {
            this.activedata = data;
    console.log(this.activedata);
    console.log(this.activedata[0]['PImage'])
        });
    
  }

  

  viewActive(){
   
  }

}
