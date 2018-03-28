import { Component, ViewChild, ElementRef } from '@angular/core';
import { SignUpPage } from '../../pages/sign-up/sign-up';
import { HomePage } from '../../pages/home/home';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
declare var cordova: any;
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  id: any;
  lastrecord: any;
  submitAttempt: boolean = false;
  p = SignUpPage;
  q = HomePage;
  pet: string = "S1";
  lastImage1: string = null;
  Screen1: boolean;
  Screen2: boolean;
  Screen3: boolean;
  Screen4: boolean;

  data: FormGroup;
  PackageName: AbstractControl;
  PackageDesc: AbstractControl;
  PickAddress: AbstractControl;
  DestAddress: AbstractControl;
  PSize: String;
  CType: String;
  VType: String;
  TType: String;

  @ViewChild('signupSlider') signupSlider: any;
  @ViewChild('myInput') myInput: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private camera: Camera,
    private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,public http: Http) {


    this.data = this.formBuilder.group({
      PackageName: ['', Validators.required],
      PackageDesc: ['', Validators.required],
      PickAddress: ['', Validators.required],
      DestAddress: ['', Validators.required],

    });

    this.PackageName = this.data.controls['PackageName'];
    this.PackageDesc = this.data.controls['PackageDesc'];
    this.PickAddress = this.data.controls['PickAddress'];
    this.DestAddress = this.data.controls['DestAddress'];

    this.pet="S1";

  }

  segmentchanged($event) {
    console.log(event);
  }

  // getpackage(){//try code
  //   this.http.get('http://localhost:5000/getpackageid').map(res => res.json()).subscribe(data => {
     
  //     this.lastrecord = data.content;
  //     console.log(data.content)
  //   err => {
  //       console.log('error');
  //   }});
  // }

  formSubmit() {
    let Userdata;
    
    if (this.TType == 'FLance') {
      Userdata = {
        'ID':0,
        'PackageName': this.PackageName.value,
        'PackageDesc': this.PackageDesc.value,
        'PickAddress': this.PickAddress.value,
        'DestAddress': this.DestAddress.value,
        'PackageSize': this.PSize,
        'TransportType': this.TType,
        'VehicleType': this.VType,
        'Longitude':0,
        'Latitude':0,
        'TransporterID':null,
        'Fare':0,

      };
    }
    else {
      Userdata = {
        'ID':0,
        'PackageName': this.PackageName.value,
        'PackageDesc': this.PackageDesc.value,
        'PickAddress': this.PickAddress.value,
        'DestAddress': this.DestAddress.value,
        'PackageSize': this.PSize,
        'TransportType': this.TType,
        'CourierType': this.CType,
        'Longitude':0,
        'Latitude':0,
        'TransporterID':null,
        'Fare':0,
      };
    }


    console.log(Userdata);
      this.http.post('http://localhost:5000/createpackage',JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
        let responseData = data;
        console.log(responseData);
    },
    err => {
        console.log('error');
    });
  }

  next() {
    if (this.pet == "S1") 
    {
      this.Screen1 = true;
      if (this.PSize != null && this.PackageName.value != "" && this.PackageDesc.value != "") {
        this.pet = "S2";
      }
      return;
    }

    if (this.pet == "S2") 
    {
      this.Screen2 = true;
      if (this.TType != null) {
        this.pet = "S3";
      }
      return;
    }

    if (this.pet == "S3") 
    {
      this.Screen3 = true;
      if (this.CType != null || this.VType != null) {
        this.pet = "S4";
      }
      return;
    }

    if (this.pet == "S4") 
    {
      this.Screen4 = true;
      if (this.PickAddress.value != "" && this.DestAddress.value != "") {
        this.pet = "S5";
      }
      return;
    }
  }

  prev() {
    if(this.pet =="S2"){
      this.pet = "S1"
      return;
    }
    if(this.pet == "S3"){
      this.pet = "S2"
      return;
    }
    if(this.pet == "S4"){
      this.pet = "S3"
      return;
    }
    if(this.pet == "S5"){
      this.pet = "S4"
      return;
    }
  }

  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }
  save() {

  }
  public presentActionSheet(id) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
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
  public takePicture(sourceType) {
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
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
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
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage1 = newFileName;

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
