import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl, } from '@angular/forms';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var cordova: any;
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  loading: Loading;lastImage1: string = null;
  
  lastImage2: string = null;
  lastImage3: string = null;
  submitAttempted:Boolean;
  data : FormGroup;
  Name:AbstractControl;
  Email:AbstractControl;
  CNIC:AbstractControl;
  Phone:AbstractControl;
  Address:AbstractControl;
  Password:AbstractControl;
  Date:AbstractControl;
  Month:AbstractControl;
  Year:AbstractControl;
  Gender:AbstractControl;
  Token: any;
  id: number;
  
  constructor(public navCtrl: NavController, private camera: Camera,
     private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,private alertCtrl: AlertController,public http: Http,private fcm: FCM,
     private transfer: FileTransfer,public storage: Storage) {
    
      this.data = this.formBuilder.group({
        lastImage1:['',Validators.required],
        lastImage2:['',Validators.required],
        lastImage3:['',Validators.required],
        Name: ['', Validators.required],
        Email: ['',Validators.compose([ Validators.required,Validators.email])],
        CNIC: ['', Validators.compose([Validators.required,Validators.pattern('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$')])],
        Phone: ['', Validators.compose([Validators.required,Validators.pattern('03[0-9]{9}$')])],
        Address: ['', Validators.required],
        CarRegistrationNo: ['',Validators.compose([Validators.required,Validators.pattern('^[A-Z]{3}(( ([0]{1}[7-9]{1}|[1]{1}[0-9]{1})[A,B]{0,1} | ))[0-9]{1,4}$')])],
        Password: ['',  Validators.compose([Validators.required,Validators.pattern('^.{6,15}$')])],
        Date:['Date',Validators.required],
        Month:['Month',Validators.required],
        Year:['Year',Validators.required],
        Gender:['gender',Validators.required],
      });

      
      this.Name=this.data.controls['Name'];
      this.Email=this.data.controls['Email'];
      this.CNIC=this.data.controls['CNIC'];
      this.Phone=this.data.controls['Phone'];
      this.Address=this.data.controls['Address'];
      this.Password=this.data.controls['Password'];
      this.Date=this.data.controls['Date'];
      this.Month=this.data.controls['Month'];
      this.Year=this.data.controls['Year'];
      this.Gender=this.data.controls['Gender'];
      this.submitAttempted=false;
      
  }
  
  logForm(){
    this.submitAttempted=true;
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    // if(this.lastImage1 ==null){
    //   let alert = this.alertCtrl.create({
    //     title: 'Profile Image Missing',
    //     subTitle: 'Please upload the required image',
    //     buttons: ['Dismiss']
    //   });
    this.fcm.getToken().then(token => {
      this.upload();
      this.Token = token;
      console.log(token);

      let Userdata= {
        'Name': this.Name.value,
        'Email':this.Email.value,
        'CNIC': this.CNIC.value,
        'Phone': this.Phone.value,
        'Address': this.Address.value,
        'Password': this.Password.value,
        'Date':this.Date.value,
        'Month':this.Month.value,
        'Year':this.Year.value,
        'Gender':this.Gender.value,
        'FCMToken':this.Token,
        'ProfilePicture':this.lastImage1,
    };  
   //console.log(Userdata);
    this.http.post('http://localhost:5000/signup', JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
        let responseData = data;
        let id = responseData['content'];
        console.log(responseData.Error);
        console.log(responseData);
        console.log(responseData['content']);
        this.loading.dismiss();
        if (responseData.Error != "none") {
          this.presentErrorAlert(responseData.Error);
        }
        else {//if account creation successfull store these value in local storage as they will be required by the application
          this.storage.set('Name', this.Name.value);
          this.storage.set('Email', this.Email.value);
          this.storage.set('Password', this.Password.value)
          this.storage.set('ID', id);
          this.storage.set('Rating', 0);
          this.navCtrl.setRoot(HomePage);
        }
      },
        err => {
          console.log('error');
        });
});
  }


  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  public presentActionSheet(id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY,id);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA,id);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


  public takePicture(sourceType,id) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(),id);
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(),id);
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  upload() {
    let fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.lastImage1,
      headers: {}

    }

    fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/senderprofileimage', options, true)
      .then((data) => {
        console.log(data)
      }, (err) => {
        console.log(err)
      })
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName, id) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      switch(id){
        case 1:
        this.lastImage1 = newFileName;
          break;
        case 2:
        this.lastImage2 = newFileName;
          break;
        case 3:
        this.lastImage3 = newFileName;
          break;
      }  
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }


}
