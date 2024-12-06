import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersignService } from './usersign.service';   

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
 
  constructor(private router: Router, private userSign: UsersignService) {}

  // Method to handle the signup
  onSubmit() {
    if (this.username && this.password) {
      this.userSign.signup(this.username, this.password).subscribe(
        () => {},
        (error) => {
          if (error.status === 400 ) {
            alert('The username is already taken. Please choose another one.');
            window.location.reload();
          } else if(error.status === 201){
            alert('Registration successful! Login Now !!');
            this.router.navigate(['/login']);
          } else {
            alert('Signup error !!');
          }
        }
      );
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Redirect to login page
  onLogin() {
    this.router.navigate(['/login']);
  }
}
