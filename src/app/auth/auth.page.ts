import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {

  email = "";

  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The email entered is Incorrect. Try again"}
    ],
    password:[
      {type:"required", message:"Please enter your Password"},
      {type:"minlength", message:"The must be at least 5 characters or more"}
    ]
  }

  validationFormUser!: FormGroup;
  
  constructor(public formBuilder: FormBuilder, public authService: AuthService, private router: Router, private dataservice: DataService) { }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  LoginUser(value: { email: any; password: any; }){
    console.log("Logged in "+value.email);
    // this.dataservice.setGlobalVariable("alan@gmail.com");
    // this.email = value.email;
    localStorage.setItem('email',value.email)
    try{
      this.authService.loginFireauth(value).then(resp => {
        console.log(resp); 
        // Redirige al usuario a la página de perfil
        this.router.navigate(['/profile']);
      }).catch(error => {
        const errorMessage = this.authService.handleError(error);
        console.log(errorMessage);
        // Mostrar el mensaje de error al usuario
      });
    } catch(err){
      console.log(err);  
    }
  }

}
