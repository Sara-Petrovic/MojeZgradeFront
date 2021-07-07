import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { User } from '../model/user';
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';


@Component({
  selector: 'app-stambenazajednica-list',
  templateUrl: './stambenazajednica-list.component.html',
  styleUrls: ['./stambenazajednica-list.component.css']
})
export class StambenazajednicaListComponent implements OnInit {

  zajednice!: Observable<StambenaZajednica[]>;
  searchCriteria!: string;
  pib!: string;
  maticniBroj!: string;
  ulica!: string;
  broj!: string;
  show: Array<boolean>;
  login: Login;

  constructor(private szService: StambenaZajednicaService,
    private router: Router) {
    this.show = new Array<boolean>(3);
    this.show[0] = true;
    this.show[1] = false;
    this.show[2] = false;
    let login = localStorage.getItem("loggedUser");
    if (login == null) {
      login = "";
    }
    this.login = JSON.parse(login);

  }

  ngOnInit() {
    this.reloadData();
    this.pib = "";
    this.maticniBroj = "";
    this.ulica = "";
    this.broj = "";
    this.selectSearchCriteria();
  }

  reloadData() {
    this.zajednice = this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login);
  }

  deleteStambenaZajednica(id: number) {
    this.szService.deleteStambenaZajednicaFromRemote(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  stambenaZajednicaDetails(id: number) {
    this.router.navigate(['detailsstambenazajednica', id]);
  }
  stambenaZajednicaUpdate(id: number) {
    this.router.navigate(['detailsstambenazajednica', id]);
  }

  findStambenaZajednicaByPibFromRemote() {
    if (this.pib == "") {
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login);
    } else if (this.pib.length != 9) {
      alert("PIB mora da ima tačno 9 cifara.");
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login);
    } else {
      this.zajednice = this.szService.findStambenaZajednicaByPibFromRemote(this.login,this.pib);
    }
  }

  findStambenaZajednicaByMaticniBrojFromRemote() {
    if (this.maticniBroj == "") {
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login);
    } else if (this.maticniBroj.length != 8) {
      alert("Maticni broj mora da ima tačno 8 cifara.");
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login);
    } else {
      this.zajednice = this.szService.findStambenaZajednicaByMaticniBrojFromRemote(this.login, this.maticniBroj);
    }
  }

  findStambenaZajednicaByUlicaIBrojFromRemote() {
    if (this.ulica == "") {
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login);
    } else {
      this.zajednice = this.szService.findStambenaZajednicaByUlicaIBrojFromRemote(this.login, this.ulica, this.broj);
    }
  }

  selectSearchCriteria() {
    if (this.searchCriteria == "maticniBroj") {
      this.maticniBroj = "";
      this.show[0] = false;
      this.show[1] = true;
      this.show[2] = false;
    } else if (this.searchCriteria == "ulica-broj") {
      this.ulica = "";
      this.broj = "";
      this.show[0] = false;
      this.show[1] = false;
      this.show[2] = true;
    } else {
      this.pib = "";
      this.show[0] = true;
      this.show[1] = false;
      this.show[2] = false;
    }
  }

  home() {
    this.router.navigate(['loginsuccess']);
  }

}
