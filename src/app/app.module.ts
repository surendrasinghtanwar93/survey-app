import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoRecordComponent } from './components/video-record/video-record.component';
import { CreateSurveyModule } from './modules/create-survey/create-survey.module';
import { HomeModule } from './modules/home/home.module';
import { ResponseModule } from './modules/response/response.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateSurveyModule,
    HomeModule,
    ResponseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
