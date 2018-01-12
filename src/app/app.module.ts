import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PgclassesComponent } from './pgclasses/pgclasses.component';

import { AppRoutingModule } from './app-routing.module';
import { FaqComponent } from './faq/faq.component';
import { WeatherComponent } from './weather/weather.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    PgclassesComponent,
    FaqComponent,
    WeatherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
