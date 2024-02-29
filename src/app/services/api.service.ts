import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/localdb/';

  constructor(private http: HttpClient) {}

  postUserData(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost/localdb/add.php', userData)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      // Error en los datos proporcionados por el usuario
      return throwError('Error en los datos proporcionados por el usuario');
    } else {
      // Otro tipo de error
      return throwError('Error en la solicitud POST');
    }
  }
}
