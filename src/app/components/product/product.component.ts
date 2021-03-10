import { ProductResponseModel } from './../models/models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  apiUrl: string = "https://localhost:44377/api/products/getall"

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //console.log("init çalıştı")
    this.getProducts()
  }
  getProducts() {
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data
    })
  }

}
