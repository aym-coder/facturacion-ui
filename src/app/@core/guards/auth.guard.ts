import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    // getState: Observable<any>;
    // isAuthenticated = false;
    // user = null;
    // errorMessage = null;

    constructor( private router: Router,
        private userService: UserService) {}

    async canActivate() {
      const isAuth = this.userService.verifyAuthenticated();
      if (isAuth) {
        return true;
      }
        this.router.navigate(['/login']);
        return false;
    }
}
