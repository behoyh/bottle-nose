import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import { VideoComponentComponent } from '../video-component/video-component.component';
import { HttpModule } from '@angular/http';
import { DashjsPlayerModule } from 'angular-dashjs-player';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponentComponent,
    VideoComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DashjsPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
