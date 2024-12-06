import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private apiUrl = 'http://localhost:8080/userlogin'; 

  constructor(private http: HttpClient) {}

  // Method to handle login
  login(userName: string, userPassword: string): Observable<any> {
    // Send login details as query parameters
    const loginData = { userName, userPassword };
    return this.http.post(`${this.apiUrl}/login`, loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
