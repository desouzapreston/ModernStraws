import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { Subscription } from 'rxjs';
import { DataObject } from '../data/DataObject';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'description', 'price']

  // products: Observable<DataObject[]>
  
  dataSource: MatTableDataSource<DataObject>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscription: Subscription

  constructor(private router: Router, private dataService: DataService) {
  }

  setupDataSource(products: DataObject[]) {
    this.dataSource = new MatTableDataSource(products)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.dataSource.filterPredicate = (data, filter) => {
    //   return this.displayedColumns.some(ele => {
    //     if (data[ele] != undefined) {
    //       if (data[ele].toString().toLowerCase().indexOf(filter) >= 0) {
    //         console.log("true", data, filter)
    //         return true;
    //       }
    //     }
    //     console.log("false", data, filter)
    //     return false;
    //   })
    // }
    // this.dataSource.connect()
  }

  ngOnInit() {
    let products = this.dataService.read("Product")
    this.subscription = products.subscribe((data: DataObject[]) => {
      console.log("updating products", data)
      // this.dataSource.data = data;
      this.setupDataSource(data)
    })
  }

  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onCreate() {
    this.router.navigateByUrl('/productDetail');
  }

  applyFilter(filterValue: string) {
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
