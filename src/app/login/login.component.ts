import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { User } from '../model/user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        localStorage.setItem("loggedUser", JSON.stringify(data));
        this._router.navigate(['/loginsuccess']);
      },
      error => {
        console.log("exception occured");
        this.msg="Pogresan email i/ili lozinka. Molimo pokusajte ponovo.";
      }
    );
  }

}
