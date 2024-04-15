import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.page.html',
  styleUrls: ['./by-category.page.scss'],
})
export class ByCategoryPage implements OnInit {
  favorites = [] as any[];
  email: any;
  categoryTitle = localStorage.getItem('categoryTitle');
  categoryMeals = [] as any;
  ip = localStorage.getItem("ip");

  constructor(private http: HttpClient, private dataservice: DataService) { }

  ngOnInit() {
    console.log(this.categoryTitle);
    
    this.getMealsByCategory(this.categoryTitle);
  }
  ionViewWillEnter() {
    this.getMealsByCategory(this.categoryTitle);
  }

  getMealsByCategory(category: any) {
    this.http.get<any>('http://'+this.ip+'/localdb/recommends.php?category=' + category)
    .subscribe(res => {
      this.categoryMeals = res;
      console.log(this.categoryMeals);
      
    })
  }

}
