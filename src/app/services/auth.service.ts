import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from './user.service';
import { BehaviorSubject, of, tap, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenExpiration : number=0;
  private logoutSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  Users: User[] = []
  currentUser: User = <User>{};
  constructor(private userService: UserService, private toast :ToastrService) { }

  login(email?: string, password?: string): boolean {
    this.userService.getUsers().subscribe((users) => {
      this.Users = users;
    })
    const index = this.Users.findIndex((u) => u.email === email && u.password === password);
    if (index !== -1) {
      this.currentUser = this.Users[index];
      localStorage.setItem('token', window.btoa(this.currentUser.email));
      //this.tokenExpiration = Date.now() + 3 * 60 * 1000;
      return true
    }

    return false;
  }



  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }
  userData() {
    return this.Users.find(el => el.email == window.atob(localStorage.getItem('token') as string))
  }
  logout() {
    localStorage.removeItem('token');
  //  this.logoutSubject.next(true);
    return of(true);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token')
  }
}
