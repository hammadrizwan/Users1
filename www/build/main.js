webpackJsonp([14],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllPage = (function () {
    function AllPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alldata = [];
        this.nodata = false;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            var sub = _this.http.get('http://localhost:5000/all', { params: { 'SenderID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data['content'] == "failed") {
                    _this.nodata = true;
                }
                else {
                    data.map(function (item) {
                        _this.alldata.push(item);
                    });
                }
                console.log(_this.alldata);
            }, function (err) {
                console.log(err);
            });
        });
    }
    AllPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllPage');
    };
    AllPage.prototype.packagedetails = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */], this.alldata[i]);
    };
    AllPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('refreshing', refresher);
        this.alldata = [];
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/all', { params: { 'SenderID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data['content'] == "failed") {
                        _this.nodata = true;
                    }
                    else {
                        data.map(function (item) {
                            _this.alldata.push(item);
                        });
                    }
                    console.log(_this.alldata);
                }, function (err) {
                    console.log(err);
                });
            });
            refresher.complete();
        }, 2000);
    };
    AllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-all',template:/*ion-inline-start:"Y:\Users\src\pages\all\all.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>All Packages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bgg">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n          pullingIcon="arrow-dropdown"\n\n          pullingText="Pull to refresh"\n\n          refreshingSpinner="circles"\n\n          refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n  <div *ngIf="!nodata">\n\n    \n\n    <ion-card *ngFor="let item of alldata, let i= index">\n\n        <div style="position: relative">\n\n      <img src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n  </div>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2>{{item.PickAddress}}</h2>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2>{{item.DestAddress}}</h2>\n\n      </ion-item>\n\n  \n\n      <button class="colornavbar" ion-button full (click)="packagedetails(i)">\n\n        View Details\n\n      </button>\n\n    </ion-card>\n\n  \n\n  </div>\n\n  <div *ngIf="nodata" class="nodata">\n\n    <p ion-text >No Packages to Display</p>\n\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"Y:\Users\src\pages\all\all.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AllPage);
    return AllPage;
}());

//# sourceMappingURL=all.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_sign_up_sign_up__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePage = (function () {
    function CreatePage(navCtrl, navParams, formBuilder, camera, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, http, geolocation, app, alertCtrl, zone, base64, transfer, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.base64 = base64;
        this.transfer = transfer;
        this.storage = storage;
        this.addressElement = null;
        this.addressElement1 = null;
        this.Source = null;
        this.Destination = null;
        this.listSearch = '';
        this.search = false;
        this.pageload = false;
        this.imageerror = false;
        this.routeerror = false;
        this.regionals = [];
        this.fare = 0;
        this.submitAttempt = false;
        this.p = __WEBPACK_IMPORTED_MODULE_1__pages_sign_up_sign_up__["a" /* SignUpPage */];
        this.q = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.CurrentScreen = "S1";
        this.lastImage1 = null;
        this.ImagePath = null;
        this.Scr6 = true;
        this.Global = true;
        this.distancePackage = 0;
        this.CurrentScreen = "S1";
        this.data = this.formBuilder.group({
            PackageName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            PackageDesc: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            PickAddress: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            DestAddress: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
        this.PackageName = this.data.controls['PackageName'];
        this.PackageDesc = this.data.controls['PackageDesc'];
        this.PickAddress = this.data.controls['PickAddress'];
        this.DestAddress = this.data.controls['DestAddress'];
        //this.presentLoadingDefault();
        // this.platform.ready().then(() => this.loadMaps());
    }
    CreatePage.prototype.updatePage = function (CurrentScreen) {
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
            else {
                console.log("Fail to load");
            }
        }
    };
    //_________________GOOGLE MAPS________________________________________________________________________________________//
    CreatePage.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
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
    CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            // Print this event to the console
            console.log(e);
            // Navigate to another page
            _this.navCtrl.getPrevious().data.thing1 = null;
            _this.navCtrl.pop();
        };
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.checkIfLocationChange();
    };
    CreatePage.prototype.ionViewDidLeave = function () {
        this.observer.unsubscribe(); //unsubscribe to any changes made to markers
    };
    CreatePage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
            console.log("Hello");
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    CreatePage.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }
            ]
        });
        alert.present();
    };
    CreatePage.prototype.mapsSearchBar = function (ev) {
        // set input to the value of the searchbar
        //this.search = ev.target.value;
        //    console.log(ev);
        var autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    sub.next(place.geometry.location);
                    sub.complete();
                }
            });
        });
    };
    CreatePage.prototype.checkIfLocationChange = function () {
        var _this = this;
        var input = document.getElementById('textDisplay'); //get the div in which new position text is to be shown
        this.observer = __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"].interval(2000).subscribe(function () {
            if (_this.marker1 != null) {
                if (_this.Source != _this.marker1.getPosition()) {
                    _this.Source = _this.marker1.getPosition(); //set source to new postion
                    var geocoder = new google.maps.Geocoder; //reverse geocoding to get location text
                    geocoder.geocode({ 'location': _this.Source }, function (results, status) {
                        if (status === 'OK') {
                            if (results[0]) {
                                input.innerText = results[0].formatted_address; //set text in div
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
            if (_this.marker2 != null) {
                if (_this.Destination != _this.marker2.getPosition()) {
                    _this.Destination = _this.marker2.getPosition(); //set destination to new postion
                    var geocoder = new google.maps.Geocoder; //reverse geocoding to get location text
                    geocoder.geocode({ 'location': _this.Destination }, function (results, status) {
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
    };
    CreatePage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement1 = this.searchbar1.nativeElement.querySelector('.searchbar-input'); //get the search bar DOM
        this.createAutocomplete(this.addressElement1).subscribe(function (location) {
            console.log('First Search', location);
            _this.Source = new google.maps.LatLng(location.lat(), location.lng()); //Source marker location
            var options = {
                center: _this.Source,
                zoom: 13
            };
            _this.map.setOptions(options); //reset zoom and focus to source marker using options above
            _this.marker1.setMap(null); //remove previous marker
            // this.addMarker(this.Origin, "Origin",this.marker1);
            _this.marker1 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Source,
                draggable: true
            });
            _this.addInfoWindow(_this.marker1, "Origin"); //info shown when marker is clicked
        });
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input'); //subscribe to observable that is returned
        this.createAutocomplete1(this.addressElement).subscribe(function (location) {
            console.log('Second Search', location);
            _this.Destination = new google.maps.LatLng(location.lat(), location.lng()); //Destination marker location
            var options = {
                center: _this.Destination,
                zoom: 13
            };
            _this.map.setOptions(options); //reset zoom and focus to Destination marker using options abov
            // this.addMarker(this.Dest, "Destination",this.marker2  );
            _this.marker2 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Destination,
                draggable: true
            });
            _this.addInfoWindow(_this.marker2, "Destination"); //info shown when marker is clicked
        });
    };
    CreatePage.prototype.findPath = function () {
        var _this = this;
        //this.getDistance();
        if (this.marker2 != null) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay_1 = new google.maps.DirectionsRenderer;
            this.map = new google.maps.Map(document.getElementById('mapCreatePackage'), {
                zoom: 9,
                center: { lat: 31.4826352, lng: 74.0712721 }
            }); //new map
            directionsDisplay_1.setMap(this.map); //set direction diplay method to show on this map
            directionsService.route({
                origin: this.Source,
                destination: this.Destination,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay_1.setDirections(response); //diplay directions
                    //console.log(response.routes[0].legs[0].distance.value / 1000)
                    _this.distancePackage = response.routes[0].legs[0].distance.value / 1000;
                    console.log(_this.distancePackage);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    };
    // getDistance(){
    //   let service = new google.maps.DistanceMatrixService();
    //     service.getDistanceMatrix(
    //       {
    //         origins: [this.Source],
    //         destinations: [this.Destination],
    //         travelMode: google.maps.TravelMode.DRIVING,
    //         unitSystem: google.maps.UnitSystem.METRIC,
    //         avoidHighways: false,
    //         avoidTolls: false
    //       },(response, status)=>{      
    //         // console.log(response.rows[0].elements[0].distance.value)
    //         // console.log(JSON.parse(JSON.stringify(response.rows[0].elements[0].distance)));
    //         // console.log(JSON.parse(JSON.stringify(response.rows[0].elements[0].distance.text)));
    //         let stringser=JSON.parse(JSON.stringify(response.rows[0].elements[0].distance.value));
    //         this.distancePackage=JSON.parse(JSON.stringify(response.rows[0].elements[0].distance.value));
    //         console.log(this.distancePackage)
    //         // console.log(this.distance)
    //         // console.log(this.distance.text)
    //     });
    // }
    CreatePage.prototype.findPath1 = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.marker2 != null) {
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay_2 = new google.maps.DirectionsRenderer;
                _this.map1 = new google.maps.Map(document.getElementById('map1'), {
                    zoom: 9,
                    center: { lat: 31.4826352, lng: 74.0712721 }
                }); //new map
                directionsDisplay_2.setMap(_this.map1); //set direction diplay method to show on this map
                directionsService.route({
                    origin: _this.Source,
                    destination: _this.Destination,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay_2.setDirections(response); //diplay directions
                        //this.distance = response.routes[0].legs[0].distance.value / 1000;
                        console.log(response.routes[0].legs[0].distance.value / 1000);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }
        }, 1500);
    };
    CreatePage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                _this.SourceString = place.formatted_address;
                console.log("Hola" + place.formatted_address);
                //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
                if (!place) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    //console.log('Search', place.geometry.locat;
                    console.log('Search Lat', place.geometry.location.lat());
                    console.log('Search Lng', place.geometry.location.lng());
                    sub.next(place.geometry.location);
                    //sub.complete();
                }
            });
        });
    };
    CreatePage.prototype.createAutocomplete1 = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                _this.DestinationString = place.formatted_address;
                _this.routeerror = false;
                console.log("Hola" + place.formatted_address);
                //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
                if (!place) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    //console.log('Search', place.geometry.locat;
                    console.log('Search Lat', place.geometry.location.lat());
                    console.log('Search Lng', place.geometry.location.lng());
                    sub.next(place.geometry.location);
                    //sub.complete();
                }
            });
        });
    };
    CreatePage.prototype.initializeMap = function () {
        var mapEle = this.mapElement.nativeElement; //get map div
        this.map = new google.maps.Map(mapEle, {
            zoom: 12,
            center: { lat: 31.4826352, lng: 74.0712721 },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDoubleClickZoom: false,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: true,
        });
        this.getCurrentPosition(); //set the default location at the users current position
    };
    //Center zoom
    //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
    CreatePage.prototype.bounceMap = function (markers) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        this.map.fitBounds(bounds);
    };
    CreatePage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
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
    CreatePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    // go show currrent location
    CreatePage.prototype.getCurrentPosition = function () {
        var _this = this;
        var locationOptions = { timeout: 10000 };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);
            _this.Source = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: _this.Source,
                zoom: 12
            };
            _this.map.setOptions(options); //set new options to map
            _this.marker1 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Source,
                draggable: true
            });
            console.log("this is the lat" + _this.marker1.getPosition().lat());
            console.log("this is the lng" + _this.marker1.getPosition().lng());
        }),
            function (error) {
                //     this.loading.dismiss().then(() => {
                //     this.showToast('Location not found. Please enable your GPS!');
                //     this.loading.dismiss();
                //     console.log(error);
                //   });
                console.log(error);
            };
    };
    CreatePage.prototype.toggleSearch = function () {
        if (this.search) {
            this.search = false;
        }
        else {
            this.search = true;
        }
    };
    CreatePage.prototype.addMarker = function (position, content) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            draggable: true
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    CreatePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    //_________________________________________________________________________________________________________________
    CreatePage.prototype.segmentchanged = function ($event) {
        console.log(event);
    };
    // getpackage(){//try code
    //   this.http.get('http://localhost:5000/getpackageid').map(res => res.json()).subscribe(data => {
    //     this.lastrecord = data.content;
    //     console.log(data.content)
    //   err => {
    //       console.log('error');
    //   }});
    // }
    CreatePage.prototype.next = function () {
        var _this = this;
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
                this.Screen4 = false;
            }
            return;
        }
        if (this.CurrentScreen == "S5") {
            this.Screen5 = true;
            if (this.CourierType != null || this.VehicleType != null) {
                this.http.get('http://localhost:5000/getfare', { params: { 'Distance': this.distancePackage, 'vehicle': this.VehicleType } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log('Fare is ' + data);
                    _this.fare = Math.round(data.fare);
                    console.log(_this.fare);
                }, function (err) {
                    console.log(err);
                });
                this.CurrentScreen = "S6";
                this.Screen5 = false;
                this.Scr6 = false;
                this.findPath1();
            }
            return;
        }
        if (this.CurrentScreen == "S1") {
            this.Screen1 = true;
            this.findPath();
            if (this.Source != null && this.Destination != null) {
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
    };
    CreatePage.prototype.prev = function () {
        if (this.CurrentScreen == "S2") {
            this.CurrentScreen = "S1";
            return;
        }
        if (this.CurrentScreen == "S3") {
            this.CurrentScreen = "S2";
            return;
        }
        if (this.CurrentScreen == "S4") {
            this.CurrentScreen = "S3";
            return;
        }
        if (this.CurrentScreen == "S5") {
            this.CurrentScreen = "S4";
            return;
        }
        if (this.CurrentScreen == "S6") {
            this.Scr6 = false;
            this.Scr6 = true;
            this.CurrentScreen = "S5";
            return;
        }
    };
    CreatePage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    CreatePage.prototype.save = function () {
    };
    CreatePage.prototype.presentActionSheet = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    CreatePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 10,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    console.log(currentName);
                    console.log(correctPath);
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //this.lastImage1 = currentName;
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
            console.log(err);
        });
    };
    CreatePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    CreatePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage1 = newFileName;
            _this.ImagePath = _this.pathForImage(_this.lastImage1);
        }, function (error) {
            _this.presentToast('Error while storing file.');
            console.log(error);
        });
    };
    CreatePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    CreatePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    CreatePage.prototype.upload = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: this.lastImage1,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/imageupload?type=' + 'Package', options, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    CreatePage.prototype.formSubmit = function () {
        var _this = this;
        this.upload();
        var Userdata;
        var Src = JSON.parse(JSON.stringify(this.Source));
        var Dst = JSON.parse(JSON.stringify(this.Destination));
        var SLat = Src["lat"];
        var SLng = Src["lng"];
        var DLat = Dst["lat"];
        var DLng = Dst["lng"];
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            if (_this.TransportType == 'Freelance') {
                Userdata = {
                    'PackageID': 0,
                    'PackageName': _this.PackageName.value,
                    'PackageDesc': _this.PackageDesc.value,
                    'PickAddress': _this.SourceString,
                    'DestAddress': _this.DestinationString,
                    'PackageSize': _this.PackageSize,
                    'TransportType': _this.TransportType,
                    'VehicleType': _this.VehicleType,
                    'SourceLongitude': SLng,
                    'SourceLatitude': SLat,
                    'DestinationLongitude': DLng,
                    'DestinationLatitude': DLat,
                    'TransporterID': null,
                    'SenderID': _this.ID,
                    'Status': "Active",
                    'PImage': _this.lastImage1,
                    'Fare': _this.fare,
                    'Distance': _this.distancePackage,
                    'Verificationkey': "sa",
                };
            }
            else {
                Userdata = {
                    'PackageID': 0,
                    'PackageName': _this.PackageName.value,
                    'PackageDesc': _this.PackageDesc.value,
                    'PickAddress': _this.SourceString,
                    'DestAddress': _this.DestinationString,
                    'PackageSize': _this.PackageSize,
                    'TransportType': _this.TransportType,
                    'CourierType': _this.CourierType,
                    'SourceLongitude': Src["lng"],
                    'SourceLatitude': Src["lat"],
                    'DestinationLongitude': Dst["lng"],
                    'DestinationLatitude': Dst["lat"],
                    'TransporterID': null,
                    'SenderID': _this.ID,
                    'Status': "Active",
                    'PImage': _this.lastImage1,
                    'Fare': _this.fare,
                    'Distance': _this.distancePackage,
                };
            }
            console.log(Userdata);
            _this.http.post('http://localhost:5000/createpackage', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
                var responseData = data;
                console.log(responseData);
                //this.presentToast("Your Package has been created!");
                var data1 = {
                    name: data.content
                };
                _this.navCtrl.getPrevious().data.thing1 = data1;
                _this.navCtrl.pop();
            }, function (err) {
                //this.presentToast("Your Package was not created");
                console.log(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mapCreatePackage'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreatePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreatePage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar1', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreatePage.prototype, "searchbar1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('signupSlider'),
        __metadata("design:type", Object)
    ], CreatePage.prototype, "signupSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreatePage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('navbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Navbar */])
    ], CreatePage.prototype, "navBar", void 0);
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"Y:\Users\src\pages\create\create.html"*/'<!--\n\n  Generated template for the CreatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header mode="ios">\n\n\n\n  <ion-navbar #navbar mode="ios">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title mode="ios">Create Package</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top mode="ios">\n\n    <ion-segment (ionChange)="updatePage(CurrentScreen)" mode="ios" [(ngModel)]="CurrentScreen">\n\n      <ion-segment-button value="S1" disabled="true">Step 1\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S2" disabled="true">Step 2\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S3" disabled="true">Step 3\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S4" disabled="true">Step 4\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S5" disabled="true">Step 5\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S6" disabled="true">Step 6\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bgg">\n\n\n\n  <div [ngSwitch]="CurrentScreen">\n\n    <ion-list (onCreate)="loadMaps()" no-padding *ngSwitchCase="\'S1\'">\n\n     \n\n\n\n          \n\n          <ion-searchbar class="searchbars" #searchbar1 placeholder="Enter Location:"></ion-searchbar>\n\n          <ion-item></ion-item>\n\n          <ion-searchbar class="searchbars" #searchbar placeholder="Enter Destination:"></ion-searchbar>\n\n           \n\n          <ion-card id="mapCreatePackage" #mapCreatePackage></ion-card>\n\n          \n\n          <br>\n\n          <br>\n\n          <br>\n\n          <ion-item *ngIf="routeerror">\n\n            <p ion-text color="danger">*Please enter the Source \& Destination</p>\n\n          </ion-item>\n\n          <button ion-button (click)=findPath()>Find Path</button>\n\n        \n\n          <ion-card id="positionText">\n\n            <ion-textarea id="textDisplay"></ion-textarea>\n\n          </ion-card>\n\n         \n\n       \n\n      <!-- <ion-item>\n\n            <ion-label floating>Pickup Address: </ion-label>\n\n            <ion-textarea formControlName="PickAddress"></ion-textarea>\n\n          </ion-item>\n\n          <ion-item *ngIf="(PickAddress.hasError(\'required\')  && Screen4)">\n\n              <p ion-text color="danger">*Please enter Pickup Address</p>\n\n            </ion-item>\n\n    \n\n          <ion-item>\n\n            <ion-label floating>Destination Address: </ion-label>\n\n            <ion-textarea formControlName="DestAddress"></ion-textarea>\n\n          </ion-item>\n\n          <ion-item *ngIf="(DestAddress.hasError(\'required\')  && Screen4)">\n\n              <p ion-text color="danger">*Please enter Destination Address</p>\n\n            </ion-item>\n\n    \n\n          <ion-item>\n\n            <img src="./assets/imgs/maps.png">\n\n          </ion-item> -->\n\n\n\n      <!-- <ion-row>\n\n              <ion-col col-6>\n\n                  <button full ion-button (click)="prev()">PREVIOUS</button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button full ion-button (click)="next()">NEXT</button>\n\n                \n\n            </ion-col>\n\n            </ion-row> -->\n\n    </ion-list>\n\n    <ion-list no-padding *ngSwitchCase="\'S2\'">\n\n      <ion-card>\n\n\n\n        <img src="{{ImagePath}}" *ngIf="lastImage1!=null">\n\n        <ion-grid>\n\n        <ion-row align-items-center>\n\n            <button  class="buttonImage" ion-button round full large icon-only color="primary" (click)="presentActionSheet(1)">\n\n                <ion-icon class="photo1" name="add-circle" large></ion-icon>\n\n              </button>\n\n        </ion-row>\n\n      </ion-grid>\n\n        \n\n          \n\n      \n\n        <!-- <ion-row>\n\n          <button ion-button full icon-left (click)="presentActionSheet(1)">\n\n            <ion-icon name="camera"></ion-icon>Select Image\n\n          </button>\n\n        </ion-row> -->\n\n        <ion-item *ngIf="imageerror">\n\n          <p ion-text color="danger">*Please take an image of the package</p>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <form [formGroup]="data">\n\n      <ion-list no-lines *ngSwitchCase="\'S3\'">\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label floating>Package Name</ion-label>\n\n              <ion-input type="text" formControlName="PackageName"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="(PackageName.hasError(\'required\')  && Screen3)">\n\n              <p ion-text color="danger">*Please enter Package Name</p>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label floating>Description</ion-label>\n\n              <ion-textarea formControlName="PackageDesc"></ion-textarea>\n\n            </ion-item>\n\n            <ion-item *ngIf="(PackageDesc.hasError(\'required\')  && Screen3)">\n\n              <p ion-text color="danger">*Please enter Package Description</p>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-label class="lbl">Package size</ion-label>\n\n        <ion-item *ngIf="PackageSize == null && Screen3">\n\n          <p ion-text color="danger">*Please choose Package size</p>\n\n        </ion-item>\n\n        <div class="cc-selector">\n\n          <ion-list no-padding>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="mail" name="PackageSize" [(ngModel)]="PackageSize" [ngModelOptions]="{standalone: true}" type="radio" value="Small">\n\n                    <label class="drinkcard-cc mail" for="mail"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n\n\n              <ion-col col-6>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="box" name="PackageSize" [(ngModel)]="PackageSize" [ngModelOptions]="{standalone: true}" type="radio" value="Medium">\n\n                    <label class="drinkcard-cc box" for="box"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="tv" name="PackageSize" [(ngModel)]="PackageSize" [ngModelOptions]="{standalone: true}" type="radio" value="Large">\n\n                    <label class="drinkcard-cc tv" for="tv"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="chair" name="PackageSize" type="radio" value="X-Large">\n\n                    <label class="drinkcard-cc chair" for="chair"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-list>\n\n        </div>\n\n\n\n\n\n      </ion-list>\n\n\n\n\n\n      <ion-list no-lines *ngSwitchCase="\'S4\'">\n\n        <div class="center">\n\n          <ion-label class="lbl">Select Transport Type</ion-label>\n\n        </div>\n\n\n\n\n\n        <ion-list class="donate-now">\n\n\n\n\n\n          <ion-item>\n\n            <input id="Freelance" name="TransportType" [(ngModel)]="TransportType" [ngModelOptions]="{standalone: true}" type="radio"\n\n              value="Freelance" />\n\n            <label for="Freelance">Freelancer</label>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <input id="CourierService" name="TransportType" [(ngModel)]="TransportType" [ngModelOptions]="{standalone: true}" type="radio"\n\n              value="CourierService" />\n\n            <label for="CourierService">Courier Service</label>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="TransportType == null && Screen4">\n\n            <p ion-text color="danger">*Please choose Delivery Type</p>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-item>\n\n          <p ion-text>Contact Customer Support of Expensive Items</p>\n\n        </ion-item>\n\n\n\n    \n\n\n\n      </ion-list>\n\n\n\n      <!-- Insert the cc selector here -->\n\n\n\n      <ion-list no-lines *ngSwitchCase="\'S5\'">\n\n\n\n        <div *ngIf="TransportType === \'Freelance\'">\n\n          <div class="center">\n\n            <ion-label class="lbl">Select Vehicle Type</ion-label>\n\n          </div>\n\n          <div class="cc-selector">\n\n            <ion-row *ngIf="PackageSize === \'Small\'">\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="Bike" name="TransportType" [(ngModel)]="VehicleType" [ngModelOptions]="{standalone: true}" type="radio" value="Bike">\n\n                  <label class="drinkcard-cc Bike" for="Bike"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-row>\n\n\n\n            <ion-row *ngIf="PackageSize === \'Small\' || PackageSize === \'Medium\' || PackageSize === \'Large\'">\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="Car" name="TransportType" [(ngModel)]="VehicleType" [ngModelOptions]="{standalone: true}" type="radio" value="Car">\n\n                  <label class="drinkcard-cc Car" for="Car"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-row>\n\n\n\n            <ion-row *ngIf="PackageSize === \'Large\' || PackageSize === \'X-Large\'">\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="Pickup" name="TransportType" [(ngModel)]="VehicleType" [ngModelOptions]="{standalone: true}" type="radio" value="Pickup">\n\n                  <label class="drinkcard-cc Pickup" for="Pickup"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-row>\n\n\n\n            <ion-row *ngIf="PackageSize === \'X-Large\'">\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="Truck" name="TransportType" [(ngModel)]="VehicleType" [ngModelOptions]="{standalone: true}" type="radio" value="Truck">\n\n                  <label class="drinkcard-cc Truck" for="Truck"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-row>\n\n\n\n            <ion-item *ngIf="VehicleType == null && Screen5">\n\n\n\n              <p ion-text color="danger">*Please choose Transport Type</p>\n\n            </ion-item>\n\n          </div>\n\n        </div>\n\n        <div *ngIf="TransportType === \'CourierService\'">\n\n          <div class="cc-selector">\n\n            <ion-item class="center">\n\n              <ion-label class="lbl">\n\n                Select Courier Service\n\n              </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-card>\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="DHL" name="TransportType" [(ngModel)]="CourierType" [ngModelOptions]="{standalone: true}" type="radio" value="DHL">\n\n                  <label class="drinkcard-cc DHL" for="DHL"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-card>\n\n\n\n\n\n\n\n            <ion-card>\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="TCS" name="TransportType" [(ngModel)]="CourierType" [ngModelOptions]="{standalone: true}" type="radio" value="TCS">\n\n                  <label class="drinkcard-cc TCS" for="TCS"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-card>\n\n\n\n\n\n\n\n            <ion-card>\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="UPS" name="TransportType" [(ngModel)]="CourierType" [ngModelOptions]="{standalone: true}" type="radio" value="UPS">\n\n                  <label class="drinkcard-cc UPS" for="UPS"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-card>\n\n\n\n\n\n\n\n            <ion-card>\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="Leopard" name="TransportType" [(ngModel)]="CourierType" [ngModelOptions]="{standalone: true}" type="radio" value="Leopard">\n\n                  <label class="drinkcard-cc Leopard" for="Leopard"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-card>\n\n\n\n\n\n\n\n            <ion-card>\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="MP" name="TransportType" [(ngModel)]="CourierType" [ngModelOptions]="{standalone: true}" type="radio" value="MP">\n\n                  <label class="drinkcard-cc MP" for="MP"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-card>\n\n\n\n\n\n\n\n            <ion-card>\n\n              <ion-item>\n\n                <!-- insert buttons stacked here -->\n\n                <div class="center">\n\n                  <input id="FedEx" name="TransportType" [(ngModel)]="CourierType" [ngModelOptions]="{standalone: true}" type="radio" value="FedEx">\n\n                  <label class="drinkcard-cc FedEx" for="FedEx"></label>\n\n                </div>\n\n              </ion-item>\n\n            </ion-card>\n\n            <ion-item *ngIf="CourierType == null && Screen5">\n\n              <p ion-text color="danger">*Please choose Courier Brand</p>\n\n            </ion-item>\n\n\n\n          </div>\n\n        </div>\n\n\n\n      </ion-list>\n\n\n\n\n\n\n\n      <div *ngSwitchCase="\'S6\'">\n\n        <ion-scroll scrollY="true">\n\n          <ion-card>\n\n\n\n            <img src={{ImagePath}}>\n\n\n\n\n\n\n\n            <ion-item>\n\n              <h2>Package Name:</h2>\n\n              <ion-note item-end>{{this.PackageName.value}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-note item-end>{{this.PackageDesc.value}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n              <h2>Cost</h2>\n\n              <ion-note item-end>{{this.fare}}</ion-note>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <h2>Size:</h2>\n\n              <ion-note item-end>{{this.PackageSize}}</ion-note>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <h2>Delivery Type:</h2>\n\n              <ion-note item-end> {{this.TransportType}} </ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n              <h2>Transport Type:</h2>\n\n              <ion-note item-end> {{this.VehicleType}} </ion-note>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n\n\n          <ion-card>\n\n            <ion-item>\n\n              <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n              <h2 ion-text>{{SourceString}}</h2>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n              <h2 ion-text>{{DestinationString}}</h2>\n\n            </ion-item>\n\n\n\n\n\n\n\n          </ion-card>\n\n          <ion-card>\n\n            <div id="map1" #map1 (onCreate)="findPath1()"></div>\n\n\n\n          </ion-card>\n\n\n\n\n\n          <!-- <button ion-button full color="secondary" type="submit">CREATE</button> -->\n\n        </ion-scroll>\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button full ion-button (click)="prev()">PREVIOUS</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button full ion-button (click)="next()" *ngIf="Scr6">NEXT</button>\n\n      <button ion-button full color="secondary" type="submit" *ngIf="!Scr6" (click)="formSubmit()">CREATE</button>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"Y:\Users\src\pages\create\create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.NotificationData = [];
        this.storage.get('NotificationData').then(function (val) {
            _this.NotificationData = val;
            console.log(val);
        });
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.removeNotification = function (index) {
        console.log(index);
        this.NotificationData.splice(index, 1);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"Y:\Users\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\' class="textcolor"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Notifications\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="hh">\n\n  \n\n  <ion-card *ngFor="let item of NotificationData, let i= index">\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon class="icon" name="paper-plane"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <h3>{{item}}</h3>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n          <button ion-button icon-only color="dark" round (click)="removeNotification(i)">\n\n        <ion-icon class="icon"  ios="ios-close" md="md-close"></ion-icon>\n\n      </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"Y:\Users\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_active_active__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LandingPage = (function () {
    function LandingPage(toastCtrl, navCtrl, navParams, zone, alertCtrl, loadingCtrl, geolocation, platform, storage) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.storage = storage;
        this.markers = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_7_Firebase__["database"]().ref('geolocations/'); //assign data base to store gelocation
        this.presentLoadingDefault();
        this.storage.get('ID').then(function (val) {
            //console.log('ID is +',val);
        });
        this.getArrayref();
        this.observer = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(3000).subscribe(function () {
            _this.ref.on('value', function (resp) {
                _this.deleteMarkers();
                _this.snapshotToArray(resp).forEach(function (data) {
                    // let image = 'assets/imgs/green-bike.png';
                    var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                    // if(this.mapsetter){
                    //   this.initMap(updatelocation);
                    //   this.mapsetter = false;
                    // }
                    //console.log(updatelocation);
                    _this.addMarker(updatelocation);
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
    LandingPage.prototype.ionViewWillEnter = function () {
        this.thing1 = null;
        this.thing1 = this.navParams.get('thing1') || null;
        if (this.thing1 != null) {
            this.presentConfirm(this.thing1.name);
        }
    };
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.ionViewDidLeave = function () {
        console.log("Looks like I'm about to leave :(");
        this.observer.unsubscribe(); //unsubsribe to geolocation tracking
    };
    LandingPage.prototype.presentConfirm = function (name) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Success!',
            message: 'Your Package ' + name + ' was created successfully. Would you like to view it?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_active_active__["a" /* ActivePage */]);
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        alert.present();
        this.thing1 = null;
    };
    LandingPage.prototype.stop = function () {
        this.observer.unsubscribe(); //unsubsribe to geolocation tracking
    };
    LandingPage.prototype.opencreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_create__["a" /* CreatePage */]);
    };
    LandingPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.platform.ready().then(function () { return _this.loadMaps(); });
        }, 2000);
    };
    LandingPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            // this.initAutocomplete();
            // console.log("Hellooo");
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    LandingPage.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }
            ]
        });
        alert.present();
    };
    LandingPage.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: {
                url: 'assets/imgs/ss.png'
            }
            // icon: image
        });
        this.markers.push(marker);
        //this.map.setCenter(marker.getPosition());
    };
    LandingPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    LandingPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    LandingPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    LandingPage.prototype.getArrayref = function () {
        this.snapshotToArray = function (snapshot) {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                //console.log(item);
                //console.log("value of item"+childSnapshot.toJSON());  
                item.key = childSnapshot.key;
                //  console.log("value of item.key"+item.key);
                returnArr.push(item);
                // console.log("hello hey whtsupp"); 
            });
            return returnArr;
        };
    };
    LandingPage.prototype.initializeMap = function () {
        var _this = this;
        if (this.mapElement) {
            this.zone.run(function () {
                var mapEle = _this.mapElement.nativeElement;
                _this.map = new google.maps.Map(mapEle, {
                    zoom: 12,
                    center: { lat: 31.5360264, lng: 74.4069842 },
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    // styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                    disableDoubleClickZoom: false,
                    disableDefaultUI: true,
                    zoomControl: true,
                    scaleControl: true,
                });
                _this.getCurrentPosition();
            });
        }
    };
    LandingPage.prototype.addMarker1 = function (position, content) {
        //console.log("add marker"); 
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position
        });
        return marker;
    };
    LandingPage.prototype.getCurrentPosition = function () {
        var _this = this;
        //console.log("get current pos"); 
        this.geolocation.getCurrentPosition().then(function (position) {
            //console.log(position.coords.latitude, position.coords.longitude);
            var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: myPos,
                zoom: 10
            };
            _this.map.setOptions(options);
            _this.addMarker1(myPos, "I am Here!");
        }, function (err) {
            console.log(err);
        });
    };
    LandingPage.prototype.dummymarkers = function () {
        //var image = './assets/imgs/dummy.png';
        var beachMarker = new google.maps.Marker({
            position: { lat: 31.5360264, lng: 74.4069842 },
            map: this.map,
            icon: {
                url: 'assets/imgs/ss.png'
            }
        });
        //console.log("dummy markers"); 
    };
    LandingPage.prototype.customeMarker = function (position) {
        //let image = './assets/imgs/dummy.png';
        var beachMarker = new google.maps.Marker({
            position: position,
            map: this.map,
            animation: google.maps.Animation.DROP,
            icon: {
                url: 'assets/imgs/ss.png'
            }
        });
        return beachMarker;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mapLanding'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LandingPage.prototype, "mapElement", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"Y:\Users\src\pages\landing\landing.html"*/'<ion-header >\n\n  <ion-navbar >\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\' class="textcolor"></ion-icon>\n\n        </button>\n\n    <ion-title >\n\n     Home\n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n    <div class="mapLanding">\n\n      </div>\n\n      <div  id="mapLanding" #mapLanding></div>\n\n\n\n      \n\n\n\n</ion-content>\n\n<ion-footer class="menuebg">\n\n  <button ion-button full block color="secondary" (click)="opencreate()">Create</button>\n\n\n\n</ion-footer>'/*ion-inline-end:"Y:\Users\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"Y:\Users\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"Y:\Users\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InprogressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livetrack_livetrack__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InprogressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InprogressPage = (function () {
    function InprogressPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.nodata = false;
        this.storage.get('ID').then(function (val) {
            _this.SenderID = val;
            var sub = _this.http.get('http://localhost:5000/intransit', { params: { 'SenderID': _this.SenderID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data['content'] == "failed") {
                    _this.nodata = true;
                }
                else {
                    _this.intransitdata = data;
                }
                console.log(_this.intransitdata);
            }, function (err) {
                console.log(err);
            });
        });
    }
    InprogressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InprogressPage');
    };
    InprogressPage.prototype.viewLive = function (ID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livetrack_livetrack__["a" /* LivetrackPage */], {
            data: ID,
        });
    };
    InprogressPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('refreshing', refresher);
        this.intransitdata = [];
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.storage.get('ID').then(function (val) {
                _this.SenderID = val;
                var sub = _this.http.get('http://localhost:5000/intransit', { params: { 'SenderID': _this.SenderID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data['content'] == "failed") {
                        _this.nodata = true;
                    }
                    else {
                        _this.intransitdata = data;
                    }
                    console.log(_this.intransitdata);
                }, function (err) {
                    console.log(err);
                });
            });
            refresher.complete();
        }, 2000);
    };
    InprogressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inprogress',template:/*ion-inline-start:"Y:\Users\src\pages\inprogress\inprogress.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>In Transit</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bgg">\n\n  \n\n  <div *ngIf="!nodata">\n\n    <ion-list *ngFor="let item of intransitdata">\n\n    <ion-card>\n\n        <div style="position: relative">\n\n      <img src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n      <ion-fab  right top>\n\n        <button class="buttoncolor" ion-fab>\n\n          <ion-icon name="trash" ></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n  </div>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2>{{item.PickAddress}}</h2>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2>{{item.DestAddress}}</h2>\n\n      </ion-item>\n\n  \n\n      <button class="colornavbar" ion-button full (click)="viewLive(item.TransporterID)">\n\n        View Live\n\n      </button>\n\n    </ion-card>\n\n  </ion-list>\n\n  </div>\n\n  <div *ngIf="nodata" class="nodata">\n\n    <ion-label >No Package Intransit Right Now!</ion-label>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"Y:\Users\src\pages\inprogress\inprogress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], InprogressPage);
    return InprogressPage;
}());

//# sourceMappingURL=inprogress.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, http, storage, alertCtrl, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.data = this.formBuilder.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^.{6,15}$')])],
        });
        this.submitAttempted = false;
        this.Email = this.data.controls['Email'];
        this.Password = this.data.controls['Password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logForm = function () {
        var _this = this;
        this.submitAttempted = true;
        if (this.Email.hasError('required') || this.Email.hasError('email')) {
            console.log("Email error");
            return;
        }
        else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
            console.log("password error");
            return;
        }
        var Userdata = {
            'Email': this.Email.value,
            'Password': this.Password.value,
        };
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        setTimeout(100);
        // this.storage.set('Name',this.Email.value);
        // this.storage.set('Password',this.Password.value);
        console.log(Userdata);
        this.http.post('http://localhost:5000/loginsender', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            if (responseData.Error != "none") {
                _this.loading.dismissAll();
                _this.presentErrorAlert(responseData.Error);
            }
            else {
                _this.dataloaded(responseData).then(function () {
                    _this.events.publish('user:loggedin', "dataloaded"); //to set data values
                    _this.loading.dismissAll(); //dismiss loading
                    console.log("whysda");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]); //go to home page
                });
            }
        }, function (err) {
            console.log('error');
        });
        return;
    };
    LoginPage.prototype.dataloaded = function (responseData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.storage.set('Name', responseData.content[0].Name);
            console.log("vals");
            console.log(responseData.content[0].Name);
            _this.storage.set('Email', responseData.content[0].Email);
            _this.storage.set('Password', responseData.content[0].Password);
            _this.storage.set('ID', responseData.content[0].ID);
            _this.storage.set('Rating', responseData.content[0].Rating);
            _this.storage.set('FCMToken', responseData.content[0].FCMToken);
            _this.storage.set('ProfileImage', responseData.content[0].ProfilePicture);
            console.log(responseData.content[0].ProfilePicture);
            var Notifications = [];
            _this.storage.set('NotificationData', Notifications); //try to make this global 
            setTimeout(function () {
                resolve();
            }, 2000); //wait just in case
        });
    };
    LoginPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.signuppage = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"Y:\Users\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background" padding>\n\n  <div class="forms">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-10>\n\n          <img src="assets/imgs/dndlogo.png">\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <form [formGroup]="data" (ngSubmit)="logForm()">\n\n      <ion-item class="background">\n\n        <ion-label color="light" floating>Email</ion-label>\n\n        <ion-input class="inputs" type="email" formControlName="Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="errors" *ngIf="Email.hasError(\'required\') && submitAttempted">\n\n        <p class="inputs" ion-text color="danger">*Please enter email</p>\n\n      </ion-item>\n\n      <ion-item class="background">\n\n        <ion-label color="light" floating>Password</ion-label>\n\n        <ion-input class="inputs" type="password" formControlName="Password"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="errors" *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n\n        <p class="inputs" ion-text color="danger"> *Password minimum length 6</p>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n        <button ion-button color="secondary" type="submit" block>Login</button>\n\n      </ion-row>\n\n    </form>\n\n    <button ion-button (click)="signuppage()" block>SignUp</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"Y:\Users\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_packagedetail_packagedetail__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingPage = (function () {
    function PendingPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.delivereddata = [];
        this.nodata = false;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            var sub = _this.http.get('http://localhost:5000/delivered', { params: { 'SenderID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data['content'] == "failed") {
                    _this.nodata = true;
                }
                else {
                    data.map(function (item) {
                        _this.delivereddata.push(item);
                    });
                }
                console.log(_this.delivereddata);
            }, function (err) {
                console.log(err);
            });
        });
    }
    PendingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingPage');
    };
    PendingPage.prototype.packagedetails = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */], this.delivereddata[i]);
    };
    PendingPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('refreshing', refresher);
        this.delivereddata = [];
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/delivered', { params: { 'SenderID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data['content'] == "failed") {
                        _this.nodata = true;
                    }
                    else {
                        data.map(function (item) {
                            _this.delivereddata.push(item);
                        });
                    }
                    console.log(_this.delivereddata);
                }, function (err) {
                    console.log(err);
                });
            });
            refresher.complete();
        }, 2000);
    };
    PendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pending',template:/*ion-inline-start:"Y:\Users\src\pages\pending\pending.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>Delivered Packages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bgg">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n          pullingIcon="arrow-dropdown"\n\n          pullingText="Pull to refresh"\n\n          refreshingSpinner="circles"\n\n          refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n  <div *ngIf="!nodata">\n\n    \n\n    <ion-card *ngFor="let item of delivereddata, let i= index">\n\n        <div style="position: relative">\n\n      <img src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n  </div>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2>{{item.PickAddress}}</h2>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2>{{item.DestAddress}}</h2>\n\n      </ion-item>\n\n  \n\n      <button class="colornavbar" ion-button full (click)="packagedetails(i)">\n\n        View Details\n\n      </button>\n\n    </ion-card>\n\n  \n\n  </div>\n\n  <div *ngIf="nodata" class="nodata">\n\n    <p ion-text >No Packages to Display</p>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"Y:\Users\src\pages\pending\pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PendingPage);
    return PendingPage;
}());

//# sourceMappingURL=pending.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.setValues = false;
        this.getData().then(function () {
            _this.setValues = true;
        });
    }
    ProfilePage.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('ID').then(function (val) {
                _this.id = val;
                console.log('ID is +', _this.id);
                _this.http.get('http://localhost:5000/senderprofile', { params: { 'SenderID': _this.id } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.activedata = data;
                    console.log(_this.activedata);
                    _this.name = data.content[0].Name;
                    _this.phoneno = data.content[0].Phone;
                    _this.email = data.content[0].Email;
                    _this.address = data.content[0].Address;
                    _this.image = data.content[0].ProfilePicture;
                    resolve();
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getProfile = function (id) {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"Y:\Users\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf="setValues" class="background1" padding>\n\n  <ion-card class="cards">\n\n    \n\n  <ion-item>\n\n    <ion-avatar *ngIf="setValues" item-start>\n\n      <img class="round" src="http://localhost:5000/getProfilePhoto/{{image}}" />\n\n    </ion-avatar>\n\n    <label class="headerlabel">Name</label>\n\n    <p class="contents">{{name}}</p>\n\n    <label class="headerlabel">Contact Info</label>\n\n    <p class="contents">{{phoneno}}</p>\n\n    <label class="headerlabel">Email</label>\n\n    <p class="contents">{{email}}</p>\n\n    <label class="headerlabel">Address</label>\n\n    <p class="contents">{{address}}</p>\n\n  </ion-item>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"Y:\Users\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewtransporterprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__livetrack_livetrack__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ViewtransporterprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewtransporterprofilePage = (function () {
    function ViewtransporterprofilePage(navCtrl, navParams, storage, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.userReviews = [];
        this.dataLoaded = false;
        this.onload().then(function () {
            _this.http.get('http://localhost:5000/getransporterdata', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response.content);
                _this.name = response.content[0].Name;
                console.log(_this.name);
                _this.contantInfo = response.content[0].Phone;
                console.log(_this.contantInfo);
                _this.rating = Array(response.content[0].Rating).fill(response.content[0].Rating);
                console.log(_this.rating);
                _this.clearenceDue = response.content[0].ClearenceDue;
                console.log(_this.clearenceDue);
                _this.cancelledPackages = response.content[0].CancelledPackages;
                _this.activePackages = response.content[0].ActivePackages;
                console.log(_this.cancelledPackages);
                _this.profileImage = response.content[0].ProfileImage;
            }, function (err) {
                console.log('error');
            });
            /*_______________________________________________________________________________________________________________*/
            _this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    //console.log(item['rating'])
                    item['ratings'] = Array(item['rating']).fill(item['rating']);
                    //console.log("After"+item['ratings'])
                    //console.log(item)
                    _this.userReviews.push(item);
                    console.log("yohoo");
                });
            }, function (err) {
                console.log('error');
            });
        });
        this.dataLoaded = true;
        this.skips = 0;
        /*get Transporter ID from localstorage and  request data and put it into variables to show in view________________*/
    }
    ViewtransporterprofilePage.prototype.onload = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Transporterparams = _this.navParams.get('transporter');
            _this.ID = _this.Transporterparams.TransporterID;
            console.log(_this.Transporterparams.TransporterID);
            console.log("inhere");
            resolve();
        });
    };
    ViewtransporterprofilePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.infiniteScroll = infiniteScroll;
        this.skips = this.skips + 3;
        console.log("skips", this.skips);
        var length = this.userReviews.length;
        setTimeout(function () {
            _this.http.get('http://localhost:5000/getReviews', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    item['ratings'] = Array(item['rating']).fill(item['rating']);
                    _this.userReviews.push(item);
                });
                if (response.content == '') {
                    console.log("End reached");
                }
            }, function (err) {
                console.log('error');
            });
            if (length == _this.userReviews.length) {
                _this.presentErrorAlert("There are no more packages left to show");
                infiniteScroll.enable(false);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 300);
    };
    ViewtransporterprofilePage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ViewtransporterprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ViewtransporterprofilePage.prototype.accept = function () {
        var _this = this;
        var userdecision;
        userdecision = {
            'Status': 'accept',
            'PackageID': this.Transporterparams.PackageID,
            'TransporterID': this.Transporterparams.TransporterID,
        };
        // userdecision = {
        //     'Status': 'accept',
        //     'PackageID': 1,
        //     'TransporterID': 1,
        //   }
        this.http.put('http://localhost:5000/senderresponse', JSON.stringify(userdecision)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            console.log(responseData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__livetrack_livetrack__["a" /* LivetrackPage */], {
                data: _this.Transporterparams.TransporterID,
            });
        }, function (err) {
            console.log(err);
        });
    };
    ViewtransporterprofilePage.prototype.reject = function () {
        var userdecision;
        userdecision = {
            'Status': 'reject',
            'PackageID': this.Transporterparams.PackageID,
            'TransporterID': this.Transporterparams.TransporterID,
        };
        // userdecision = {
        //   'Status': 'accept',
        //   'PackageID': 1,
        //   'TransporterID': 1,
        // }
        this.http.post('http://localhost:5000/senderresponse', JSON.stringify(userdecision)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            console.log(responseData);
        }, function (err) {
            console.log(err);
        });
    };
    ViewtransporterprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewtransporterprofile',template:/*ion-inline-start:"Y:\Users\src\pages\viewtransporterprofile\viewtransporterprofile.html"*/'<!--\n\n  Generated template for the ViewtransporterprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>viewtransporterprofile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf="dataLoaded" padding class="background1">\n\n  <ion-card class="cards">\n\n      <ion-row>\n\n          <ion-col no-padding col-6>\n\n            <button ion-button full color="danger" (click)="reject()">REJECT</button>\n\n          </ion-col>\n\n  \n\n          <ion-col no-padding col-6>\n\n              <button ion-button full color="secondary" (click)="accept()">ACCEPT</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="round" src="http://localhost:5000/getProfilePhoto/{{profileImage}}" />\n\n      </ion-avatar>\n\n      <label class="headerlabel">Name</label>\n\n      <p class="contents">{{name}}</p>\n\n      <label class="headerlabel">Contact Info</label>\n\n      <p class="contents">{{contantInfo}}</p>\n\n      <label class="headerlabel">Rating</label>\n\n      <p><ion-icon name=\'star\' clear small class="rating" *ngFor="let rating of rating" ></ion-icon></p>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col col-12 class="card2">\n\n        <label class="headerlabel">Deliveries Done</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">0</ion-badge>\n\n          <!-- {{DeliveriesDone}} -->\n\n        </ion-row>\n\n      </ion-col>\n\n      <!-- <ion-col col-6 class="card2">\n\n        <label class="headerlabel">Clearence Due</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">{{clearenceDue}}</ion-badge>\n\n        </ion-row>\n\n      </ion-col> -->\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 class="card2">\n\n        <label class="headerlabel">Active Pakages</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">{{activePackages}}</ion-badge>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-6 class="card2">\n\n        <label class="headerlabel">Cancelled Packages</label>\n\n        <ion-row class="badge">\n\n          <ion-badge class="badgevalues">{{cancelledPackages}}</ion-badge>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-badge class="headings">Reviews</ion-badge>\n\n  </ion-card>\n\n  <ion-card *ngFor="let review of userReviews">\n\n    <ion-card-header>\n\n      <ion-icon name=\'star\' clear small class="rating" *ngFor="let rating of review.ratings"></ion-icon>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="contents">"{{review.content}}"</p>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"Y:\Users\src\pages\viewtransporterprofile\viewtransporterprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ViewtransporterprofilePage);
    return ViewtransporterprofilePage;
}());

//# sourceMappingURL=viewtransporterprofile.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/active/active.module": [
		476,
		13
	],
	"../pages/all/all.module": [
		477,
		12
	],
	"../pages/create/create.module": [
		478,
		11
	],
	"../pages/help/help.module": [
		479,
		10
	],
	"../pages/inprogress/inprogress.module": [
		480,
		9
	],
	"../pages/landing/landing.module": [
		481,
		8
	],
	"../pages/livetrack/livetrack.module": [
		482,
		7
	],
	"../pages/login/login.module": [
		483,
		6
	],
	"../pages/notification/notification.module": [
		484,
		5
	],
	"../pages/packagedetail/packagedetail.module": [
		485,
		4
	],
	"../pages/pending/pending.module": [
		486,
		3
	],
	"../pages/profile/profile.module": [
		487,
		2
	],
	"../pages/sign-up/sign-up.module": [
		488,
		1
	],
	"../pages/viewtransporterprofile/viewtransporterprofile.module": [
		489,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(325);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_create__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inprogress_inprogress__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pending_pending__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_help_help__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_active_active__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_all_all__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_packagedetail_packagedetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_viewtransporterprofile_viewtransporterprofile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_livetrack_livetrack__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_base64__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic2_rating__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inprogress_inprogress__["a" /* InprogressPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pending_pending__["a" /* PendingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_active_active__["a" /* ActivePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_all__["a" /* AllPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_viewtransporterprofile_viewtransporterprofile__["a" /* ViewtransporterprofilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_livetrack_livetrack__["a" /* LivetrackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/active/active.module#ActivePageModule', name: 'ActivePage', segment: 'active', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all/all.module#AllPageModule', name: 'AllPage', segment: 'all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inprogress/inprogress.module#InprogressPageModule', name: 'InprogressPage', segment: 'inprogress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/livetrack/livetrack.module#LivetrackPageModule', name: 'LivetrackPage', segment: 'livetrack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/packagedetail/packagedetail.module#PackagedetailPageModule', name: 'PackagedetailPage', segment: 'packagedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending/pending.module#PendingPageModule', name: 'PendingPage', segment: 'pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewtransporterprofile/viewtransporterprofile.module#ViewtransporterprofilePageModule', name: 'ViewtransporterprofilePage', segment: 'viewtransporterprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_31_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_inprogress_inprogress__["a" /* InprogressPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pending_pending__["a" /* PendingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_active_active__["a" /* ActivePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_all__["a" /* AllPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_viewtransporterprofile_viewtransporterprofile__["a" /* ViewtransporterprofilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_livetrack_livetrack__["a" /* LivetrackPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inprogress_inprogress__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pending_pending__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help_help__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_all_all__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_active_active__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_viewtransporterprofile_viewtransporterprofile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_interval__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var config = {
    apiKey: "AIzaSyDK3eYlkVHJTY83OOYXVIZQRq5C549pBcc",
    authDomain: "transporterdnd.firebaseapp.com",
    databaseURL: "https://transporterdnd.firebaseio.com",
    projectId: "transporterdnd",
    storageBucket: "transporterdnd.appspot.com",
    messagingSenderId: "680127595430"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, fcm, storage, http, events, alertCtrl) {
        var _this = this;
        this.fcm = fcm;
        this.storage = storage;
        this.http = http;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.NotificationData = [];
        this.loggedIn = false;
        platform.ready().then(function () {
            //Notifications
            __WEBPACK_IMPORTED_MODULE_16_Firebase__["initializeApp"](config); //intialise firebase
            _this.ref = __WEBPACK_IMPORTED_MODULE_16_Firebase__["database"]().ref('geolocations/'); //assign data base to store gelocation
            _this.loggedIn = false;
            //end notifications.
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get('Name').then(function (val) {
                if (val == null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]; //set landing page as login page
                    _this.loadData().then(function () {
                        console.log("inhere");
                        _this.updateToken();
                        _this.onNotification();
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]; //set landing page as home page
                    _this.getData().then(function () {
                        console.log("inhere");
                        // this.loggedIn = true;
                        _this.updateToken();
                        _this.onNotification();
                    });
                }
            });
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'All Packages', component: __WEBPACK_IMPORTED_MODULE_10__pages_all_all__["a" /* AllPage */] },
            { title: 'Active Packages', component: __WEBPACK_IMPORTED_MODULE_11__pages_active_active__["a" /* ActivePage */] },
            { title: 'In Transit', component: __WEBPACK_IMPORTED_MODULE_7__pages_inprogress_inprogress__["a" /* InprogressPage */] },
            { title: 'Delivered Packages', component: __WEBPACK_IMPORTED_MODULE_8__pages_pending_pending__["a" /* PendingPage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_9__pages_help_help__["a" /* HelpPage */] },
        ];
    }
    MyApp.prototype.loadData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.events.subscribe('user:loggedin', function (text) {
                _this.storage.get('Name').then(function (val) {
                    _this.Name = val;
                });
                _this.storage.get('ProfileImage').then(function (val) {
                    _this.profileImage = val;
                });
                _this.loggedIn = true;
                resolve();
                //wait just in case
            });
        });
    };
    MyApp.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.storage.get('Name').then(function (val) {
                _this.Name = val;
            });
            _this.storage.get('ProfileImage').then(function (val) {
                _this.profileImage = val;
            });
            _this.loggedIn = true;
            resolve();
            //wait just in case
        });
    };
    MyApp.prototype.updateToken = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            console.log(token);
            _this.Token = token;
            console.log("heres inside sdasd");
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                var data = {
                    'ID': _this.ID,
                    'appType': "Sender",
                    'FCMToken': _this.Token,
                };
                _this.storage.set('FCMToken', _this.Token); //FCM token
                _this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(function (res) { return res.json(); }).subscribe(function (data) {
                }, function (err) {
                    console.log('error');
                });
            });
        });
    };
    MyApp.prototype.openPage = function (p) {
        this.nav.setRoot(p.component);
    };
    MyApp.prototype.profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        /*remove all storage values*/
        this.storage.set('Name', null);
        this.storage.set('Email', null);
        this.storage.set('ID', null);
        this.storage.set('ProfileImage', null);
        this.storage.set('FCMToken', null);
        /*________________________________*/
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        setTimeout(function () {
            _this.loggedIn = false;
        }, 1000);
        //reroute to to login page
    };
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        var myAlert = this.alertCtrl.create({
            title: 'Package Delivered!',
            enableBackdropDismiss: false,
            message: 'Your Package *insertname* was successfully delivered!',
            buttons: [
                {
                    text: 'Rate!',
                    handler: function (rating) {
                        console.log('Rated. Data -> ' + rating);
                        _this.presentAlert2(rating);
                    },
                    role: 'cancel'
                }
            ],
            inputs: [
                {
                    type: 'radio',
                    id: '1',
                    name: '1',
                    'label': '★',
                    value: '1',
                    'checked': false
                },
                {
                    type: 'radio',
                    id: '2',
                    name: '2',
                    'label': '★ ★',
                    value: '2',
                    'checked': false
                },
                {
                    type: 'radio',
                    id: '3',
                    name: '3',
                    'label': '★ ★ ★',
                    value: '3',
                    'checked': false
                },
                {
                    type: 'radio',
                    id: '4',
                    name: '4',
                    'label': '★ ★ ★ ★',
                    value: '4',
                    'checked': false
                },
                {
                    type: 'radio',
                    id: '5',
                    name: '5',
                    'label': '★ ★ ★ ★ ★',
                    value: '5',
                    'checked': false
                },
            ],
        });
        myAlert.present();
    };
    MyApp.prototype.presentAlert2 = function (rating) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add a comment',
            inputs: [
                {
                    type: 'text',
                    name: 'comment',
                    placeholder: 'Please comment on your experience...'
                }
            ],
            buttons: [
                {
                    text: 'Comment',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Comment was ' + data.comment);
                        _this.rateTransporter(rating, data.comment);
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.rateTransporter = function (rating, comment) {
        var _this = this;
        if (rating && comment) {
            this.storage.get('ID').then(function (val) {
                _this.ID = val;
                var Ratingdata = {
                    'rating': rating,
                    'content': comment,
                    'PackageID': _this.PackageID,
                    'TransporterID': _this.TransporterID,
                    'SenderID': _this.ID,
                };
                _this.http.post('http://localhost:5000/ratetransporter', JSON.stringify(Ratingdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
                    var responseData = data;
                    console.log(responseData);
                    //this.presentToast("Your Package has been created!");
                }, function (err) {
                    console.log(err);
                });
            });
        }
        else {
            this.presentConfirm();
        }
    };
    MyApp.prototype.onNotification = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            //backend.registerToken(token);
            console.log("token is" + token);
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
                _this.NotificationData.push(JSON.stringify(data)); //open app and show notification page
                console.log(data);
                _this.storage.get('NotificationData').then(function (val) {
                    _this.NotificationData.push(val);
                    _this.storage.set('NotificationData', _this.NotificationData); //notification data
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_viewtransporterprofile_viewtransporterprofile__["a" /* ViewtransporterprofilePage */], { transporter: data });
                });
            }
            else {
                console.log("Received in foreground");
                if (data.Delivered == "true") {
                    _this.PackageID = data.PackageID;
                    _this.TransporterID = data.TransporterID;
                    _this.presentConfirm();
                }
                else if (data.Type == "Bid") {
                    _this.string = "You have recieved a Bid from" + data.TransporterName + "for Package" + data.PackageName;
                    console.log(data);
                    _this.storage.get('NotificationData').then(function (val) {
                        if (val != null) {
                            _this.NotificationData = val;
                        }
                        _this.NotificationData.push(_this.string);
                        _this.string = "";
                        _this.storage.set('NotificationData', _this.NotificationData); //notification data
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_viewtransporterprofile_viewtransporterprofile__["a" /* ViewtransporterprofilePage */], { transporter: data });
                    });
                }
                else {
                    _this.storage.get('NotificationData').then(function (val) {
                        console.log(data);
                        if (val != null) {
                            _this.NotificationData = val;
                        }
                        _this.NotificationData.push(data.Notification);
                        _this.showNotification(data.Notification);
                        _this.storage.set('NotificationData', _this.NotificationData); //notification data
                    });
                }
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            //backend.registerToken(token);
            console.log("token is" + token);
        });
        this.fcm.unsubscribeFromTopic('marketing');
    };
    MyApp.prototype.showNotification = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"Y:\Users\src\app\app.html"*/'<ion-menu *ngIf="loggedIn"  swipeEnabled="true" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-item no-lines class="menubg">\n\n        <ion-row>\n\n  \n\n          <ion-col col-6>\n\n            <ion-avatar *ngIf="loggedIn" item-start>\n\n              <img src="http://localhost:5000/getProfilePhoto/{{profileImage}}">\n\n            </ion-avatar>\n\n          </ion-col>\n\n  \n\n          <ion-col align-self-center col-6>\n\n            \n\n            <h2 class="textcol">{{Name}}</h2>\n\n              <button ion-button menuClose icon-left (click)="profile()" class="menubg">\n\n                  <ion-icon name="person"></ion-icon>Profile\n\n              </button>\n\n          </ion-col>\n\n  \n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-header>\n\n    <ion-content class="menubg">\n\n      <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="ios-home"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[0])">\n\n                Home\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n   \n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="bookmarks"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[1])">\n\n                All Packages\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="calendar"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[2])">\n\n                Active Packages\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="chatbubbles"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[3])">\n\n                In Transit\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <ion-icon style="font-size:35px" class="textcol" name="chatbubbles"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[4])">\n\n                        Delivered Packages\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n  \n\n    <ion-row>\n\n      <ion-col col-2 align-self-center>\n\n          <ion-icon style="font-size:35px" class="textcol" name="help-circle"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-10>\n\n          <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[5])">\n\n              Help\n\n          </button>\n\n      </ion-col>\n\n  </ion-row>\n\n  \n\n  <ion-footer class="menubg">\n\n      <button  ion-button full  (click)="logout()" menuToggle class="menubg">\n\n        Logout\n\n      </button>\n\n    </ion-footer>\n\n    </ion-content>\n\n    \n\n  \n\n  </ion-menu>\n\n  \n\n  <ion-nav #content [root]="rootPage"  swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"Y:\Users\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, app, menu) {
        this.navCtrl = navCtrl;
        this.LandRoot = __WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */];
        this.NotificationRoot = __WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */];
        this.tab1BadgeCount = 1;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Y:\Users\src\pages\home\home.html"*/'<ion-tabs selectedIndex="0" tabsPlacement="top">\n\n  <ion-tab [root]="LandRoot" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n\n  <ion-tab [root]="NotificationRoot" tabTitle="Notifications" tabIcon="notifications" tabsHideOnSubPages="true" ></ion-tab>\n\n</ion-tabs>\n\n\n\n '/*ion-inline-end:"Y:\Users\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackagedetailPage = (function () {
    function PackagedetailPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.PackageID = navParams.get('data');
        this.item = this.navParams.data;
        console.log(this.item);
        this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
        console.log(this.Source);
        this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
        console.log(this.Destination);
        this.findPath1();
    }
    PackagedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackagedetailPage');
    };
    PackagedetailPage.prototype.findPath1 = function () {
        var _this = this;
        console.log("Iam the one");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            // this.platform.ready().then(() => this.loadMaps());
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            var map = new google.maps.Map(document.getElementById('mapdetail'), {
                zoom: 9,
                center: { lat: 41.85, lng: -87.65 }
            });
            directionsDisplay.setMap(map);
            directionsService.route({
                origin: _this.Source,
                destination: _this.Destination,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }, 2000);
    };
    PackagedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-packagedetail',template:/*ion-inline-start:"Y:\Users\src\pages\packagedetail\packagedetail.html"*/'<!--\n\n  Generated template for the PackagedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Package Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bgg" >\n\n  \n\n    <ion-card>\n\n\n\n      <img src="http://localhost:5000/uploads/{{item.PImage}}">\n\n\n\n\n\n\n\n      <ion-item>\n\n        <h2>Package Name:</h2>\n\n        <ion-note item-end>{{item.PackageName}} </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>Description:</h2>\n\n        <ion-note item-end>{{item.PackageDesc}} </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>Cost</h2>\n\n        <ion-note item-end>{{item.Fare}}</ion-note>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h2>Size:</h2>\n\n        <ion-note item-end>{{item.PackageSize}}</ion-note>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h2>Delivery Type:</h2>\n\n        <ion-note item-end> {{item.TransportType}} </ion-note>\n\n      </ion-item>\n\n      <ion-item *ngIf="!switch">\n\n        <h2>Transport Type:</h2>\n\n        <ion-note item-end> {{item.VehicleType}} </ion-note>\n\n      </ion-item>\n\n      <ion-item *ngIf="switch">\n\n        <h2>Transport Type:</h2>\n\n        <ion-note item-end> {{item.CourierType}} </ion-note>\n\n      </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2 ion-text>{{item.PickAddress}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2 ion-text>{{item.DestAddress}}</h2>\n\n      </ion-item>\n\n\n\n\n\n\n\n    </ion-card>\n\n    <ion-card >\n\n      <div id="mapdetail" #mapdetail (onCreate)="findPath1()" ></div>\n\n    </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"Y:\Users\src\pages\packagedetail\packagedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PackagedetailPage);
    return PackagedetailPage;
}());

//# sourceMappingURL=packagedetail.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivePage = (function () {
    function ActivePage(navCtrl, navParams, file, filePath, http, transfer, fcm, storage, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.filePath = filePath;
        this.http = http;
        this.transfer = transfer;
        this.fcm = fcm;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.activedata = [];
        this.nodata = false;
        this.delete = false;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/active', { params: { 'SenderID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data['content'] == "failed") {
                    _this.nodata = true;
                }
                else {
                    data.map(function (item) {
                        _this.activedata.push(item);
                    });
                }
                console.log(_this.activedata);
            }, function (err) {
                console.log(err);
            });
        });
    }
    ActivePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ActivePage');
        this.navBar.backButtonClick = function (e) {
            // Print this event to the console
            console.log(e);
            // Navigate to another page
            _this.navCtrl.getPrevious().data.thing1 = null;
            _this.navCtrl.pop();
        };
    };
    ActivePage.prototype.packagedetails = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */], this.activedata[i]);
    };
    ActivePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('refreshing', refresher);
        this.activedata = [];
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/active', { params: { 'SenderID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data['content'] == "failed") {
                        _this.nodata = true;
                    }
                    else {
                        data.map(function (item) {
                            _this.activedata.push(item);
                        });
                    }
                    console.log(_this.activedata);
                }, function (err) {
                    console.log(err);
                });
            });
            refresher.complete();
        }, 2000);
    };
    ActivePage.prototype.deletepackage = function (PackageID, SenderID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Package',
            message: 'Are you sure you want to delete this?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.delete = false;
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                            _this.http.get('http://localhost:5000/deletepackage', { params: { 'PackageID': PackageID, 'SenderID': SenderID } }).map(function (res) { return res.json(); }).subscribe(function (data) {
                                if (data['content'] == "notdeleted") {
                                    var alert_1 = _this.alertCtrl.create({
                                        title: 'Package Not Deleted as it is ' + data['status'],
                                        buttons: [
                                            {
                                                text: 'Ok',
                                                role: 'cancel',
                                                handler: function () {
                                                    console.log('Ok clicked');
                                                }
                                            }
                                        ]
                                    });
                                    alert_1.present();
                                }
                                else if (data['content'] == "failed") {
                                    _this.nodata = true;
                                }
                                else {
                                    _this.activedata = [];
                                    data.map(function (item) {
                                        _this.activedata.push(item);
                                    });
                                }
                                console.log(_this.activedata);
                            }, function (err) {
                                console.log(err);
                            });
                        }, 2000);
                        console.log('Delete clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('navbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], ActivePage.prototype, "navBar", void 0);
    ActivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-active',template:/*ion-inline-start:"Y:\Users\src\pages\active\active.html"*/'<!--\n\n  Generated template for the ActivePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar #navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>Active Packages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bgg" >\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n          pullingIcon="arrow-dropdown"\n\n          pullingText="Pull to refresh"\n\n          refreshingSpinner="circles"\n\n          refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n  <div *ngIf="!nodata">\n\n  \n\n  <ion-card *ngFor="let item of activedata, let i= index">\n\n      <div style="position: relative">\n\n    <img src="http://localhost:5000/uploads/{{item.PImage}}" />\n\n    <ion-fab  right top>\n\n      <button class="buttoncolor" (click)="deletepackage(item.PackageID, item.SenderID)" ion-fab>\n\n        <ion-icon name="trash" ></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n</div>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2>{{item.PickAddress}}</h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2>{{item.DestAddress}}</h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="key" item-left large></ion-icon>\n\n      <h2>{{item.Verificationkey}}</h2>\n\n    </ion-item>\n\n\n\n    <button class="colornavbar" ion-button full (click)="packagedetails(i)">\n\n      View Details\n\n    </button>\n\n  </ion-card>\n\n\n\n</div>\n\n<div *ngIf="nodata" class="nodata">\n\n  <p ion-text>No Packages Active Right Now :( </p>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"Y:\Users\src\pages\active\active.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ActivePage);
    return ActivePage;
}());

//# sourceMappingURL=active.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, camera, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, formBuilder, alertCtrl, http, fcm, transfer, storage, events) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.fcm = fcm;
        this.transfer = transfer;
        this.storage = storage;
        this.events = events;
        this.lastImage1 = null;
        this.lastImage2 = null;
        this.lastImage3 = null;
        this.data = this.formBuilder.group({
            lastImage1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastImage2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastImage3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            CNIC: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$')])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('03[0-9]{9}$')])],
            Address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            CarRegistrationNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[A-Z]{3}(( ([0]{1}[7-9]{1}|[1]{1}[0-9]{1})[A,B]{0,1} | ))[0-9]{1,4}$')])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^.{6,15}$')])],
            Date: ['Date', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Month: ['Month', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Year: ['Year', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Gender: ['gender', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.Name = this.data.controls['Name'];
        this.Email = this.data.controls['Email'];
        this.CNIC = this.data.controls['CNIC'];
        this.Phone = this.data.controls['Phone'];
        this.Address = this.data.controls['Address'];
        this.Password = this.data.controls['Password'];
        this.Date = this.data.controls['Date'];
        this.Month = this.data.controls['Month'];
        this.Year = this.data.controls['Year'];
        this.Gender = this.data.controls['Gender'];
        this.submitAttempted = false;
    }
    SignUpPage.prototype.logForm = function () {
        var _this = this;
        this.submitAttempted = true;
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
        this.fcm.getToken().then(function (token) {
            _this.upload();
            _this.Token = token;
            console.log(token);
            var Userdata = {
                'Name': _this.Name.value,
                'Email': _this.Email.value,
                'CNIC': _this.CNIC.value,
                'Phone': _this.Phone.value,
                'Address': _this.Address.value,
                'Password': _this.Password.value,
                'Date': _this.Date.value,
                'Month': _this.Month.value,
                'Year': _this.Year.value,
                'Gender': _this.Gender.value,
                'FCMToken': _this.Token,
                'ProfilePicture': _this.lastImage1,
            };
            //console.log(Userdata);
            _this.http.post('http://localhost:5000/signupsender', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
                var responseData = data;
                console.log(responseData.Error);
                console.log(responseData);
                console.log(responseData['content']);
                _this.loading.dismiss();
                if (responseData.Error != "none") {
                    _this.presentErrorAlert(responseData.Error);
                }
                else {
                    _this.dataloaded(responseData).then(function () {
                        _this.events.publish('user:loggedin', "dataloaded"); //to set data values
                        _this.loading.dismissAll(); //dismiss loading
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]); //go to home page
                    });
                }
            }, function (err) {
                console.log('error');
            });
        });
    };
    SignUpPage.prototype.dataloaded = function (responseData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //put the values in local storage
            _this.storage.set('Name', _this.Name.value); //user Name
            _this.storage.set('Email', _this.Email.value); //user email
            _this.storage.set('ID', responseData.content); //User ID important
            _this.storage.set('FCMToken', _this.Token); //FCM token
            _this.storage.set('ProfileImage', _this.lastImage1); //profile image location
            var Notifications = []; //to hold notification data
            _this.storage.set('NotificationData', Notifications); //notification data
            setTimeout(function () {
                resolve();
            }, 2000); //wait just in case
        });
    };
    SignUpPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.presentActionSheet = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, id);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, id);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SignUpPage.prototype.takePicture = function (sourceType, id) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), id);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), id);
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    SignUpPage.prototype.upload = function () {
        var fileTransfer = this.transfer.create();
        var options1 = {
            fileKey: 'file',
            fileName: this.lastImage1,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/imageupload?type=' + 'Profile', options1, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    SignUpPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    SignUpPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, id) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            switch (id) {
                case 1:
                    _this.lastImage1 = newFileName;
                    break;
                case 2:
                    _this.lastImage2 = newFileName;
                    break;
                case 3:
                    _this.lastImage3 = newFileName;
                    break;
            }
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    SignUpPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    SignUpPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"Y:\Users\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-item>\n  <ion-label floating>Pickup Address: </ion-label>\n  <ion-textarea></ion-textarea>\n</ion-item>\n\n\n<ion-content class="background" padding>\n\n  <ion-item class="background">\n    <ion-avatar item-start>\n      <button *ngIf="lastImage1==null" ion-button round large icon-only color="primary" (click)="presentActionSheet(1)">\n        <ion-icon class="photo1" name="add-circle" large></ion-icon>\n      </button>\n      <img src="{{pathForImage(lastImage1)}}" class="avatar1" *ngIf="lastImage1!=null">\n    </ion-avatar>\n    <h2 class="inputs">Take a Selfie!</h2>\n    <button ion-button icon-left (click)="presentActionSheet(1)">\n      <ion-icon name="camera"></ion-icon>Select Image\n    </button>\n  </ion-item>\n\n\n  <form [formGroup]="data" (ngSubmit)="logForm()">\n    <!-- Name input -->\n    <ion-item class="background">\n      <ion-label color="light" floating>Name</ion-label>\n      <ion-input class="inputs" type="text" formControlName="Name"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="Name.hasError(\'required\') && submitAttempted">\n      <p ion-text color="danger">*Please enter full name</p>\n    </ion-item>\n\n\n    <!-- Email input -->\n    <ion-item class="background">\n      <ion-label color="light" floating>Email</ion-label>\n      <ion-input class="inputs" type="email" formControlName="Email"></ion-input>\n    </ion-item>\n    <ion-item class="background" *ngIf="Email.hasError(\'required\') && submitAttempted">\n      <p ion-text color="danger">*Please enter email</p>\n    </ion-item>\n    <ion-item class="background" *ngIf="Email.hasError(\'email\') && Email.touched">\n      <p ion-text color="danger">*Please enter proper email</p>\n    </ion-item>\n\n    <!-- CNIC input -->\n    <ion-item class="background">\n      <ion-label color="light" floating>CNIC</ion-label>\n      <ion-input class="inputs" formControlName="CNIC" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="background" *ngIf="(CNIC.hasError(\'required\')  && submitAttempted)">\n      <p ion-text color="danger">*Please enter CNIC</p>\n    </ion-item>\n    <ion-item class="background" *ngIf="  CNIC.hasError(\'pattern\') && CNIC.touched">\n      <p ion-text color="danger"> *Please enter CNIC with dashes included</p>\n    </ion-item>\n\n    <!-- Phone Number input -->\n    <ion-item class="background">\n      <ion-label color="light" floating>Phone Number</ion-label>\n      <ion-input class="inputs" formControlName="Phone" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="background" *ngIf="Phone.hasError(\'required\')  && submitAttempted">\n      <p ion-text color="danger">*Please enter phone number</p>\n    </ion-item>\n    <ion-item class="background" *ngIf="Phone.hasError(\'pattern\')  && Phone.touched">\n      <p ion-text color="danger"> *Please enter proper phone number(no +92)</p>\n    </ion-item>\n\n    <!-- Address input -->\n    <ion-item class="background">\n      <ion-label color="light" floating>Address</ion-label>\n      <ion-textarea class="inputs" formControlName="Address"></ion-textarea>\n    </ion-item>\n    <ion-item class="background" *ngIf="Address.hasError(\'required\')  && submitAttempted">\n      <p ion-text color="danger">*Please enter Address</p>\n    </ion-item>\n\n\n    <!-- Gender input -->\n    <ion-item class="background">\n      <ion-label color="light">Gender</ion-label>\n      <ion-select class="inputs" formControlName="Gender">\n        <ion-option value="gender" selected>Gender</ion-option>\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- Date of Birth input -->\n    <ion-item class="background">\n      <ion-label color="light">D.O.B</ion-label>\n      <ion-select class="inputs" formControlName="Date">\n        <ion-option value="Date" selected>Date</ion-option>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n        <ion-option value="7">7</ion-option>\n        <ion-option value="8">8</ion-option>\n        <ion-option value="9">9</ion-option>\n        <ion-option value="10">10</ion-option>\n        <ion-option value="11">11</ion-option>\n        <ion-option value="12">12</ion-option>\n        <ion-option value="13">13</ion-option>\n        <ion-option value="14">14</ion-option>\n        <ion-option value="15">15</ion-option>\n        <ion-option value="16">16</ion-option>\n        <ion-option value="17">17</ion-option>\n        <ion-option value="18">18</ion-option>\n        <ion-option value="19">19</ion-option>\n        <ion-option value="20">20</ion-option>\n        <ion-option value="21">21</ion-option>\n        <ion-option value="22">22</ion-option>\n        <ion-option value="23">23</ion-option>\n        <ion-option value="24">24</ion-option>\n        <ion-option value="25">25</ion-option>\n        <ion-option value="26">26</ion-option>\n        <ion-option value="27">27</ion-option>\n        <ion-option value="28">28</ion-option>\n        <ion-option value="29">29</ion-option>\n        <ion-option value="30">30</ion-option>\n        <ion-option value="31">31</ion-option>\n      </ion-select>\n      <ion-select class="inputs" formControlName="Month">\n        <ion-option value="Month" selected>Month</ion-option>\n        <ion-option value="Janaury">Janaury</ion-option>\n        <ion-option value="February">February</ion-option>\n        <ion-option value="March">March</ion-option>\n        <ion-option value="April">April</ion-option>\n        <ion-option value="May">May</ion-option>\n        <ion-option value="June">June</ion-option>\n        <ion-option value="July">July</ion-option>\n        <ion-option value="August">August</ion-option>\n        <ion-option value="September">September</ion-option>\n        <ion-option value="October">October</ion-option>\n        <ion-option value="November">November</ion-option>\n        <ion-option value="December">December</ion-option>\n      </ion-select>\n      <ion-select class="inputs" formControlName="Year">\n        <ion-option value="Year" selected>Year</ion-option>\n        <ion-option value="1947">1947</ion-option>\n        <ion-option value="1948">1948</ion-option>\n        <ion-option value="1949">1949</ion-option>\n        <ion-option value="1950">1950</ion-option>\n        <ion-option value="1951">1951</ion-option>\n        <ion-option value="1952">1952</ion-option>\n        <ion-option value="1953">1953</ion-option>\n        <ion-option value="1954">1954</ion-option>\n        <ion-option value="1955">1955</ion-option>\n        <ion-option value="1956">1956</ion-option>\n        <ion-option value="1957">1957</ion-option>\n        <ion-option value="1958">1958</ion-option>\n        <ion-option value="1959">1959</ion-option>\n        <ion-option value="1960">1960</ion-option>\n        <ion-option value="1961">1961</ion-option>\n        <ion-option value="1962">1962</ion-option>\n        <ion-option value="1963">1963</ion-option>\n        <ion-option value="1964">1964</ion-option>\n        <ion-option value="1965">1965</ion-option>\n        <ion-option value="1966">1966</ion-option>\n        <ion-option value="1967">1967</ion-option>\n        <ion-option value="1968">1968</ion-option>\n        <ion-option value="1969">1969</ion-option>\n        <ion-option value="1970">1970</ion-option>\n        <ion-option value="1971">1971</ion-option>\n        <ion-option value="1972">1972</ion-option>\n        <ion-option value="1973">1973</ion-option>\n        <ion-option value="1974">1974</ion-option>\n        <ion-option value="1975">1975</ion-option>\n        <ion-option value="1976">1976</ion-option>\n        <ion-option value="1977">1977</ion-option>\n        <ion-option value="1978">1978</ion-option>\n        <ion-option value="1979">1979</ion-option>\n        <ion-option value="1980">1980</ion-option>\n        <ion-option value="1981">1981</ion-option>\n        <ion-option value="1982">1982</ion-option>\n        <ion-option value="1983">1983</ion-option>\n        <ion-option value="1984">1984</ion-option>\n        <ion-option value="1985">1985</ion-option>\n        <ion-option value="1986">1986</ion-option>\n        <ion-option value="1987">1987</ion-option>\n        <ion-option value="1988">1988</ion-option>\n        <ion-option value="1989">1989</ion-option>\n        <ion-option value="1990">1990</ion-option>\n        <ion-option value="1991">1991</ion-option>\n        <ion-option value="1992">1992</ion-option>\n        <ion-option value="1993">1993</ion-option>\n        <ion-option value="1994">1994</ion-option>\n        <ion-option value="1995">1995</ion-option>\n        <ion-option value="1996">1996</ion-option>\n        <ion-option value="1997">1997</ion-option>\n        <ion-option value="1998">1998</ion-option>\n        <ion-option value="1999">1999</ion-option>\n        <ion-option value="2000">2000</ion-option>\n        <ion-option value="2001">2001</ion-option>\n        <ion-option value="2002">2002</ion-option>\n        <ion-option value="2003">2003</ion-option>\n        <ion-option value="2004">2004</ion-option>\n        <ion-option value="2005">2005</ion-option>\n        <ion-option value="2006">2006</ion-option>\n        <ion-option value="2007">2007</ion-option>\n        <ion-option value="2008">2008</ion-option>\n        <ion-option value="2009">2009</ion-option>\n        <ion-option value="2010">2010</ion-option>\n        <ion-option value="2011">2011</ion-option>\n        <ion-option value="2012">2012</ion-option>\n        <ion-option value="2013">2013</ion-option>\n        <ion-option value="2014">2014</ion-option>\n        <ion-option value="2015">2015</ion-option>\n        <ion-option value="2016">2016</ion-option>\n        <ion-option value="2017">2017</ion-option>\n        <ion-option value="2018">2018</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- Password input -->\n    <ion-item class="background">\n      <ion-label color="light" floating>Password</ion-label>\n      <ion-input class="inputs" type="password" formControlName="Password"></ion-input>\n    </ion-item>\n    <ion-item class="background" *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n      <p ion-text color="danger"> *Password minimum length 6</p>\n    </ion-item>\n\n    <button ion-button color="secondary" type="submit" block>Create Profile</button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"Y:\Users\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivetrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LivetrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LivetrackPage = (function () {
    function LivetrackPage(navCtrl, navParams, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.markers = [];
        this.mapsetter = true;
        this.initMap();
        this.ref = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('geolocations/'); //assign data base to store gelocation
        this.PackageID = navParams.get('data');
        this.getArrayref(this.PackageID);
        //console.log(this.snapshotToArray);
        this.observer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].interval(3000).subscribe(function () {
            _this.ref.on('value', function (resp) {
                _this.deleteMarkers();
                _this.snapshotToArray(resp).forEach(function (data) {
                    // let image = 'assets/imgs/green-bike.png';
                    var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                    // if(this.mapsetter){
                    //   this.initMap(updatelocation);
                    //   this.mapsetter = false;
                    // }
                    console.log(updatelocation);
                    _this.addMarker(updatelocation);
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
    LivetrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivetrackPage');
    };
    LivetrackPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
        this.observer.unsubscribe(); //unsubsribe to geolocation tracking
    };
    LivetrackPage.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
        });
        this.markers.push(marker);
        this.map.setCenter(marker.getPosition());
    };
    LivetrackPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    LivetrackPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    LivetrackPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    LivetrackPage.prototype.getArrayref = function (id) {
        this.snapshotToArray = function (snapshot) {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                console.log(item);
                //console.log("value of item"+childSnapshot.toJSON());  
                item.key = childSnapshot.key;
                //  console.log("value of item.key"+item.key);
                if (item.ID == id) {
                    console.log(item.longitude);
                    returnArr.push(item);
                    console.log("hello hey whtsupp");
                }
            });
            return returnArr;
        };
    };
    LivetrackPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mapLiveTracking'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LivetrackPage.prototype, "mapElement", void 0);
    LivetrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-livetrack',template:/*ion-inline-start:"Y:\Users\src\pages\livetrack\livetrack.html"*/'<!--\n\n  Generated template for the LivetrackPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Live Track</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div #mapLiveTracking id="mapLiveTracking"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"Y:\Users\src\pages\livetrack\livetrack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LivetrackPage);
    return LivetrackPage;
}());

//# sourceMappingURL=livetrack.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map