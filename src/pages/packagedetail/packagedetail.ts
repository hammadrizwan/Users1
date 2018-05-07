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
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public loadingCtrl: LoadingController) {
    this.PackageID = navParams.get('data');
    this.getPackages(this.PackageID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagedetailPage');
  }

  getPackages(ID) {
    this.http.get('http://localhost:5000/packagedetails',{params:{'PackageID': ID}}).map(res => res.json()).subscribe(data => {
      if(data[0]['TransportType'] == "CourierService")
      {
        this.switch = true;
      }        
    this.activedata = data;
    console.log(this.activedata);
    
        }); 
        this.findPath1();
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
      let Source = new google.maps.LatLng(this.activedata[0]['SourceLatitude'],this.activedata[0]['SourceLongitude']);
      let Destination = new google.maps.LatLng(this.activedata[0]['DestinationLatitude'],this.activedata[0]['DestinationLongitude']);
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      const map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 9,
        center: { lat: 41.85, lng: -87.65 }
      });
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: Source,
        destination: Destination,
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
