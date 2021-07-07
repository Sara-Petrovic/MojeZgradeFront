import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SednicaSkupstine } from '../model/sednica-skupstine';
import { User } from '../model/user';
import { SednicaSkupstineService } from '../services/sednica-skupstine.service';


@Component({
  selector: 'app-sednica-list',
  templateUrl: './sednica-list.component.html',
  styleUrls: ['./sednica-list.component.css']
})
export class SednicaListComponent implements OnInit {

  sednice: Observable<SednicaSkupstine[]>;
  ulica: string;

  user: User;

  constructor(private sednicaService: SednicaSkupstineService,
    private router: Router) {
      let user = localStorage.getItem("loggedUser"); 
      if (user == null) {
        user = "";
      }
      this.user = JSON.parse(user);
     }

  ngOnInit() {
    this.reloadData();
    this.ulica="";
  }

  reloadData() {
    this.sednice = this.sednicaService.getAllSedniceSkupstine(this.user);
    
  }


  sednicaDetails(id: number) {
    this.router.navigate(['detailssednica', id]);
  }
  findSednicaByUlica(){
    if (this.ulica == "") {
      this.sednice = this.sednicaService.getAllSedniceSkupstine(this.user);
    } else {
      this.sednice = this.sednicaService.getSednicaSkupstineByUlicaFromRemote(this.ulica,this.user);
    }
  }

}
