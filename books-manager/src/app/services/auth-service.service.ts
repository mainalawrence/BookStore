import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
  
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: User) {
    return this.http.post<any>("http://localhost:5500/api/auth/login", user);
  }

  registerUser(user: User) {
    return this.http.post<any>("http://localhost:5500/api/auth/register", user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(["/login"])
  }

}
