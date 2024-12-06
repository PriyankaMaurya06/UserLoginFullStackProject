import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersignService {

 constructor(private http: HttpClient) { }
  private signupUrl = 'http://localhost:8080/userlogin/signup';  

  // Send signup request to Spring Boot backend
  signup(username: string, password: string): Observable<any> {
    return this.http.post(this.signupUrl, { username, password });
  }

}
