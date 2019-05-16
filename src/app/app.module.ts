import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DonateComponent,
    HomeComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);