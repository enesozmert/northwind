import { ProductResponseModel } from './../models/models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  dataLoaded: boolean = false
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //console.log("init çalıştı")
    this.getProducts()
  }
  getProducts() {
    console.log("Metot async çalışşır")
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

}
