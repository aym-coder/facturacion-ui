import { Injectable } from '@angular/core';
import { Service } from './service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  protected prefix = 'user';
  private isAuthenticated;
  private user = null;

  constructor(protected httpClient: HttpClient,
    private router: Router) {
    super(httpClient);

    // eventsService.reloadCurrentUserEvent.subscribe({
    //   next: (event: User) => {
    //     this.currentUser = event;
    //     this.token = event.token;
    //   }
    // });

  }

  public login(email, password) {

    return this.httpClient.post(`${environment.apiUrl}/auth/login`, {'email': email, 'password': btoa(password)})
    .pipe(map((response: ApiResponse) => {
        if (response.result) {
          localStorage.setItem('collectorUser', JSON.stringify(response.data));
        }
        return response;
      }),
      catchError(this.handleError)
    );

  }

  verifyAuthenticated() {

    if (JSON.parse(localStorage.getItem('collectorUser'))) {
      return this.isAuthenticated = true;
    }

    return this.isAuthenticated = false;
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.clear();
    localStorage.removeItem('collectorUser');
    this.router.navigate(['/login']);
  }

}
