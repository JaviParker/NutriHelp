import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = [] as any[]

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/categories.php')
    .subscribe(res => {
      // console.log(res.categories);
      this.categories = res.categories;      
    })
  }

}
