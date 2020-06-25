import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../Annonce/authentification.service';
import {ValidationService} from "../Annonce/validation-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [],
      password: [],
      mail: [],
    });
  }

  register(){
    console.dir(this.registerForm.value);
    this.authentificationService.register(this.registerForm);
  }
}
