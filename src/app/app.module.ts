import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './UI/navigation/navigation.component';
import { FooterComponent } from './UI/footer/footer.component';
import { SpinnerComponent } from './UI/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SpinnerComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
