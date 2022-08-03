import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './home/components/films/films.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { NavComponent } from './home/components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './home/components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    HeroComponent,
    NavComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
