import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LivetrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livetrack',
  templateUrl: 'livetrack.html',
})



export class LivetrackPage {
  ref: any;//firebase reference
  PackageID: any;
  snapshotToArray: any;
  map: any;
  observer: any
  markers=[];
  mapsetter= true;
  @ViewChild('mapLiveTracking') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
    this.initMap();
    this.ref = firebase.database().ref('geolocations/');//assign data base to store gelocation
    this.PackageID = navParams.get('data');
    this.getArrayref(this.PackageID);
    //console.log(this.snapshotToArray);
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
          
          console.log(updatelocation);
          this.addMarker(updatelocation);
          //his.setMapOnAll(this.map);
          console.log("inside the top if");
        
        //  let image = 'assets/imgs/blue-bike.png';
          // updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
          // this.addMarker(updatelocation);
          // this.setMapOnAll(this.map);
          // console.log("inside the top else");
        
      });
    });
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivetrackPage');
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    this.observer.unsubscribe();//unsubsribe to geolocation tracking
  }
   
  addMarker(location) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
     // icon: image
    });
    this.markers.push(marker);
    this.map.setCenter(marker.getPosition());
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

  getArrayref(id){
     this.snapshotToArray = snapshot => {
      let returnArr = [];
      snapshot.forEach(childSnapshot => {
         let item = childSnapshot.val();
         console.log(item);
       //console.log("value of item"+childSnapshot.toJSON());  
         item.key = childSnapshot.key;
      //  console.log("value of item.key"+item.key);
         if(item.ID==id)
         {
           console.log(item.longitude);
          returnArr.push(item);
          console.log("hello hey whtsupp"); 
        }
    });
       return returnArr;
    };
    
  }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: mylocation
      });
    });
  }

}
