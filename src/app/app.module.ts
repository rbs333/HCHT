import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';


@NgModule({
  declarations: [
    AppComponent, 
    EpisodesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

