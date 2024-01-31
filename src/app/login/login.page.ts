import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  local_nickname: number | undefined;
  local_password: number | undefined;
  // userData = [] as any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

  }

  checkUser(){
    this.http.get<any>('http://localhost/localdb/login.php?nickname='+this.local_nickname)
    .subscribe(res => {
      const userData = res[0];
      const password = userData.pass;
      const nickname = userData.nickname;
      console.log(userData);
      console.log(nickname);
      console.log(password);
      console.log(this.local_password);
      
      
      if(password == this.local_password){
        this.router.navigate(['\profile'])
      }else{
        console.log("error");
        
      }
    })
  }


}
