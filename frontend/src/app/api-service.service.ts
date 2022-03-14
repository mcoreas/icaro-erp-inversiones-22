import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError,catchError } from 'rxjs';

@Injectable()

export class ApiService {
    constructor(private http: HttpClient) {

    }

  urlService = `http://localhost:8000/api/`;

  //obtener toda la data
  getData(termino: any) {
    let url = this.urlService + termino;
    return this.http.get(url)
    .pipe(
      catchError(this.error)
    )
  }

  putOneData(termino: any, data: any) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let url = this.urlService + termino;
      let body = JSON.stringify(data);
      return this.http.put(url, body, { headers })
      .pipe(
        catchError(this.error)
      )
  }

  postData(termino: any, data: any) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let url = this.urlService + termino;
      let body = JSON.stringify(data);
      return this.http.post(url, body, { headers })
      .pipe(
        catchError(this.error)
      )
  }

  deleteData(termino: any) {
      let url = this.urlService + termino;
      return this.http.delete(url)
      .pipe(
        catchError(this.error)
      )
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUserLogged() {
    return this.getToken();
  }

error(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
