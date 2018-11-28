import { FishingdayService } from './fishingday.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishingdaysComponent } from './fishingdays/fishingdays.component';
import { FormsModule } from '@angular/forms';
import { AddfishingdayComponent } from './addfishingday/addfishingday.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    FishingdaysComponent,
    AddfishingdayComponent,
    NavigationComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [FishingdayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
