import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { CreatePage } from '../pages/create/create';
import { InprogressPage } from '../pages/inprogress/inprogress';
import { PendingPage } from '../pages/pending/pending';
import { HelpPage } from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { LandingPage } from '../pages/landing/landing';
import { ActivePage } from '../pages/active/active';
import { AllPage } from '../pages/all/all';
import { ProfilePage } from '../pages/profile/profile';
import { PackagedetailPage } from '../pages/packagedetail/packagedetail';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    LoginPage,
    CreatePage,
    InprogressPage,
    PendingPage,
    HelpPage,
    NotificationPage,
    LandingPage,
    ActivePage,
    AllPage,
    ProfilePage,
    PackagedetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   SignUpPage,
    LoginPage,
    CreatePage,
    InprogressPage,
    PendingPage,
    HelpPage,
    NotificationPage,
    LandingPage,
    ActivePage,
    AllPage,
    ProfilePage,
    PackagedetailPage
  ],
  providers: [
    File,
    Transfer,
    Camera,
    FilePath,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
