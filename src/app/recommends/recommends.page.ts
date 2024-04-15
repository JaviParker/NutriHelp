import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommends',
  templateUrl: './recommends.page.html',
  styleUrls: ['./recommends.page.scss'],
})
export class RecommendsPage implements OnInit {

  favorites: any[] = [];
  categorySelected = [] as any[];
  goal = localStorage.getItem('selectedGoal');
  categories = [] as any[];
  ip = localStorage.getItem("ip");

  mealsByCategory: { [category: string]: any[] } = {};


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if(this.goal == "lose"){
      this.categories = ["Bajo en grasas saturadas", "Bajo en azúcares añadidos", "Bajo en sodio","Bajo en colesterol","Bajo en carbohidratos"]
    }else if(this.goal == "gain"){
      this.categories = ["Alto en proteínas","Alto en grasas saludables","Rico en vitaminas y minerales","Fuente de energía sostenida"]
    }

    if(localStorage.getItem("allergy") == "libre de gluten"){
      this.categories.unshift(localStorage.getItem("allergy"));
    }

    this.getMealsForAllCategories();
    console.log(localStorage.getItem('selectedGoal'));
    
  }

  getMealsForAllCategories() {
    this.categories.forEach(category => {
      this.getMealsByCategory(category).subscribe(res => {
        this.mealsByCategory[category] = res;
      });
    });
  }

  getCategories(){
    this.http.get<any>('http://'+this.ip+'/localdb/getCategories.php')
    .subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    })
  }

  getMealsByCategory(category: any): Observable<any[]> {
    return this.http.get<any[]>('http://'+this.ip+'/localdb/recommends.php?category=' + category);
  }

  getMealsByCategory2(category: any) {
    this.http.get<any>('http://'+this.ip+'/localdb/recommends.php?category=' + category)
    .subscribe(res => {
      this.categorySelected = res;
      console.log(this.categorySelected);
      
    })
  }

  saveCategory(category: string) {
    this.getMealsByCategory2(category);
    localStorage.setItem("categoryTitle", category);
    this.router.navigate(['/by-category']);
  }
}




// getMealsByCategory(category: any){ 
//   var mealsByCategory = [] as any[];
//   this.http.get<any>('http://localhost/localdb/recommends.php?category='+category)
//   .subscribe(res => {
    
//     mealsByCategory = res;
           
//     console.log(mealsByCategory);
//   })
  
//   return mealsByCategory; 
// }