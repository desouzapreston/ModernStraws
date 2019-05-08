import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //empty path case
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, //fallback route for wildcard '**' (invalid URLs)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

