import { CategoryService } from './../../services/category.service';
import { Category } from './../models/models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = []
  dataLoaded: boolean = false
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //console.log("init çalıştı")
    this.getCategories()
  }
  getCategories() {
    console.log("Metot async çalışşır")
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
      this.dataLoaded = true
    })
  }

}
