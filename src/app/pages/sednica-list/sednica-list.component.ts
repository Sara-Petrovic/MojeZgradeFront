import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login';
import { SednicaSkupstine } from 'src/app/model/sednica-skupstine';
import { SednicaSkupstineService } from 'src/app/services/sednica-skupstine.service';

@Component({
  selector: 'app-sednica-list',
  templateUrl: './sednica-list.component.html',
  styleUrls: ['./sednica-list.component.css']
})
export class SednicaListComponent implements OnInit {
  sednice!: Observable<SednicaSkupstine[]>;
  ulica!: string;

  login: Login;

  constructor(private sednicaService: SednicaSkupstineService,
    private router: Router) {
      let user = localStorage.getItem("loggedUser"); 
      if (user == null) {
        user = "";
        this.router.navigate(['']);
      }
      this.login = JSON.parse(user);
     }

  ngOnInit() {
    this.reloadData();
    this.ulica="";
  }

  reloadData() {
    this.sednice = this.sednicaService.getAllSedniceSkupstine(this.login);
    
  }

  sednicaDetails(id: number) {
    this.router.navigate(['detailssednica', id]);
  }
  findSednicaByUlica(){
    if (this.ulica == "") {
      this.sednice = this.sednicaService.getAllSedniceSkupstine(this.login);
    } else {
      this.sednice = this.sednicaService.getSednicaSkupstineByUlicaFromRemote(this.ulica, this.login);
    }
  }

}
