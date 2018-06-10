import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packagedetail',
  templateUrl: 'packagedetail.html',
})
export class PackagedetailPage {
  activedata: any;
  PackageID: any;
  switch: boolean;
  Source: any;
  Destination: any;
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
    this.PackageID = navParams.get('data');
    this.item = this.navParams.data;
    console.log(this.item);
    this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
    console.log(this.Source)
    this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
    console.log(this.Destination)
    this.findPath1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagedetailPage');
  }


  findPath1() {
    console.log("Iam the one");
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      // this.platform.ready().then(() => this.loadMaps());
     
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      const map = new google.maps.Map(document.getElementById('mapdetail'), {
        zoom: 9,
        center: { lat: 41.85, lng: -87.65 }
      });
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: this.Source,
        destination: this.Destination,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }, 2000);
  }

}
