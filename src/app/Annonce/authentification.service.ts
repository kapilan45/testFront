import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import { Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import {AuthStorageService} from "./auth-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient, private authStorageService: AuthStorageService) { }

  // Create user in database
  register(registerForm: FormGroup) {
    console.dir(registerForm.value);
    this.httpClient.post(GlobalConfig.registerApiUrl, registerForm.value, {observe: 'response'}).subscribe(response => {
      console.log('registered');
      let token = response.headers.get("cache-control");
      this.authStorageService.setLoginResult(response.body, token);
    }, error => {
      console.log('error to register');
    });
  }

  // log user after check id in database
  login(loginForm: FormGroup) {

    let header = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post(GlobalConfig.loginApiUrl, loginForm.value, {headers: header, observe: "response", responseType: "json"}).subscribe(response => {
      if(response != null){
        let token = response.headers.get("cache-control");
        this.authStorageService.setLoginResult(response.body, token);
      }else {
        console.log("erreur de reception de token");
      }
      }, error => {
      console.dir(error);
      console.log("erreur to log");
    });
  }

  logout() {
    this.authStorageService.logout();
  }
}
