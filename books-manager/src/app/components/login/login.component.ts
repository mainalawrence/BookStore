import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginDetails = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.loginUser(this.loginDetails).subscribe(
      (res) => {
        localStorage.setItem('token', res.token)
        this.router.navigate(["/books"])
      },
      (error) => {
        console.log(error.error);
      }
    )
  }

}
