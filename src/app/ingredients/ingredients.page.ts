import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {
  category: string | null | undefined;

  meals = [] as any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.category= this.activatedRoute.snapshot.paramMap.get("strCategory");
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.category)
    .subscribe(res => {
      this.meals = res.meals
      // console.log(this.meals);
      
    })
  }

}
