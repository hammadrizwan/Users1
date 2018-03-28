webpackJsonp([12],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__ = __webpack_require__(53);
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
    function ActivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivePage');
    };
    ActivePage.prototype.packagedetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */]);
    };
    ActivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-active',template:/*ion-inline-start:"E:\fyp\users1\src\pages\active\active.html"*/'<!--\n\n  Generated template for the ActivePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>Active Packages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bgg">\n\n  <ion-card>\n\n      <div style="position: relative">\n\n    <img src="./assets/imgs/welltaped.jpg" />\n\n    <ion-fab  right top>\n\n      <button class="buttoncolor" ion-fab>\n\n        <ion-icon name="trash" ></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n</div>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2>To: 24D Bahar Shah Rd, Lahore\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2>From: 161 main peco road Lahore\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <button class="colornavbar" ion-button full (click)="packagedetails()">\n\n      View Details\n\n    </button>\n\n  </ion-card>\n\n \n\n  <ion-card>\n\n      <div style="position: relative">\n\n      <img src="./assets/imgs/welltaped.jpg" />\n\n      <ion-fab  right top>\n\n        <button class="buttoncolor" ion-fab>\n\n          <ion-icon name="trash" ></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n  </div>\n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2>To: 24D Bahar Shah Rd, Lahore\n\n        </h2>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2>From: 161 main peco road Lahore\n\n        </h2>\n\n      </ion-item>\n\n  \n\n      <button class="colornavbar" ion-button full (click)="packagedetails()">\n\n        View Details\n\n      </button>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <div style="position: relative">\n\n        <img src="./assets/imgs/welltaped.jpg" />\n\n        <ion-fab  right top>\n\n          <button class="buttoncolor" ion-fab>\n\n            <ion-icon name="trash" ></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n    </div>\n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n          <h2>To: 24D Bahar Shah Rd, Lahore\n\n          </h2>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n          <h2>From: 161 main peco road Lahore\n\n          </h2>\n\n        </ion-item>\n\n    \n\n        <button class="colornavbar" ion-button full (click)="packagedetails()">\n\n          View Details\n\n        </button>\n\n      </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\active\active.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ActivePage);
    return ActivePage;
}());

//# sourceMappingURL=active.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"E:\fyp\users1\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\' class="textcolor"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Notifications\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="hh">\n\n  \n\n  <ion-card >\n\n    <ion-card-content>\n\n      Your Package ID: AE862JZ was delivered\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      Khan Haseeb is here to pick your package up\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      Your Package ID: XY5546RE is in transit\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      Your Package ID: XY5546RE is has been picked up\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n        Your Package ID: AE862JZ was delivered\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        Khan Haseeb is here to pick your package up\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        Your Package ID: XY5546RE is in transit\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        Your Package ID: XY5546RE is has been picked up\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n\n\n</ion-content>'/*ion-inline-end:"E:\fyp\users1\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create__ = __webpack_require__(54);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.opencreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_create__["a" /* CreatePage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"E:\fyp\users1\src\pages\landing\landing.html"*/'<ion-header >\n\n  <ion-navbar >\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\' class="textcolor"></ion-icon>\n\n        </button>\n\n    <ion-title >\n\n     Home\n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img src="./assets/imgs/maps2.png">\n\n  \n\n <ion-fab center bottom>\n\n  <button ion-button round color="navbarcolor" (click)="opencreate()">Create</button>\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__ = __webpack_require__(53);
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
    function AllPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllPage');
    };
    AllPage.prototype.packagedetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */]);
    };
    AllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all',template:/*ion-inline-start:"E:\fyp\users1\src\pages\all\all.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>All Packages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bgg">\n\n    <ion-card>\n\n        <div style="position: relative">\n\n      <img src="./assets/imgs/welltaped.jpg" />\n\n      <ion-fab  right top>\n\n        <button class="buttoncolor" ion-fab>\n\n          <ion-icon name="trash" ></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n  </div>\n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n        <h2>To: 24D Bahar Shah Rd, Lahore\n\n        </h2>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n        <h2>From: 161 main peco road Lahore\n\n        </h2>\n\n      </ion-item>\n\n  \n\n      <button class="colornavbar" ion-button full (click)="packagedetails()">\n\n        View Details\n\n      </button>\n\n    </ion-card>\n\n   \n\n    <ion-card>\n\n        <div style="position: relative">\n\n        <img src="./assets/imgs/welltaped.jpg" />\n\n        <ion-fab  right top>\n\n          <button class="buttoncolor" ion-fab>\n\n            <ion-icon name="trash" ></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n    </div>\n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n          <h2>To: 24D Bahar Shah Rd, Lahore\n\n          </h2>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n          <h2>From: 161 main peco road Lahore\n\n          </h2>\n\n        </ion-item>\n\n    \n\n        <button class="colornavbar" ion-button full (click)="packagedetails()">\n\n          View Details\n\n        </button>\n\n      </ion-card>\n\n  \n\n      <ion-card>\n\n          <div style="position: relative">\n\n          <img src="./assets/imgs/welltaped.jpg" />\n\n          <ion-fab  right top>\n\n            <button class="buttoncolor" ion-fab>\n\n              <ion-icon name="trash" ></ion-icon>\n\n            </button>\n\n          </ion-fab>\n\n      </div>\n\n          <ion-item>\n\n            <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n            <h2>To: 24D Bahar Shah Rd, Lahore\n\n            </h2>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n            <h2>From: 161 main peco road Lahore\n\n            </h2>\n\n          </ion-item>\n\n      \n\n          <button class="colornavbar" ion-button full (click)="packagedetails()">\n\n            View Details\n\n          </button>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\fyp\users1\src\pages\all\all.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AllPage);
    return AllPage;
}());

//# sourceMappingURL=all.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"E:\fyp\users1\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InprogressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function InprogressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InprogressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InprogressPage');
    };
    InprogressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inprogress',template:/*ion-inline-start:"E:\fyp\users1\src\pages\inprogress\inprogress.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>In Transit</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bgg">\n\n    <ion-card>\n\n        <ion-item>\n\n            <h2>Package Name:</h2>\n\n            <ion-note item-end>Fragile Box </ion-note>\n\n          </ion-item>\n\n          <ion-item>\n\n              <h2>Package ID:</h2>\n\n              <ion-note item-end>528491</ion-note>\n\n            </ion-item>\n\n          <ion-item>\n\n              <h2>Transporter:</h2>\n\n              <ion-note item-end>M. Bhutta </ion-note>\n\n            </ion-item>\n\n            <button ion-button color="navbarcolor" full>Track Package</button>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <h2>Package Name:</h2>\n\n            <ion-note item-end>Geek Aegis Mod </ion-note>\n\n          </ion-item>\n\n          <ion-item>\n\n              <h2>Package ID:</h2>\n\n              <ion-note item-end>564123</ion-note>\n\n            </ion-item>\n\n          <ion-item>\n\n              <h2>Transporter:</h2>\n\n              <ion-note item-end>Leopard Courier</ion-note>\n\n            </ion-item>\n\n            <button ion-button color="navbarcolor" full>Track Package</button>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <h2>Package Name:</h2>\n\n            <ion-note item-end>Radiation Rod </ion-note>\n\n          </ion-item>\n\n          <ion-item>\n\n              <h2>Package ID:</h2>\n\n              <ion-note item-end>523491</ion-note>\n\n            </ion-item>\n\n          <ion-item>\n\n              <h2>Transporter:</h2>\n\n              <ion-note item-end>S Abid </ion-note>\n\n            </ion-item>\n\n            <button ion-button color="navbarcolor" full>Track Package</button>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\inprogress\inprogress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], InprogressPage);
    return InprogressPage;
}());

//# sourceMappingURL=inprogress.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\fyp\users1\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function PendingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PendingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingPage');
    };
    PendingPage.prototype.onModelChange = function ($event) {
    };
    PendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending',template:/*ion-inline-start:"E:\fyp\users1\src\pages\pending\pending.html"*/'<!--\n\n  Generated template for the PendingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name=\'menu\'></ion-icon>\n\n        </button>\n\n    <ion-title>Pending Reviews</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bgg">\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-item>\n\n      Package Name: <ion-note item-end>Fragile Box</ion-note>\n\n    </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-row>\n\n           \n\n            <ion-item>\n\n                Picked On: <ion-note item-end>10/12/17 20:00:12</ion-note>\n\n            </ion-item>\n\n            \n\n          </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n        Delivered On: <ion-note item-end>10/12/17 20:30:12</ion-note>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n          Delivered By: <ion-note item-end>Shoaib Chaudhry</ion-note>\n\n          </ion-item>\n\n        </ion-row>\n\n      <ion-row>\n\n<!--    <rating [(ngModel)]="rate" \n\n    readOnly="false" \n\n    max="5" \n\n    emptyStarIconName="star-outline" \n\n    halfStarIconName="star-half" \n\n    starIconName="star" \n\n    nullable="false" \n\n    (ngModelChange)="onModelChange($event)"> use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.\n\n</rating>-->\n\n</ion-row>\n\n</ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n    <ion-card-header>\n\n      <ion-item>\n\n      Package Name: <ion-note item-end>Fragile Box</ion-note>\n\n    </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-row>\n\n           \n\n            <ion-item>\n\n                Picked On: <ion-note item-end>10/12/17 20:00:12</ion-note>\n\n            </ion-item>\n\n            \n\n          </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n        Delivered On: <ion-note item-end>10/12/17 20:30:12</ion-note>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n          Delivered By: <ion-note item-end>Shoaib Chaudhry</ion-note>\n\n          </ion-item>\n\n        </ion-row>\n\n      <ion-row>\n\n    <!--    <rating [(ngModel)]="rate" \n\n    readOnly="false" \n\n    max="5" \n\n    emptyStarIconName="star-outline" \n\n    halfStarIconName="star-half" \n\n    starIconName="star" \n\n    nullable="false" \n\n    (ngModelChange)="onModelChange($event)"> use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.\n\n</rating>-->\n\n</ion-row>\n\n</ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n    <ion-card-header>\n\n      <ion-item>\n\n      Package Name: <ion-note item-end>Fragile Box</ion-note>\n\n    </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-row>\n\n           \n\n            <ion-item>\n\n                Picked On: <ion-note item-end>10/12/17 20:00:12</ion-note>\n\n            </ion-item>\n\n            \n\n          </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n        Delivered On: <ion-note item-end>10/12/17 20:30:12</ion-note>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n          Delivered By: <ion-note item-end>Shoaib Chaudhry</ion-note>\n\n          </ion-item>\n\n        </ion-row>\n\n      <ion-row>\n\n    <!--    <rating [(ngModel)]="rate" \n\n    readOnly="false" \n\n    max="5" \n\n    emptyStarIconName="star-outline" \n\n    halfStarIconName="star-half" \n\n    starIconName="star" \n\n    nullable="false" \n\n    (ngModelChange)="onModelChange($event)"> use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.\n\n</rating>-->\n\n</ion-row>\n\n</ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n    <ion-card-header>\n\n      <ion-item>\n\n      Package Name: <ion-note item-end>Fragile Box</ion-note>\n\n    </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-row>\n\n           \n\n            <ion-item>\n\n                Picked On: <ion-note item-end>10/12/17 20:00:12</ion-note>\n\n            </ion-item>\n\n            \n\n          </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n        Delivered On: <ion-note item-end>10/12/17 20:30:12</ion-note>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-item>\n\n          Delivered By: <ion-note item-end>Shoaib Chaudhry</ion-note>\n\n          </ion-item>\n\n        </ion-row>\n\n      <ion-row>\n\n    <!--    <rating [(ngModel)]="rate" \n\n    readOnly="false" \n\n    max="5" \n\n    emptyStarIconName="star-outline" \n\n    halfStarIconName="star-half" \n\n    starIconName="star" \n\n    nullable="false" \n\n    (ngModelChange)="onModelChange($event)"> use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.\n\n</rating>-->\n\n</ion-row>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n    <!-- <ion-card>\n\n        <ion-row >\n\n            <img src="./assets/imgs/welltaped.jpg"/>\n\n          <ion-col>\n\n          <ion-item>\n\n            <ion-label>Fragile Box</ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n              <label>To:</label>\n\n              <p>24D Bahar Shah Rd,\n\n                 Lahore</p>\n\n              <label>From:</label>\n\n              <p> 161 main peco road\n\n                 Lahore</p>\n\n          </ion-item>\n\n        </ion-col>\n\n        </ion-row >\n\n      \n\n          <ion-card-content>\n\n           <ion-row style="border-bottom : 1px solid rgb(146, 146, 146) ">\n\n             <ion-col col-4 style="border-right : 1px solid rgb(109, 109, 109) "><img class="cl"  src="./assets/imgs/dropbox.svg"></ion-col>\n\n             <ion-col col-4 style="border-right : 1px solid rgb(109, 109, 109) ">Rs. 250/-</ion-col>\n\n             <ion-col col-4>Car</ion-col>\n\n           </ion-row>\n\n           <ion-row>\n\n              <ion-item>\n\n                  <ion-label>Transporter</ion-label>\n\n                </ion-item>\n\n             <ion-col>\n\n             <ion-item>\n\n               <ion-avatar>\n\n                 <img src="./assets/imgs/johnwick.jpg">\n\n               </ion-avatar>\n\n             </ion-item>\n\n             </ion-col>\n\n             <ion-col>\n\n              <ion-item>\n\n                  <label>Name:</label>\n\n                  <p>Shoaib Chaudhry</p>\n\n                  <label>Vehicle:</label>\n\n                  <p> Pickup</p>\n\n                  <label>Rating:</label>\n\n                  <p>★ ★ ★ ★ ★ </p>\n\n              </ion-item>\n\n              </ion-col>\n\n           </ion-row>\n\n          </ion-card-content>\n\n        </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\pending\pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PendingPage);
    return PendingPage;
}());

//# sourceMappingURL=pending.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/active/active.module": [
		303,
		11
	],
	"../pages/all/all.module": [
		305,
		10
	],
	"../pages/create/create.module": [
		304,
		9
	],
	"../pages/help/help.module": [
		306,
		8
	],
	"../pages/inprogress/inprogress.module": [
		307,
		7
	],
	"../pages/landing/landing.module": [
		308,
		6
	],
	"../pages/login/login.module": [
		309,
		5
	],
	"../pages/notification/notification.module": [
		310,
		4
	],
	"../pages/packagedetail/packagedetail.module": [
		311,
		3
	],
	"../pages/pending/pending.module": [
		313,
		2
	],
	"../pages/profile/profile.module": [
		312,
		1
	],
	"../pages/sign-up/sign-up.module": [
		314,
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
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(173);
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
        this.http.post('http://localhost:5000/login', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            if (responseData.Error != "none") {
                _this.loading.dismissAll();
                _this.presentErrorAlert(responseData.Error);
            }
            else {
                _this.loading.dismissAll();
                _this.storage.set('Name', responseData.content[0].Name);
                _this.storage.set('Email', responseData.content[0].Email);
                _this.storage.set('Password', responseData.content[0].Password);
                _this.storage.set('ID', responseData.content[0].ID);
                _this.storage.set('Rating', responseData.content[0].Rating);
                _this.events.publish('user:loggedin', "yo");
                _this.openPage(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
        }, function (err) {
            console.log('error');
        });
        return;
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
    LoginPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\fyp\users1\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Drive And Deliver</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="forms">\n\n    <form [formGroup]="data" (ngSubmit)="logForm()">\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Email</ion-label>\n\n        <ion-input type="email" formControlName="Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Email.hasError(\'required\') && submitAttempted">\n\n        <p ion-text color="danger">*Please enter email</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="Password"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n\n        <p ion-text color="danger"> *Password minimum length 6</p>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n          <button ion-button color="secondary" type="submit" block>Login</button>\n\n      </ion-row>\n\n    </form>\n\n    <button ion-button (click)="signuppage()" block>SignUp</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_create__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inprogress_inprogress__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pending_pending__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_help_help__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notification_notification__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_active_active__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_all_all__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_packagedetail_packagedetail__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_transfer__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_path__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(173);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_19__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/active/active.module#ActivePageModule', name: 'ActivePage', segment: 'active', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all/all.module#AllPageModule', name: 'AllPage', segment: 'all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inprogress/inprogress.module#InprogressPageModule', name: 'InprogressPage', segment: 'inprogress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/packagedetail/packagedetail.module#PackagedetailPageModule', name: 'PackagedetailPage', segment: 'packagedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending/pending.module#PendingPageModule', name: 'PendingPage', segment: 'pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_19__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_create_create__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inprogress_inprogress__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pending_pending__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_all_all__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_active_active__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_create_create__["a" /* CreatePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'All Packages', component: __WEBPACK_IMPORTED_MODULE_9__pages_all_all__["a" /* AllPage */] },
            { title: 'Active Packages', component: __WEBPACK_IMPORTED_MODULE_10__pages_active_active__["a" /* ActivePage */] },
            { title: 'In Transit', component: __WEBPACK_IMPORTED_MODULE_6__pages_inprogress_inprogress__["a" /* InprogressPage */] },
            { title: 'Pending Reviews', component: __WEBPACK_IMPORTED_MODULE_7__pages_pending_pending__["a" /* PendingPage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */] },
        ];
    }
    MyApp.prototype.openPage = function (p) {
        this.nav.setRoot(p.component);
    };
    MyApp.prototype.profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\fyp\users1\src\app\app.html"*/'<ion-menu swipeEnabled="true" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-item no-lines class="menubg">\n\n        <ion-row>\n\n  \n\n          <ion-col col-6>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/johnwick.jpg">\n\n            </ion-avatar>\n\n          </ion-col>\n\n  \n\n          <ion-col align-self-center col-6>\n\n  \n\n            <h2 class="textcolor">John Wick</h2>\n\n  \n\n            <p class="textcolor">★ ★ ★ ★ ★ </p>\n\n   \n\n              <button ion-button menuClose icon-left (click)="profile()" class="menubg">\n\n                  <ion-icon name="person"></ion-icon>Profile\n\n              </button>\n\n          </ion-col>\n\n  \n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-header>\n\n    <ion-content class="menubg">\n\n      <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="ios-home"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[0])">\n\n                Home\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="bookmarks"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[1])">\n\n                All Packages\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="calendar"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[2])">\n\n                Active Packages\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="chatbubbles"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[3])">\n\n                In Transit\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n  \n\n    <ion-row>\n\n        <ion-col col-2 align-self-center>\n\n            <ion-icon style="font-size:35px" class="textcol" name="help-circle"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n            <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[4])">\n\n                Pending Reviews\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n  \n\n    <ion-row>\n\n      <ion-col col-2 align-self-center>\n\n          <ion-icon style="font-size:35px" class="textcol" name="help-circle"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-10>\n\n          <button no-lines class="menubg textcol" mode="md" menuClose ion-item (click)="openPage(pages[5])">\n\n              Help\n\n          </button>\n\n      </ion-col>\n\n  </ion-row>\n\n  \n\n  <ion-footer class="menubg">\n\n      <button ion-button full (click)="closeMenu()" class="menubg">\n\n        Logout\n\n      </button>\n\n    </ion-footer>\n\n    </ion-content>\n\n    \n\n  \n\n  </ion-menu>\n\n  \n\n  <ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"E:\fyp\users1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(113);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\fyp\users1\src\pages\home\home.html"*/'<ion-tabs selectedIndex="0" tabsPlacement="top">\n\n  <ion-tab [root]="LandRoot" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n\n  <ion-tab [root]="NotificationRoot" tabTitle="Notifications" tabIcon="notifications" tabsHideOnSubPages="true" ></ion-tab>\n\n</ion-tabs>\n\n\n\n <!-- <ion-item no-lines>\n\n <ion-slides pager="true" >\n\n   <ion-slide>\n\n     <img src="./assets/imgs/cat1.jpg">\n\n   </ion-slide>\n\n   <ion-slide>\n\n      <img src="./assets/imgs/cat2.jpg">\n\n    </ion-slide>\n\n    <ion-slide>\n\n        <img src="./assets/imgs/cat3.jpg">\n\n      </ion-slide>\n\n </ion-slides>\n\n</ion-item>     \n\n<button ion-button large outline full mode="ios" color="danger" >Transport a Package</button>\n\n\n\n<ion-card class="bb">\n\n    <ion-card-header >\n\n    Stats\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n  <ion-row>\n\n    <ion-col>\n\n        <div class="progress-wrapper">\n\n            <round-progress  \n\n            [background]="\'white\'"\n\n            [color]="\'red\'"\n\n            [current]="62" \n\n            [max]="100" \n\n            [radius]="35"\n\n            [stroke]="5"></round-progress>\n\n            <div class="text" >\n\n              62\n\n            </div>\n\n        </div>\n\n  </ion-col>\n\n  <ion-col>\n\n          \n\n        <div class="progress-wrapper">\n\n          <round-progress \n\n          [background]="\'white\'"\n\n          [color]="\'red\'"\n\n          [current]="70" \n\n          [max]="100" \n\n          [radius]="35"\n\n          [stroke]="5"></round-progress>\n\n          \n\n          <div class="text">\n\n            70\n\n          </div>         \n\n        </div>\n\n</ion-col>\n\n<ion-col>\n\n    <div class="progress-wrapper">\n\n      <round-progress \n\n      [background]="\'white\'"\n\n      [color]="\'red\'"\n\n      [current]="30" \n\n      [max]="100" \n\n      [radius]="35"\n\n      [stroke]="5"></round-progress>\n\n      <div class="text">\n\n        35\n\n      </div>\n\n    </div>\n\n</ion-col>\n\n</ion-row>\n\n</ion-card-content>\n\n </ion-card>\n\n <ion-item>\n\n   <ion-label>\n\n     Pending Reviews\n\n   </ion-label>\n\n </ion-item> -->'/*ion-inline-end:"E:\fyp\users1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function PackagedetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PackagedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackagedetailPage');
    };
    PackagedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-packagedetail',template:/*ion-inline-start:"E:\fyp\users1\src\pages\packagedetail\packagedetail.html"*/'<!--\n\n  Generated template for the PackagedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Package Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-card>\n\n\n\n    <img src="./assets/imgs/welltaped.jpg">\n\n\n\n\n\n\n\n    <ion-item>\n\n      <h2>Package Name:</h2>\n\n      <ion-note item-end>Fragile Box </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-note item-end>Fragile Box weighing 2 Kg to be delivered inter city on urgent basis. </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Cost</h2>\n\n      <ion-note item-end>Rs. 250/-</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <h2>Size:</h2>\n\n      <ion-note item-end> Medium </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <h2>Delivery Type:</h2>\n\n      <ion-note item-end> Freelance </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h2>Transport Type:</h2>\n\n      <ion-note item-end> Car </ion-note>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n      <h2>To: 24D Bahar Shah Rd, Lahore\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n      <h2>From: 161 main peco road Lahore\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <img src="./assets/imgs/maps.png">\n\n\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\fyp\users1\src\pages\packagedetail\packagedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PackagedetailPage);
    return PackagedetailPage;
}());

//# sourceMappingURL=packagedetail.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_sign_up_sign_up__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
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
    function CreatePage(navCtrl, navParams, formBuilder, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.submitAttempt = false;
        this.p = __WEBPACK_IMPORTED_MODULE_1__pages_sign_up_sign_up__["a" /* SignUpPage */];
        this.q = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.pet = "S1";
        this.lastImage1 = null;
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
        this.pet = "S1";
    }
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
    CreatePage.prototype.formSubmit = function () {
        var Userdata;
        if (this.TType == 'FLance') {
            Userdata = {
                'ID': 0,
                'PackageName': this.PackageName.value,
                'PackageDesc': this.PackageDesc.value,
                'PickAddress': this.PickAddress.value,
                'DestAddress': this.DestAddress.value,
                'PackageSize': this.PSize,
                'TransportType': this.TType,
                'VehicleType': this.VType,
                'Longitude': 0,
                'Latitude': 0,
                'TransporterID': null,
                'Fare': 0,
            };
        }
        else {
            Userdata = {
                'ID': 0,
                'PackageName': this.PackageName.value,
                'PackageDesc': this.PackageDesc.value,
                'PickAddress': this.PickAddress.value,
                'DestAddress': this.DestAddress.value,
                'PackageSize': this.PSize,
                'TransportType': this.TType,
                'CourierType': this.CType,
                'Longitude': 0,
                'Latitude': 0,
                'TransporterID': null,
                'Fare': 0,
            };
        }
        console.log(Userdata);
        this.http.post('http://localhost:5000/createpackage', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            console.log(responseData);
        }, function (err) {
            console.log('error');
        });
    };
    CreatePage.prototype.next = function () {
        if (this.pet == "S1") {
            this.Screen1 = true;
            if (this.PSize != null && this.PackageName.value != "" && this.PackageDesc.value != "") {
                this.pet = "S2";
            }
            return;
        }
        if (this.pet == "S2") {
            this.Screen2 = true;
            if (this.TType != null) {
                this.pet = "S3";
            }
            return;
        }
        if (this.pet == "S3") {
            this.Screen3 = true;
            if (this.CType != null || this.VType != null) {
                this.pet = "S4";
            }
            return;
        }
        if (this.pet == "S4") {
            this.Screen4 = true;
            if (this.PickAddress.value != "" && this.DestAddress.value != "") {
                this.pet = "S5";
            }
            return;
        }
    };
    CreatePage.prototype.prev = function () {
        if (this.pet == "S2") {
            this.pet = "S1";
            return;
        }
        if (this.pet == "S3") {
            this.pet = "S2";
            return;
        }
        if (this.pet == "S4") {
            this.pet = "S3";
            return;
        }
        if (this.pet == "S5") {
            this.pet = "S4";
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
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
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
        }, function (error) {
            _this.presentToast('Error while storing file.');
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('signupSlider'),
        __metadata("design:type", Object)
    ], CreatePage.prototype, "signupSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CreatePage.prototype, "myInput", void 0);
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"E:\fyp\users1\src\pages\create\create.html"*/'<!--\n\n  Generated template for the CreatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header mode="ios">\n\n\n\n  <ion-navbar mode="ios">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title mode="ios">Create Package</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top mode="ios">\n\n    <ion-segment mode="ios" [(ngModel)]="pet" >\n\n      <ion-segment-button value="S1" disabled="true">Step 1\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S2" disabled="true">Step 2\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S3" disabled="true">Step 3\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S4" disabled="true">Step 4\n\n      </ion-segment-button>\n\n      <ion-segment-button value="S5" disabled="true">Step 5\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bgg">\n\n\n\n  <div [ngSwitch]="pet">\n\n    <button ion-button (click)="getpackage()"></button>\n\n    <form [formGroup]="data" (ngSubmit)="formSubmit()">\n\n    <ion-list no-lines *ngSwitchCase="\'S1\'">\n\n     \n\n  <ion-item>\n\n      <ion-avatar item-start>\n\n        <ion-icon class="photo1" *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n\n        <img src="{{pathForImage(lastImage1)}}" class="avatar1" *ngIf="lastImage1!=null">\n\n      </ion-avatar>\n\n      <h2>Take a Selfie!</h2>\n\n      <button ion-button icon-left (click)="presentActionSheet(1)">\n\n        <ion-icon name="camera"></ion-icon>Select Image\n\n      </button>\n\n    </ion-item>\n\n\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label floating>Package Name</ion-label>\n\n              <ion-input type="text" formControlName="PackageName"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="(PackageName.hasError(\'required\')  && Screen1)">\n\n              <p ion-text color="danger">*Please enter Package Name</p>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label floating>Description</ion-label>\n\n              <ion-textarea formControlName="PackageDesc"></ion-textarea>\n\n            </ion-item>\n\n            <ion-item *ngIf="(PackageDesc.hasError(\'required\')  && Screen1)">\n\n              <p ion-text color="danger">*Please enter Package Description</p>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n     \n\n        <ion-label class="lbl">Package size</ion-label>\n\n        <ion-item *ngIf="PSize == null && Screen1">\n\n          <p ion-text color="danger">*Please choose Package size</p>\n\n        </ion-item>\n\n        <div class="cc-selector">\n\n          <ion-list no-padding>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="mail" name="PSize" [(ngModel)]="PSize" [ngModelOptions]="{standalone: true}" type="radio" value="Small">\n\n                    <label class="drinkcard-cc mail" for="mail"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n\n\n              <ion-col col-6>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="box" name="PSize" [(ngModel)]="PSize" [ngModelOptions]="{standalone: true}" type="radio" value="Medium">\n\n                    <label class="drinkcard-cc box" for="box"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="tv" name="PSize" [(ngModel)]="PSize" [ngModelOptions]="{standalone: true}" type="radio" value="Large">\n\n                    <label class="drinkcard-cc tv" for="tv"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <ion-item>\n\n                  <div class="center">\n\n                    <input id="chair" name="PSize"  type="radio" value="X-Large">\n\n                    <label class="drinkcard-cc chair" for="chair"></label>\n\n                  </div>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-list>\n\n        </div>\n\n\n\n        <button full ion-button (click)="next()">NEXT</button>\n\n      \n\n    </ion-list>\n\n\n\n\n\n    <ion-list no-lines *ngSwitchCase="\'S2\'">\n\n      <div class="center">\n\n        <ion-label class="lbl">Select Transport Type</ion-label>\n\n      </div>\n\n      \n\n      \n\n        <ion-list class="donate-now">\n\n\n\n            \n\n          <ion-item>\n\n              <input id="FLance" name="TType" [(ngModel)]="TType" [ngModelOptions]="{standalone: true}" type="radio" value="FLance" />\n\n            <label for="FLance">FREELANCE</label>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n            <input id="CService" name="TType" [(ngModel)]="TType" [ngModelOptions]="{standalone: true}" type="radio" value="CService" />\n\n            <label for="CService">Courier</label>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="TType == null && Screen2">\n\n              <p ion-text color="danger">*Please choose Delivery Type</p>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-item>\n\n          <ion-label> Contact customer support for Expensive Items </ion-label>\n\n        </ion-item>\n\n\n\n<ion-row>\n\n  <ion-col col-6>\n\n      <button full ion-button (click)="prev()">PREVIOUS</button>\n\n</ion-col>\n\n<ion-col col-6>\n\n    <button full ion-button (click)="next()">NEXT</button>\n\n    \n\n</ion-col>\n\n</ion-row>\n\n        \n\n    </ion-list>\n\n\n\n    <!-- Insert the cc selector here -->\n\n\n\n    <ion-list no-lines *ngSwitchCase="\'S3\'">\n\n\n\n      <div *ngIf="TType === \'FLance\'">\n\n        <div class="cc-selector">\n\n          <ion-row *ngIf="PSize === \'Small\'">\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="Bike" name="TType" [(ngModel)]="VType" [ngModelOptions]="{standalone: true}" type="radio" value="Bike">\n\n                <label class="drinkcard-cc Bike" for="Bike"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="PSize === \'Small\' || PSize === \'Medium\' || PSize === \'Large\'">\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="Car" name="TType" [(ngModel)]="VType" [ngModelOptions]="{standalone: true}" type="radio" value="Car">\n\n                <label class="drinkcard-cc Car" for="Car"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="PSize === \'Large\' || PSize === \'X-Large\'">\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="Pickup" name="TType" [(ngModel)]="VType" [ngModelOptions]="{standalone: true}" type="radio" value="Pickup">\n\n                <label class="drinkcard-cc Pickup" for="Pickup"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="PSize === \'X-Large\'">\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="Truck" name="TType" [(ngModel)]="VType" [ngModelOptions]="{standalone: true}" type="radio" value="Truck">\n\n                <label class="drinkcard-cc Truck" for="Truck"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-item *ngIf="VType == null && Screen3">\n\n              <p ion-text color="danger">*Please choose Transport Type</p>\n\n            </ion-item>\n\n        </div>\n\n      </div>\n\n      <div *ngIf="TType === \'CService\'">\n\n        <div class="cc-selector">\n\n          <ion-item class="center">\n\n            <ion-label class="lbl">\n\n              Select Courier Service\n\n            </ion-label>\n\n          </ion-item>\n\n          \n\n          <ion-card>\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="DHL" name="TType" [(ngModel)]="CType" [ngModelOptions]="{standalone: true}" type="radio" value="DHL">\n\n                <label class="drinkcard-cc DHL" for="DHL"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n\n\n\n\n          <ion-card>\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="TCS" name="TType" [(ngModel)]="CType" [ngModelOptions]="{standalone: true}" type="radio" value="TCS">\n\n                <label class="drinkcard-cc TCS" for="TCS"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n\n\n\n\n          <ion-card>\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="UPS" name="TType" [(ngModel)]="CType" [ngModelOptions]="{standalone: true}" type="radio" value="UPS">\n\n                <label class="drinkcard-cc UPS" for="UPS"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n\n\n\n\n          <ion-card>\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="Leopard" name="TType" [(ngModel)]="CType" [ngModelOptions]="{standalone: true}" type="radio" value="Leopard">\n\n                <label class="drinkcard-cc Leopard" for="Leopard"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n\n\n\n\n          <ion-card>\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="MP" name="TType" [(ngModel)]="CType" [ngModelOptions]="{standalone: true}" type="radio" value="MP">\n\n                <label class="drinkcard-cc MP" for="MP"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-card>\n\n\n\n\n\n\n\n          <ion-card>\n\n            <ion-item>\n\n              <!-- insert buttons stacked here -->\n\n              <div class="center">\n\n                <input id="FedEx" name="TType" [(ngModel)]="CType" [ngModelOptions]="{standalone: true}" type="radio" value="FedEx">\n\n                <label class="drinkcard-cc FedEx" for="FedEx"></label>\n\n              </div>\n\n            </ion-item>\n\n          </ion-card>\n\n          <ion-item *ngIf="CType == null && Screen3">\n\n              <p ion-text color="danger">*Please choose Courier Brand</p>\n\n            </ion-item>\n\n\n\n        </div>\n\n      </div>\n\n      <ion-row>\n\n          <ion-col col-6>\n\n              <button full ion-button (click)="prev()">PREVIOUS</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <button full ion-button (click)="next()">NEXT</button>\n\n            \n\n        </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n    <ion-list no-padding *ngSwitchCase="\'S4\'">\n\n\n\n\n\n      <ion-item>\n\n        <ion-label floating>Pickup Address: </ion-label>\n\n        <ion-textarea formControlName="PickAddress"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item *ngIf="(PickAddress.hasError(\'required\')  && Screen4)">\n\n          <p ion-text color="danger">*Please enter Pickup Address</p>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Destination Address: </ion-label>\n\n        <ion-textarea formControlName="DestAddress"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item *ngIf="(DestAddress.hasError(\'required\')  && Screen4)">\n\n          <p ion-text color="danger">*Please enter Destination Address</p>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <img src="./assets/imgs/maps.png">\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n          <ion-col col-6>\n\n              <button full ion-button (click)="prev()">PREVIOUS</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <button full ion-button (click)="next()">NEXT</button>\n\n            \n\n        </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n    <div *ngSwitchCase="\'S5\'">\n\n\n\n      <ion-card>\n\n\n\n        <img src="./assets/imgs/welltaped.jpg">\n\n\n\n\n\n\n\n        <ion-item>\n\n          <h2>Package Name:</h2>\n\n          <ion-note item-end>Fragile Box </ion-note>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-note item-end>Fragile Box weighing 2 Kg to be delivered inter city on urgent basis. </ion-note>\n\n        </ion-item>\n\n        <ion-item>\n\n          <h2>Cost</h2>\n\n          <ion-note item-end>Rs. 250/-</ion-note>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <h2>Size:</h2>\n\n          <ion-note item-end> Medium </ion-note>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <h2>Delivery Type:</h2>\n\n          <ion-note item-end> Freelance </ion-note>\n\n        </ion-item>\n\n        <ion-item>\n\n          <h2>Transport Type:</h2>\n\n          <ion-note item-end> Car </ion-note>\n\n        </ion-item>\n\n      </ion-card>\n\n\n\n\n\n      <ion-card>\n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n\n          <h2>To: 24D Bahar Shah Rd, Lahore\n\n          </h2>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n\n          <h2>From: 161 main peco road Lahore\n\n          </h2>\n\n        </ion-item>\n\n\n\n        <img src="./assets/imgs/maps.png">\n\n\n\n\n\n      </ion-card>\n\n\n\n      <ion-row>\n\n          <ion-col col-6>\n\n              <button full ion-button (click)="prev()">PREVIOUS</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <button ion-button full  color="secondary" type="submit">CREATE</button>\n\n            \n\n        </ion-col>\n\n        </ion-row>\n\n        \n\n     \n\n\n\n    </div>\n\n</form>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-row>\n\n        <ion-col col-6>\n\n            <button full ion-button (click)="prev()">PREVIOUS</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <button full ion-button (click)="next()">NEXT</button>\n\n          \n\n      </ion-col>\n\n      </ion-row>\n\n</ion-footer>'/*ion-inline-end:"E:\fyp\users1\src\pages\create\create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
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
    function SignUpPage(navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, formBuilder, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.http = http;
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
        this.submitAttempted = true;
        // if(this.lastImage1 ==null){
        //   let alert = this.alertCtrl.create({
        //     title: 'Profile Image Missing',
        //     subTitle: 'Please upload the required image',
        //     buttons: ['Dismiss']
        //   });
        var Userdata = {
            'Name': this.Name.value,
            'Email': this.Email.value,
            'CNIC': this.CNIC.value,
            'Phone': this.Phone.value,
            'Address': this.Address.value,
            'Password': this.Password.value,
            'Date': this.Date.value,
            'Month': this.Month.value,
            'Year': this.Year.value,
            'Gender': this.Gender.value,
        };
        // console.log(Userdata);
        this.http.post('http://localhost:5000/signup', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            console.log(responseData);
        }, function (err) {
            console.log('error');
        });
        //   alert.present();
        //   return;
        // }
        // if( this.lastImage2==null){
        //   let alert = this.alertCtrl.create({
        //     title: 'Liscence Image Missing',
        //     subTitle: 'Please upload the required image',
        //     buttons: ['Dismiss']  
        //   });
        //   alert.present();
        //   return;
        // }
        // if( this.lastImage3==null){
        //   let alert = this.alertCtrl.create({
        //     title: 'Vehicle Registration Image Missing',
        //     subTitle: 'Please upload all required image',
        //     buttons: ['Dismiss']
        //   });
        //   alert.present();
        //   return;
        // }
        //ALL things are now set just need to send data to the back end check for valid!!!/
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"E:\fyp\users1\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the SignUpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SignUp</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-item>\n\n  <ion-label floating>Pickup Address: </ion-label>\n\n  <ion-textarea></ion-textarea>\n\n</ion-item>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <ion-icon class="photo1" *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n\n      <img src="{{pathForImage(lastImage1)}}" class="avatar1" *ngIf="lastImage1!=null">\n\n    </ion-avatar>\n\n    <h2>Take a Selfie!</h2>\n\n    <button ion-button icon-left (click)="presentActionSheet(1)">\n\n      <ion-icon name="camera"></ion-icon>Select Image\n\n    </button>\n\n  </ion-item>\n\n\n\n\n\n  <form [formGroup]="data" (ngSubmit)="logForm()">\n\n    <!-- Name input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Name</ion-label>\n\n      <ion-input type="text" formControlName="Name"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="Name.hasError(\'required\') && submitAttempted">\n\n      <p ion-text color="danger">*Please enter full name</p>\n\n    </ion-item>\n\n\n\n\n\n    <!-- Email input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input type="email" formControlName="Email"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="Email.hasError(\'required\') && submitAttempted">\n\n      <p ion-text color="danger">*Please enter email</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="Email.hasError(\'email\') && Email.touched">\n\n      <p ion-text color="danger">*Please enter proper email</p>\n\n    </ion-item>\n\n\n\n    <!-- CNIC input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>CNIC</ion-label>\n\n      <ion-input formControlName="CNIC" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="(CNIC.hasError(\'required\')  && submitAttempted)">\n\n      <p ion-text color="danger">*Please enter CNIC</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="  CNIC.hasError(\'pattern\') && CNIC.touched">\n\n      <p ion-text color="danger"> *Please enter CNIC with dashes included</p>\n\n    </ion-item>\n\n\n\n    <!-- Phone Number input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Phone Number</ion-label>\n\n      <ion-input formControlName="Phone" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="Phone.hasError(\'required\')  && submitAttempted">\n\n      <p ion-text color="danger">*Please enter phone number</p>\n\n    </ion-item>\n\n    <ion-item *ngIf="Phone.hasError(\'pattern\')  && Phone.touched">\n\n      <p ion-text color="danger"> *Please enter proper phone number(no +92)</p>\n\n    </ion-item>\n\n\n\n    <!-- Address input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Address</ion-label>\n\n      <ion-textarea formControlName="Address"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item *ngIf="Address.hasError(\'required\')  && submitAttempted">\n\n      <p ion-text color="danger">*Please enter Address</p>\n\n    </ion-item>\n\n\n\n\n\n    <!-- Gender input -->\n\n    <ion-item>\n\n      <ion-label color="primary">Gender</ion-label>\n\n      <ion-select formControlName="Gender">\n\n        <ion-option value="gender" selected>Gender</ion-option>\n\n        <ion-option value="male">Male</ion-option>\n\n        <ion-option value="female">Female</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <!-- Date of Birth input -->\n\n    <ion-item>\n\n      <ion-label color="primary">D.O.B</ion-label>\n\n      <ion-select formControlName="Date">\n\n        <ion-option value="Date" selected>Date</ion-option>\n\n        <ion-option value="1">1</ion-option>\n\n        <ion-option value="2">2</ion-option>\n\n        <ion-option value="3">3</ion-option>\n\n        <ion-option value="4">4</ion-option>\n\n        <ion-option value="5">5</ion-option>\n\n        <ion-option value="6">6</ion-option>\n\n        <ion-option value="7">7</ion-option>\n\n        <ion-option value="8">8</ion-option>\n\n        <ion-option value="9">9</ion-option>\n\n        <ion-option value="10">10</ion-option>\n\n        <ion-option value="11">11</ion-option>\n\n        <ion-option value="12">12</ion-option>\n\n        <ion-option value="13">13</ion-option>\n\n        <ion-option value="14">14</ion-option>\n\n        <ion-option value="15">15</ion-option>\n\n        <ion-option value="16">16</ion-option>\n\n        <ion-option value="17">17</ion-option>\n\n        <ion-option value="18">18</ion-option>\n\n        <ion-option value="19">19</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="21">21</ion-option>\n\n        <ion-option value="22">22</ion-option>\n\n        <ion-option value="23">23</ion-option>\n\n        <ion-option value="24">24</ion-option>\n\n        <ion-option value="25">25</ion-option>\n\n        <ion-option value="26">26</ion-option>\n\n        <ion-option value="27">27</ion-option>\n\n        <ion-option value="28">28</ion-option>\n\n        <ion-option value="29">29</ion-option>\n\n        <ion-option value="30">30</ion-option>\n\n        <ion-option value="31">31</ion-option>\n\n      </ion-select>\n\n      <ion-select formControlName="Month">\n\n        <ion-option value="Month" selected>Month</ion-option>\n\n        <ion-option value="Janaury">Janaury</ion-option>\n\n        <ion-option value="February">February</ion-option>\n\n        <ion-option value="March">March</ion-option>\n\n        <ion-option value="April">April</ion-option>\n\n        <ion-option value="May">May</ion-option>\n\n        <ion-option value="June">June</ion-option>\n\n        <ion-option value="July">July</ion-option>\n\n        <ion-option value="August">August</ion-option>\n\n        <ion-option value="September">September</ion-option>\n\n        <ion-option value="October">October</ion-option>\n\n        <ion-option value="November">November</ion-option>\n\n        <ion-option value="December">December</ion-option>\n\n      </ion-select>\n\n      <ion-select formControlName="Year">\n\n        <ion-option value="Year" selected>Year</ion-option>\n\n        <ion-option value="1947">1947</ion-option>\n\n        <ion-option value="1948">1948</ion-option>\n\n        <ion-option value="1949">1949</ion-option>\n\n        <ion-option value="1950">1950</ion-option>\n\n        <ion-option value="1951">1951</ion-option>\n\n        <ion-option value="1952">1952</ion-option>\n\n        <ion-option value="1953">1953</ion-option>\n\n        <ion-option value="1954">1954</ion-option>\n\n        <ion-option value="1955">1955</ion-option>\n\n        <ion-option value="1956">1956</ion-option>\n\n        <ion-option value="1957">1957</ion-option>\n\n        <ion-option value="1958">1958</ion-option>\n\n        <ion-option value="1959">1959</ion-option>\n\n        <ion-option value="1960">1960</ion-option>\n\n        <ion-option value="1961">1961</ion-option>\n\n        <ion-option value="1962">1962</ion-option>\n\n        <ion-option value="1963">1963</ion-option>\n\n        <ion-option value="1964">1964</ion-option>\n\n        <ion-option value="1965">1965</ion-option>\n\n        <ion-option value="1966">1966</ion-option>\n\n        <ion-option value="1967">1967</ion-option>\n\n        <ion-option value="1968">1968</ion-option>\n\n        <ion-option value="1969">1969</ion-option>\n\n        <ion-option value="1970">1970</ion-option>\n\n        <ion-option value="1971">1971</ion-option>\n\n        <ion-option value="1972">1972</ion-option>\n\n        <ion-option value="1973">1973</ion-option>\n\n        <ion-option value="1974">1974</ion-option>\n\n        <ion-option value="1975">1975</ion-option>\n\n        <ion-option value="1976">1976</ion-option>\n\n        <ion-option value="1977">1977</ion-option>\n\n        <ion-option value="1978">1978</ion-option>\n\n        <ion-option value="1979">1979</ion-option>\n\n        <ion-option value="1980">1980</ion-option>\n\n        <ion-option value="1981">1981</ion-option>\n\n        <ion-option value="1982">1982</ion-option>\n\n        <ion-option value="1983">1983</ion-option>\n\n        <ion-option value="1984">1984</ion-option>\n\n        <ion-option value="1985">1985</ion-option>\n\n        <ion-option value="1986">1986</ion-option>\n\n        <ion-option value="1987">1987</ion-option>\n\n        <ion-option value="1988">1988</ion-option>\n\n        <ion-option value="1989">1989</ion-option>\n\n        <ion-option value="1990">1990</ion-option>\n\n        <ion-option value="1991">1991</ion-option>\n\n        <ion-option value="1992">1992</ion-option>\n\n        <ion-option value="1993">1993</ion-option>\n\n        <ion-option value="1994">1994</ion-option>\n\n        <ion-option value="1995">1995</ion-option>\n\n        <ion-option value="1996">1996</ion-option>\n\n        <ion-option value="1997">1997</ion-option>\n\n        <ion-option value="1998">1998</ion-option>\n\n        <ion-option value="1999">1999</ion-option>\n\n        <ion-option value="2000">2000</ion-option>\n\n        <ion-option value="2001">2001</ion-option>\n\n        <ion-option value="2002">2002</ion-option>\n\n        <ion-option value="2003">2003</ion-option>\n\n        <ion-option value="2004">2004</ion-option>\n\n        <ion-option value="2005">2005</ion-option>\n\n        <ion-option value="2006">2006</ion-option>\n\n        <ion-option value="2007">2007</ion-option>\n\n        <ion-option value="2008">2008</ion-option>\n\n        <ion-option value="2009">2009</ion-option>\n\n        <ion-option value="2010">2010</ion-option>\n\n        <ion-option value="2011">2011</ion-option>\n\n        <ion-option value="2012">2012</ion-option>\n\n        <ion-option value="2013">2013</ion-option>\n\n        <ion-option value="2014">2014</ion-option>\n\n        <ion-option value="2015">2015</ion-option>\n\n        <ion-option value="2016">2016</ion-option>\n\n        <ion-option value="2017">2017</ion-option>\n\n        <ion-option value="2018">2018</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <!-- Password input -->\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Password</ion-label>\n\n      <ion-input type="password" formControlName="Password"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n\n      <p ion-text color="danger"> *Password minimum length 6</p>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" block>Create Profile</button>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"E:\fyp\users1\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map