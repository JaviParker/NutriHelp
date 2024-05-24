import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {

  mealId: any = null;
  meal_details = [] as any[]
  id: any;
  email: any;
  added: boolean = false;

  ip = localStorage.getItem("ip");

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.mealId = this.activatedRoute.snapshot.paramMap.get("idMeal");
    localStorage.setItem('id',this.mealId);
    this.id=localStorage.getItem('id');
    
    this.email=localStorage.getItem('email');
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.mealId)
    .subscribe(res => {
      this.meal_details = res.meals;
      // console.log(this.meal_details);
    })
    this.checkFavoriteStatus();
  }

  checkFavoriteStatus(){
    this.http.get<any>('http://'+this.ip+'/localdb/controlFav.php?id="'+this.id+'"&user_email='+this.email)
    .subscribe(res => {
      this.added = res.success;
      
    },error => {
      console.error('Error en la solicitud DELETE:', error);
    });
  }

  addToFavorites(){
    const mealData = {
      id: localStorage.getItem('id'),
      user_email: localStorage.getItem('email')
    };
    if(this.added == false){
      this.http.post<any>('http://'+this.ip+'/localdb/controlFav.php', mealData)
      .subscribe(res => {
        this.checkFavoriteStatus();
        this.PostedMessage();
      }, error => {
        console.error('Error en la solicitud POST:', error);
      });
    }
  }

  deleteMeal(){
    this.http.delete<any>('http://'+this.ip+'/localdb/controlFav.php?id='+this.id+'&user_email='+this.email)
    .subscribe(res => {
      // console.log('Delete exitoso:', res);
      this.CleanedMessage();
      this.checkFavoriteStatus();
    }, error => {
      console.error('Error en la solicitud DELETE:', error);
    });
  }

  controlFavorite(){
    if(this.added == false){
      this.addToFavorites();
    }else if(this.added == true){
      this.deleteMeal();
    }
  }

  async PostedMessage(){
    const toast = await this.toastController.create({
      message: 'Agregado a favoritos.',
      duration: 3500
    });
    toast.present();
  }
  async CleanedMessage(){
    const toast = await this.toastController.create({
      message: 'Eliminado de favoritos.',
      duration: 3500
    });
    toast.present();
  }

}
