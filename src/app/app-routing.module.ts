import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AppContactForm } from './home/contact-form.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'contactForm', component: AppContactForm },
  // { path: 'contactForm/:parm', component: AppContactForm },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //empty path case
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, //fallback route for wildcard '**' (invalid URLs)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

