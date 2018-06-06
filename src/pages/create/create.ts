import { Component, ViewChild, NgZone, ElementRef, OnInit } from '@angular/core';
import { SignUpPage } from '../../pages/sign-up/sign-up';
import { HomePage } from '../../pages/home/home';
import { IonicPage, NavController, NavParams, ActionSheetController, App, ToastController, Platform, LoadingController, Loading, Segment } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
declare var cordova: any;
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';
import { Base64 } from '@ionic-native/base64';
declare var google: any;
declare var MarkerClusterer: any;

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


  updatePage(CurrentScreen) {
    if (CurrentScreen == "S1") {
      if (this.mapElement) {
        if (this.searchbar1) {
          if (this.SourceString != "") {
            this.searchbar1.nativeElement.querySelector('.searchbar-input').value = this.SourceString;
          }
        }

        if (this.searchbar) {
          if (this.DestinationString != "") {
            this.searchbar.nativeElement.querySelector('.searchbar-input').value = this.DestinationString;
          }
        }
        this.loadMaps();

        this.findPath();


      }
      else { console.log("Fail to load"); }
    }
  }
  //MAPS VARS_______________________________________________________________________________________________________

  @ViewChild('mapCreatePackage') mapElement: ElementRef;
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;
  @ViewChild('searchbar1', { read: ElementRef }) searchbar1: ElementRef;
  addressElement1: HTMLInputElement = null;
  Source: any = null;
  Destination: any = null;
  SourceString: string;
  DestinationString: string;
  MyLocation: any;
  listSearch: string = '';
  map: any;
  map1: any;
  marker: any;
  loading: any;
  search: boolean = false;
  pageload: boolean = false;
  imageerror: boolean = false;
  routeerror: Boolean = false;
  error: any;
  regionals: any = [];
  currentregional: any;
  //__________________________________________________________________________________________________________
  id: any;
  lastrecord: any;
  submitAttempt: boolean = false;
  p = SignUpPage;
  q = HomePage;
  CurrentScreen: string = "S1";
  lastImage1: string = null;
  ImagePath: string = null;
  Screen1: boolean;
  Screen2: boolean;
  Screen3: boolean;
  Screen4: boolean;
  Screen5: boolean;
  Screen6: boolean;
  Scr6: boolean = true;
  Global: boolean = true;
  distance: any;
  marker1: any;
  marker2: any;
  observer: any;
  data: FormGroup;
  PackageName: AbstractControl;
  PackageDesc: AbstractControl;
  PickAddress: AbstractControl;
  DestAddress: AbstractControl;
  PackageSize: String;
  CourierType: String;
  VehicleType: String;
  TransportType: String;


  @ViewChild('signupSlider') signupSlider: any;
  @ViewChild('myInput') myInput: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private camera: Camera,
    private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, public http: Http,
    public geolocation: Geolocation, public app: App,
    public alertCtrl: AlertController, public zone: NgZone, private base64: Base64, private transfer: FileTransfer) {
    this.CurrentScreen = "S1";
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

    //this.presentLoadingDefault();

    // this.platform.ready().then(() => this.loadMaps());

  }
  //_________________GOOGLE MAPS________________________________________________________________________________________//
  viewPlace(id) {
    console.log('Clicked Marker', id);
  }

  // presentLoadingDefault() {
  //   let loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });

  //   loading.present();

  //   setTimeout(() => {
  //     loading.dismiss();
  //     this.platform.ready().then(() => this.loadMaps());
  //   }, 4000);
  // }

  ionViewDidLoad() {
    this.platform.ready().then(() => this.loadMaps());
    this.checkIfLocationChange();
  }

  ionViewDidLeave() {
    this.observer.unsubscribe();//unsubscribe to any changes made to markers
  }


  loadMaps() {

    if (!!google) {

      this.initializeMap();
      this.initAutocomplete();
      console.log("Hello");

    } else {
      this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
    }
  }

  errorAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.loadMaps();
          }
        }
      ]
    });
    alert.present();
  }

  mapsSearchBar(ev: any) {
    // set input to the value of the searchbar
    //this.search = ev.target.value;
    //    console.log(ev);
    const autocomplete = new google.maps.places.Autocomplete(ev);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          sub.next(place.geometry.location);
          sub.complete();
        }
      });
    });
  }

  checkIfLocationChange() {//method checks if marker position is changed
    let input = document.getElementById('textDisplay');//get the div in which new position text is to be shown
    this.observer = Observable.interval(2000).subscribe(() => {//new observable runs every 2 sec
      if (this.marker1 != null) {//check if marker actually exits
        if (this.Source != this.marker1.getPosition()) {//check if postion has changed
          this.Source = this.marker1.getPosition();//set source to new postion
          let geocoder = new google.maps.Geocoder;//reverse geocoding to get location text
          geocoder.geocode({ 'location': this.Source }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                input.innerText = results[0].formatted_address;//set text in div
                this.SourceString = results[0].formatted_address;
                //map.setZoom(11);
                // let input = document.getElementById('s1');
                //infowindow.setContent(results[0].formatted_address);
                //infowindow.open(map, marker123);
              }
            }
          });
        }
      }
      if (this.marker2 != null) {//check if marker actually exits
        if (this.Destination != this.marker2.getPosition()) {//check if postion has changed
          this.Destination = this.marker2.getPosition();//set destination to new postion
          let geocoder = new google.maps.Geocoder;//reverse geocoding to get location text
          geocoder.geocode({ 'location': this.Destination }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                input.innerText = results[0].formatted_address;
                this.DestinationString = results[0].formatted_address;
                //map.setZoom(11);
                // let input = document.getElementById('s1');  
                //infowindow.setContent(results[0].formatted_address);
                //infowindow.open(map, marker123);  
              }
            }
          });
        }
      }
    });
  }

  initAutocomplete(): void {

    this.addressElement1 = this.searchbar1.nativeElement.querySelector('.searchbar-input');//get the search bar DOM
    this.createAutocomplete(this.addressElement1).subscribe((location) => {//subscribe to observable that is returned
      console.log('First Search', location);
      this.Source = new google.maps.LatLng(location.lat(), location.lng());//Source marker location
      let options = {
        center: this.Source,
        zoom: 13
      };
      this.map.setOptions(options);//reset zoom and focus to source marker using options above
      this.marker1.setMap(null);//remove previous marker
      // this.addMarker(this.Origin, "Origin",this.marker1);
      this.marker1 = new google.maps.Marker({//drop new marker
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.Source,
        draggable: true
      });
      this.addInfoWindow(this.marker1, "Origin");//info shown when marker is clicked
    });

    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');//subscribe to observable that is returned
    this.createAutocomplete1(this.addressElement).subscribe((location) => {
      console.log('Second Search', location);
      this.Destination = new google.maps.LatLng(location.lat(), location.lng());//Destination marker location
      let options = {
        center: this.Destination,
        zoom: 13
      };
      this.map.setOptions(options);//reset zoom and focus to Destination marker using options abov
      // this.addMarker(this.Dest, "Destination",this.marker2  );
      this.marker2 = new google.maps.Marker({//drop new marker
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.Destination,
        draggable: true
      });
      this.addInfoWindow(this.marker2, "Destination");//info shown when marker is clicked
    });

  }

  findPath() {

    if (this.marker2 != null) {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      this.map = new google.maps.Map(document.getElementById('mapCreatePackage'), {
        zoom: 9,
        center: { lat: 31.4826352, lng: 74.0712721 }
      });//new map
      directionsDisplay.setMap(this.map);//set direction diplay method to show on this map
      directionsService.route({//create new route show on  map
        origin: this.Source,//location A origin marker
        destination: this.Destination,//location B destination marker
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);//diplay directions
          //this.distance = response.routes[0].legs[0].distance.value / 1000;
          console.log(response.routes[0].legs[0].distance.value / 1000)
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }

  }

  findPath1() {
    setTimeout(() => {
      if (this.marker2 != null) {
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        this.map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 9,
          center: { lat: 31.4826352, lng: 74.0712721 }
        });//new map
        directionsDisplay.setMap(this.map1);//set direction diplay method to show on this map
        directionsService.route({//create new route show on  map
          origin: this.Source,//location A origin marker
          destination: this.Destination,//location B destination marker
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);//diplay directions
            //this.distance = response.routes[0].legs[0].distance.value / 1000;
            console.log(response.routes[0].legs[0].distance.value / 1000)
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
    }, 1500);
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.SourceString = place.formatted_address;
        console.log("Hola" + place.formatted_address)
        //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
        if (!place) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          //console.log('Search', place.geometry.locat;
          console.log('Search Lat', place.geometry.location.lat());
          console.log('Search Lng', place.geometry.location.lng());
          sub.next(place.geometry.location);
          //sub.complete();
        }
      });
    });
  }

  createAutocomplete1(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.DestinationString = place.formatted_address;
        console.log("Hola" + place.formatted_address)
        //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
        if (!place) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          //console.log('Search', place.geometry.locat;
          console.log('Search Lat', place.geometry.location.lat());
          console.log('Search Lng', place.geometry.location.lng());
          sub.next(place.geometry.location);
          //sub.complete();
        }
      });
    });
  }

  initializeMap() {
    var mapEle = this.mapElement.nativeElement;//get map div
    this.map = new google.maps.Map(mapEle, {//new map create with the following settings
      zoom: 12,
      center: { lat: 31.4826352, lng: 74.0712721 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDoubleClickZoom: false,
      disableDefaultUI: true,
      zoomControl: true,
      scaleControl: true,
    });

    this.getCurrentPosition();//set the default location at the users current position
  }

  //Center zoom
  //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
  bounceMap(markers) {
    let bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }

    this.map.fitBounds(bounds);
  }

  resizeMap() {
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 200);
  }

  /*
    getCurrentPositionfromStorage(markers) {
      this.storage.get('lastLocation').then((result) => {
        if (result) {
          let myPos = new google.maps.LatLng(result.lat, result.long);
          this.map.setOptions({
            center: myPos,
            zoom: 16
          });
          let marker = this.addMarker(myPos, "My last saved Location: " + result.location);
  
          markers.push(marker);
          this.bounceMap(markers);
  
          this.resizeMap();
        }
      });
    }
  */

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  // go show currrent location
  getCurrentPosition() {

    let locationOptions = { timeout: 10000 };
    this.geolocation.getCurrentPosition(locationOptions).then(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.Source = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let options = {
          center: this.Source,
          zoom: 12

        };
        this.map.setOptions(options);//set new options to map
        this.marker1 = new google.maps.Marker({//drop marker at current location with the following settings
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.Source,
          draggable: true
        });
        console.log("this is the lat" + this.marker1.getPosition().lat());
        console.log("this is the lng" + this.marker1.getPosition().lng());

      }),
      (error) => {
        //     this.loading.dismiss().then(() => {
        //     this.showToast('Location not found. Please enable your GPS!');
        //     this.loading.dismiss();
        //     console.log(error);
        //   });
        console.log(error);
      }
  }

  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
    }
  }

  addMarker(position, content) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position,
      draggable: true
    });

    this.addInfoWindow(marker, content);
    return marker;
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
  //_________________________________________________________________________________________________________________
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



  next() {
    if (this.CurrentScreen == "S3") {
      this.Screen3 = true;
      if (this.PackageSize != null && this.PackageName.value != "" && this.PackageDesc.value != "") {
        this.CurrentScreen = "S4";
        this.Screen3 = false;
      }
      return;
    }

    if (this.CurrentScreen == "S4") {
      this.Screen4 = true;
      if (this.TransportType != null) {
        this.CurrentScreen = "S5";
        this.Screen4=false;
      }
      return;
    }

    if (this.CurrentScreen == "S5") {
      this.Screen5 = true;
      if (this.CourierType != null || this.VehicleType != null) {
        this.CurrentScreen = "S6";
        this.Screen5=false;
        this.Scr6 = false;
        this.findPath1();
      }
      return;
    }

    if (this.CurrentScreen == "S1") {
      this.Screen1 = true;
      if (this.Source!=null && this.Destination!=null) {
        this.CurrentScreen = "S2";
        this.Screen2 = false;
      }
      else {
        this.routeerror = true;
      }
      return;
    }
    if (this.CurrentScreen == "S2") {
      this.Screen2 = true;
      if (this.lastImage1 != null) {
        this.Screen2 = false;
        this.CurrentScreen = "S3";
        return;
      }
      else {
        this.imageerror = true;
      }

    }
  }

  prev() {
    if (this.CurrentScreen == "S2") {
      this.CurrentScreen = "S1";

      return;
    }
    if (this.CurrentScreen == "S3") {
      this.CurrentScreen = "S2"
      return;
    }
    if (this.CurrentScreen == "S4") {
      this.CurrentScreen = "S3"
      return;
    }
    if (this.CurrentScreen == "S5") {
      this.CurrentScreen = "S4"
      return;
    }
    if (this.CurrentScreen == "S6") {this.Scr6 = false;
      this.Scr6 = true;
      this.CurrentScreen = "S5"
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
      quality: 10,
      sourceType: sourceType,
      saveToPhotoAlbum: true,
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
            console.log(currentName);
            console.log(correctPath);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        //this.lastImage1 = currentName;
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
      console.log(err);
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
      this.ImagePath = this.pathForImage(this.lastImage1);
    }, (error) => {
      this.presentToast('Error while storing file.');
      console.log(error);
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



  upload() {
    let fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.lastImage1,
      headers: {}

    }

    fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/imageupload', options, true)
      .then((data) => {
        console.log(data)
      }, (err) => {
        console.log(err)
      })
  }


  formSubmit() {
    this.upload();
    let Userdata;
    let Src = JSON.parse(JSON.stringify(this.Source));
    let Dst = JSON.parse(JSON.stringify(this.Destination));
    let SLat = Src["lat"];
    let SLng = Src["lng"];
    let DLat = Dst["lat"];
    let DLng = Dst["lng"];
    if (this.TransportType == 'Freelance') {
      Userdata = {
        'ID': 0,
        'PackageName': this.PackageName.value,
        'PackageDesc': this.PackageDesc.value,
        'PickAddress': this.SourceString,
        'DestAddress': this.DestinationString,
        'PackageSize': this.PackageSize,
        'TransportType': this.TransportType,
        'VehicleType': this.VehicleType,
        'SourceLongitude': SLng,
        'SourceLatitude': SLat,
        'DestinationLongitude': DLng,
        'DestinationLatitude': DLat,
        'TransporterID': null,
        'SenderID': 1,
        'Status': "Active",
        'PImage': this.lastImage1,
        'Fare': 0,
        'Distance': this.distance,
      };
    }
    else {
      Userdata = {
        'ID': 0,
        'PackageName': this.PackageName.value,
        'PackageDesc': this.PackageDesc.value,
        'PickAddress': this.SourceString,
        'DestAddress': this.DestinationString,
        'PackageSize': this.PackageSize,
        'TransportType': this.TransportType,
        'CourierType': this.CourierType,
        'SourceLongitude': Src["lng"],
        'SourceLatitude': Src["lat"],
        'DestinationLongitude': Dst["lng"],
        'DestinationLatitude': Dst["lat"],
        'TransporterID': null,
        'SenderID': 1,
        'Status': "Active",
        'PImage': this.lastImage1,
        'Fare': 0,
        'Distance': this.distance,
      };
    }


    console.log(Userdata);
    this.http.post('http://localhost:5000/createpackage', JSON.stringify(Userdata)).map(res => res.json()).subscribe(data => {
      let responseData = data;
      console.log(responseData);
    },
      err => {
        console.log(err);
      });
  }

}
