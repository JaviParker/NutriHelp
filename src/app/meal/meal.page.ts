import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {

  mealId: string | undefined | null;
  meal_details = [] as any[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.mealId = this.activatedRoute.snapshot.paramMap.get("idMeal");
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.mealId)
    .subscribe(res => {
      this.meal_details = res.meals;
      console.log(this.meal_details);
      
      
    })
  }

}
