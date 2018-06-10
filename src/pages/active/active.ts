import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { PackagedetailPage } from '../../pages/packagedetail/packagedetail';
import { HomePage } from '../../pages/home/home';
import { Http } from '@angular/http';
import { Navbar } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { normalizeURL} from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import { Storage } from '@ionic/storage';
import { ViewChild, ElementRef } from '@angular/core';
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
  ID:any;
  path: string;
  activedata=[];
  nodata: boolean =false;
  delete: boolean =false;
  @ViewChild('navbar') navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File, private filePath: FilePath,
    public http: Http,private transfer: FileTransfer,private fcm: FCM,public storage: Storage,private alertCtrl: AlertController
    , public loadingCtrl: LoadingController) {
      this.storage.get('ID').then((val) => {
        this.ID = val;
      this.http.get('http://localhost:5000/active',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
      if(data['content'] == "failed"){
        this.nodata = true;
      }  
      else  {
      data.map(item => {
        this.activedata.push(item);
      })}
      console.log(this.activedata);
          },
        (err)=>{ 
          console.log(err);
        });
      });
 
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
    this.navBar.backButtonClick = (e: UIEvent) => {
      // Print this event to the console
      console.log(e);
    
      // Navigate to another page
      this.navCtrl.getPrevious().data.thing1 =null;
      this.navCtrl.pop();
    }
  }
  packagedetails(i: any){
    this.navCtrl.push(PackagedetailPage, this.activedata[i]);
  }
  
  doRefresh(refresher) {
    console.log('refreshing', refresher);
    this.activedata = []
    setTimeout(() => {
      console.log('Async operation has ended');
      this.storage.get('ID').then((val) => {
        this.ID = val;
      this.http.get('http://localhost:5000/active',{params:{'SenderID': this.ID}}).map(res => res.json()).subscribe(data => {
      if(data['content'] == "failed"){
        this.nodata = true;
      }  
      else  {
      data.map(item => {
        this.activedata.push(item);
      })}
      console.log(this.activedata);
          },
        (err)=>{ 
          console.log(err);
        });
      });
      refresher.complete();
    }, 2000);
  }

  deletepackage(PackageID, SenderID){

    let alert = this.alertCtrl.create({
      title: 'Delete Package',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.delete = false;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
        
            loading.present();
        
            setTimeout(() => {
              loading.dismiss();
            this.http.get('http://localhost:5000/deletepackage',{params:{'PackageID': PackageID, 'SenderID': SenderID}}).map(res => res.json()).subscribe(data => {
              if(data['content'] == "notdeleted"){
                let alert = this.alertCtrl.create({
                  title: 'Package Not Deleted as it is ' + data['status'],
                  buttons: [
                    {
                      text: 'Ok',
                      role: 'cancel',
                      handler: () => {
                        console.log('Ok clicked');
                      }
                    }
                  ]
                });
                alert.present();
              }
            
             else if(data['content'] == "failed"){
                this.nodata = true;
              } 
              else  { 
                this.activedata = []
              data.map(item => {
                this.activedata.push(item);
              })}
              console.log(this.activedata);
                  },
                (err)=>{ 
                  console.log(err);
                });
              }, 2000);
            
            console.log('Delete clicked');
          }
        }
      ]
    });
    alert.present();
  }

    
  
  

}
