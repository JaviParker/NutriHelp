import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favorites = [] as any[];
  email: any;

  constructor(private http: HttpClient, private dataservice: DataService) { }

  ngOnInit() {
    this.getFavs();
  }
  ionViewWillEnter() {
    this.getFavs();
  }

  getFavs(){
    this.email = localStorage.getItem('email');
    this.http.get<any>('http://localhost/localdb/controlFav.php?user_email='+this.email)
    .subscribe(res => {
      this.favorites = res;            
    })
  }

}
