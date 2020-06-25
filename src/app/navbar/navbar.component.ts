import { Component, OnInit } from '@angular/core';
import {AuthStorageService} from "../Annonce/auth-storage.service";
import {AuthentificationService} from "../Annonce/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthStorageService, private authentificationService: AuthentificationService) { }

  ngOnInit() {
  }


  logout() {
    this.authentificationService.logout();
  }
}
