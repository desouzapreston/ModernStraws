import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    let reqObject = this.productForm.value
    console.log("onSubmit", reqObject)
    this.dataService.insert("Product", reqObject)
  }

}
