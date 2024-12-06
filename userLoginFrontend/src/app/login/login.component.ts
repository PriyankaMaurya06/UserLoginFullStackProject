import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';  // Import the login service

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    if (this.username && this.password) {
      this.userService.login(this.username, this.password).subscribe(
        () => {},
        (error) => {
          if (error.status === 401 ) {
            alert('Invalid username or password !!\n Try again !!');
            window.location.reload();
          } else if (error.status===200) {
            this.router.navigate(['/welcome']);
          } else {
            alert('Login error !!')
          }
        }
      );
    } else {
      alert('Please fill all fields.');
    }
  }

  onSignup() {
    this.router.navigate(['/signup']);  // Navigate to signup page
  }
}
