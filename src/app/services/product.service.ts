import { ListResponseModel } from './../components/models/models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/models/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://localhost:44377/api/products/getall"
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
  }
}
