import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { About } from './about/about.component';

export const routes: Routes = [
  {
    path: 'about',
    component: About
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

