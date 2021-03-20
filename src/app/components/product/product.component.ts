import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  dataLoaded: boolean = false
  filterText:string=""
  constructor(private productService: ProductService,
     private activatedRoute: ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts()
      }
    })
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
  getProductsByCategory(categoryId: number) {
    console.log("Metot async çalışşır")
    this.productService.getProductsByCategoryId(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }
  addToCart(product:Product){
    console.log(product.productName);
    this.toastrService.success("Added To Cart",product.productName)
    this.cartService.addToCart(product);
  }
}
