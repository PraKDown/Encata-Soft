import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(LoginData) {
    return this.http.post('https://localhost:3000/api/login', LoginData);
  }

  registration(RegData) {
    return this.http.post('https://localhost:3000/api/registration', RegData);
  }
}
