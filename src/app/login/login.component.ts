import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _service: RegistrationService, 
    private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        localStorage.setItem("loggedUser", JSON.stringify(data));
        this._router.navigate(['/moje-zgrade/home']);
      },
      error => {
        console.log("exception occured");
        this.msg="Niste ispravno uneli korisničko ime ili lozinku";
      }
    );
  }

}
