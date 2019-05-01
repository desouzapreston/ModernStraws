import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => console.log("side menu id parameter", params['id']))
  }

  ngOnInit() {
  }
}
