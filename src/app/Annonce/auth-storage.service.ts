import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  constructor(private route: Router) { }

  token: string;
  user: string = null;


  setLoginResult(user: Object, token: string) {
    this.user = user['username'];
    this.token = token;
    localStorage.setItem(this.user, token);

    this.route.navigate(['/offres']);
  }

  logout() {
    console.log('logout');
    this.user = null;
    this.token = null;

    localStorage.setItem(this.user, null);

    this.route.navigate(['/offres']);
  }

  getAuthHeader(): {} {
    if (this.token) {
      return {
        Authorization: this.token
      };
    } else if (this.user) {
      return {
        Authorization: this.user
      };
    } else {
      return undefined;
    }
  }

}
