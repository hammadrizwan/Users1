import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivetrackPage } from './livetrack';

@NgModule({
  declarations: [
    LivetrackPage,
  ],
  imports: [
    IonicPageModule.forChild(LivetrackPage),
  ],
})
export class LivetrackPageModule {}
