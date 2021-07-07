import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { Racun } from '../model/racun';
import { User } from '../model/user';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { RacunService } from '../services/racun.service';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-racun-list',
  templateUrl: './racun-list.component.html',
  styleUrls: ['./racun-list.component.css']
})
export class RacunListComponent implements OnInit {
  vlasnici!: VlasnikPosebnogDela[];
  selectedVlasnik!: VlasnikPosebnogDela;

  racuni!: Observable<Racun[]>;
  searchCriteria!: string;
  show: Array<boolean>;
  status!: string;
  vlasnik!: VlasnikPosebnogDela;

  login: Login;

  constructor(private racunService: RacunService,
    private router: Router,
    private vlasnikService: VlasnikPosebnogDelaService) {
    this.show = new Array<boolean>(3);
    this.show[0] = true;
    this.show[1] = false;

    let user = localStorage.getItem("loggedUser");
    if (user == null) {
      user = "";
    }
    this.login = JSON.parse(user);
  }

  ngOnInit(): void {
    this.reloadData();
    this.vlasnik = new VlasnikPosebnogDela;
    this.status = "";
    this.selectSearchCriteria();
  }

  fillComboBoxVlasnici(): void {
    this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote(this.user)
      .subscribe(vlasnici => { this.vlasnici = vlasnici; console.log(vlasnici) });
  }
  
  home() {
    this.router.navigate(['loginsuccess']);
  }

  reloadData() {
    this.racuni = this.racunService.getAllRacunFromRemote(this.login);
  }

  findRacunByStatusFromRemote() {
    if (this.status == "") {
      this.racuni = this.racunService.getAllRacunFromRemote(this.login);
    } else {
      this.racuni = this.racunService.findRacunByStatusFromRemote(this.login, this.status);
    }
  }

  selectSearchCriteria() {
    if (this.searchCriteria == "vlasnik") {
      this.fillComboBoxVlasnici();
      this.show[0] = false;
      this.show[1] = true;
    } else {
      this.status = "";
      this.show[0] = true;
      this.show[1] = false;
    }
  }

  findRacunByVlasnikFromRemote() {
    this.racuni = this.racunService.findRacunByVlasnikFromRemote(this.login, this.selectedVlasnik);
  }

  racunDetails(id: number) {
    this.router.navigate(['detailsracun', id]);
  }
}
