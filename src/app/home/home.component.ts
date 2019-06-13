import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// export interface Tile {
//   color: string;
//   columns: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigateByUrl('/contactForm');
    // this.router.navigate(['/contactForm', 'myData']);
  }

}