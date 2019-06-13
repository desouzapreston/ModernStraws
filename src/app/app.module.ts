import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularFirestore } from '@angular/fire/firestore';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { environment } from '../environments/environment';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { DataService } from './data/data.service';
import { AppContactForm } from './home/contact-form.component';
import { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DonateComponent,
    HomeComponent,  
    MenuComponent, 
    ProductListComponent, 
    ProductDetailComponent, 
    AppContactForm,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    DataService,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);