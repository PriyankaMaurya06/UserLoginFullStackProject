import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private loginUrl = 'http://localhost:8080/userlogin/login';  

  // Send login request to Spring Boot backend
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password });
  }

}
