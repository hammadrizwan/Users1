import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform, ToastController, App } from 'ionic-angular';
import { ActivePage } from '../../pages/active/active';
import { CreatePage } from '../create/create';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'Firebase';


/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  ref: any;//firebase reference
  snapshotToArray:any;
   observer: any
  @ViewChild('mapLanding') mapElement: ElementRef;
  map:any;
  thing1: any;
  loading:any;
  markers=[];
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, 
    public zone: NgZone,public alertCtrl: AlertController,public loadingCtrl: LoadingController,
    public geolocation: Geolocation,public platform: Platform,public storage: Storage) {
      this.ref = firebase.database().ref('geolocations/');//assign data base to store gelocation
    
      this.presentLoadingDefault();
      this.storage.get('ID').then((val)=>{
        //console.log('ID is +',val);
      });
      this.getArrayref();
      this.observer = Observable.interval(3000).subscribe(() => {
        this.ref.on('value', resp => {
          this.deleteMarkers();
          this.snapshotToArray(resp).forEach(data => {
            
             // let image = 'assets/imgs/green-bike.png';
              let updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
              // if(this.mapsetter){
              //   this.initMap(updatelocation);
              //   this.mapsetter = false;
              // }
              
              //console.log(updatelocation);
              this.addMarker(updatelocation);
              //his.setMapOnAll(this.map);
              //console.log("inside the top if");
            
            //  let image = 'assets/imgs/blue-bike.png';
              // updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
              // this.addMarker(updatelocation);
              // this.setMapOnAll(this.map);
              // console.log("inside the top else");
            
          });
        });
      });
  }

  public ionViewWillEnter() {
    this.thing1 = null;
    this.thing1 = this.navParams.get('thing1')|| null;
    if(this.thing1 != null)
    {
    this.presentConfirm(this.thing1.name)
    }
    
    
} 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  ionViewDidLeave() {
    console.log("Looks like I'm about to leave :(");
    this.observer.unsubscribe();//unsubsribe to geolocation tracking
  }

  presentConfirm(name) {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'Your Package ' +name+ ' was created successfully. Would you like to view it?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(ActivePage)
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();
    this.thing1 = null;
  }
  stop(){
    this.observer.unsubscribe();//unsubsribe to geolocation tracking
  }

  opencreate()
{
  this.navCtrl.push(CreatePage);
}

presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
    this.platform.ready().then(() => this.loadMaps());
  }, 2000);}

loadMaps() {
  
  if (!!google) {
    
    this.initializeMap();
   // this.initAutocomplete();
   // console.log("Hellooo");
    
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

addMarker(location) {
  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: {
      url: 'assets/imgs/ss.png'
      }
   // icon: image
  });
  this.markers.push(marker);
  //this.map.setCenter(marker.getPosition());
}

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
   this.markers[i].setMap(map);
  }
}

clearMarkers() {
  this.setMapOnAll(null);
}

deleteMarkers() {
  this.clearMarkers();
  this.markers = [];
}
getArrayref(){
  this.snapshotToArray = snapshot => {
   let returnArr = [];
   snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      //console.log(item);
    //console.log("value of item"+childSnapshot.toJSON());  
      item.key = childSnapshot.key;
   //  console.log("value of item.key"+item.key);
       returnArr.push(item);
      // console.log("hello hey whtsupp"); 
 });
    return returnArr;
 };
 
}


initializeMap() {
   
  if (this.mapElement) {
    this.zone.run(() => {


      var mapEle = this.mapElement.nativeElement;

      this.map = new google.maps.Map(mapEle, {
        zoom: 12,
        center: { lat: 31.5360264, lng: 74.4069842 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
        disableDoubleClickZoom: false,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
      });
      
      this.getCurrentPosition();
      
      
    }
  );
  }
}



addMarker1(position, content) {
  //console.log("add marker"); 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: position
  });
  
  return marker;
}

getCurrentPosition() {
  //console.log("get current pos"); 
  this.geolocation.getCurrentPosition().then(
    (position) => {
        //console.log(position.coords.latitude, position.coords.longitude);
        let myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let options = {
          center: myPos,
          zoom: 10

        };
        this.map.setOptions(options);
        this.addMarker1(myPos, "I am Here!");
        
    
    },
    (err) => {
      console.log(err);
    }
  );
  
}

dummymarkers()
{
  //var image = './assets/imgs/dummy.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 31.5360264, lng: 74.4069842},
    map: this.map,
    icon: {
      url: 'assets/imgs/ss.png'
      }
  });

//console.log("dummy markers"); 

}
customeMarker(position) {

  //let image = './assets/imgs/dummy.png';
  
  let beachMarker = new google.maps.Marker({
    position: position,
    map: this.map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'assets/imgs/ss.png'
      }
  });

  return beachMarker;
}

}