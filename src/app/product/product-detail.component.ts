import { DataService } from '../data/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = "Product Detail"
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  })

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    let formObject = this.productForm.value
    // console.log("onSubmit", reqObject)
    this.dataService.insertUpdate("Product", formObject)
    this.router.navigateByUrl('/productList');
  }

}
