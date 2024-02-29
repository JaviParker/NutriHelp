import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  loginFireauth(value: { email: any; password: any; }){
    return new Promise<any> ( (resolve, reject)=>{
      this.auth.signInWithEmailAndPassword(value.email, value.password)
        .then((res: any) => resolve(res))
        .catch((error: any) => reject(error));
    })
  }

  userRegistration(value: any){
    return new Promise<any> ((resolve, reject) =>{
      this.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then((res: any) => resolve(res))
        .catch((error: any) => reject(error));
    })
  }

  handleError(error: any): string {
    let errorMessage = '';
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'User not found';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Wrong password';
    } else {
      errorMessage = 'Unexpected error occurred. Please try again later.';
    }
    return errorMessage;
  }
}
