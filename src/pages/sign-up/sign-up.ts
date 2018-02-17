import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl, } from '@angular/forms';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var cordova: any;
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
  
  constructor(public navCtrl: NavController, private camera: Camera,
    private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,private alertCtrl: AlertController,public http: Http) {
    
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

    if(this.lastImage1 ==null){
      let alert = this.alertCtrl.create({
        title: 'Profile Image Missing',
        subTitle: 'Please upload the required image',
        buttons: ['Dismiss']
      });
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
    };  
   // console.log(Userdata);
    this.http.post('http://localhost:5000/signup',JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      console.log(responseData);
  },
  err => {
      console.log('error');
  });
      alert.present();
      return;
    }

    if( this.lastImage2==null){
      let alert = this.alertCtrl.create({
        title: 'Liscence Image Missing',
        subTitle: 'Please upload the required image',
        buttons: ['Dismiss']  
      });
      alert.present();
      return;
    }
    if( this.lastImage3==null){
      let alert = this.alertCtrl.create({
        title: 'Vehicle Registration Image Missing',
        subTitle: 'Please upload all required image',
        buttons: ['Dismiss']
      });
      alert.present();
      return;
    }
    //ALL things are now set just need to send data to the back end check for valid!!!/
    
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
  /*public uploadImage() {
    // Destination URL
    var url = "http://yoururl/upload.php";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   
    // File name only
    var filename = this.lastImage;
   
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }*/

}
