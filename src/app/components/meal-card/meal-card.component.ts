import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent  implements OnInit {

  @Input() id: any;
  tittle: any;
  image: any;
  link: any;
  meal_details = [] as any;
  

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.id)
    .subscribe(res => {
      this.meal_details = res.meals;
      this.meal_details =this.meal_details[0]
      this.tittle = this.meal_details.strMeal;
      this.image = this.meal_details.strMealThumb;
    })
    
    this.link = "/meal/"+this.id;
    
  }
}
