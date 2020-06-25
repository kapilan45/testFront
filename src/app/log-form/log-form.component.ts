import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../Annonce/authentification.service';
import {ValidationService} from "../Annonce/validation-service";


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      username: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required],
      remember: [Validators.required],
    });
  }

  login() {
    this.authentificationService.login(this.loginForm);
  }

}
