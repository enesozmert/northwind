import { Category } from './../components/models/models/category';
import { ListResponseModel } from './../components/models/models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = "https://localhost:44377/api/categories/getall"
  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
  }
}
