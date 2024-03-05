import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationUserMessage = {
    nickname: [{type:'required', message:'Please introduce your nickname'}],
    email: [
      {type:'required', message:'Please introduce your email'},
      {type:'pattern', message:'The email entered is incorrect or incomplete... try again'}],
    password: [
      {type:'required', message:'Please introduce your password'},
      {type:'minlenght', message:'Use at least 6 characters'}]
  }

  validationFormUser : FormGroup | any;
  loading: any;

  constructor(
    private formbuilder: FormBuilder, 
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    // private loading: LoadingController,
    private navController: NavController,
    private router: Router,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      // nickname: new FormControl('', Validators.compose([
      //   Validators.required,
      // ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }


  registerUser(value: any){
    this.showalert();
    try {
      this.authService.userRegistration(value).then( (response: any) =>{
        this.dataservice.setGlobalVariable(value.email);
        localStorage.setItem('email',value.email);
        console.log(response);
        if(response.user){
          response.user.updateProfile({
            displayName: value.nickname, // Usar nickname en lugar de name
          }).then(() => {
            // Actualización del perfil exitosa
            this.loading.dismiss();
            this.router.navigate(['categories'])
          }).catch((error: any) => {
            // Error al actualizar el perfil
            this.loading.dismiss();
            this.errorLoading(error.message);
          });
        }
      }).catch((error: any) => {
        // Error al crear usuario
        this.loading.dismiss();
        this.errorLoading(error.message);
      });
    } catch (erro) {
      console.log(erro);
    }
  }
  
  async errorLoading(message: any) {
    if (this.loading) {
      await this.loading.dismiss();
    }
    
    const alert = await this.alertController.create({
      header: 'Error registering',
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navController.navigateBack(['signup']);
          }
        }
      ]
    });
    await alert.present();
  }
  
  async showalert() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000 // Opcional: Puedes establecer una duración para que se cierre automáticamente después de cierto tiempo
    });
    await this.loading.present();
  }
}
