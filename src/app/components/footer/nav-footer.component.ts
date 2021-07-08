import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {
  constructor(private loginService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    let user = localStorage.getItem("loggedUser");
    if (user != null && user != "") {
      this.loginService.logoutUserFromRemote(JSON.parse(user)).subscribe(
        data => {
          localStorage.setItem("loggedUser", JSON.stringify(data));
          this.router.navigate(['/loginsuccess']);
        },
        error => {
          console.log(error);
          alert("Nije moguce da se izlogujete jer korisnik nije ulogovan ili registrovan");
          this.router.navigate(['']);
        }

      );
      localStorage.setItem('loggedUser', "");
    }
  }
}
