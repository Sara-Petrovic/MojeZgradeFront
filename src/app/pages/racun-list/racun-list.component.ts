import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login';
import { Racun } from 'src/app/model/racun';
import { VlasnikPosebnogDela } from 'src/app/model/vlasnik-posebnog-dela';
import { RacunService } from 'src/app/services/racun.service';
import { VlasnikPosebnogDelaService } from 'src/app/services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-racun-list',
  templateUrl: './racun-list.component.html',
  styleUrls: ['./racun-list.component.css']
})
export class RacunListComponent implements OnInit {

  sviStatusi!: String[];

  vlasnici!: VlasnikPosebnogDela[];
  selectedVlasnik!: VlasnikPosebnogDela;

  racuni!: Observable<Racun[]>;
  searchCriteria!: string;
  show: Array<boolean>;
  status!: string;
  vlasnik!: VlasnikPosebnogDela;

  login: Login;

  msg = '';

  constructor(private racunService: RacunService,
    private router: Router,
    private vlasnikService: VlasnikPosebnogDelaService) {
    this.show = new Array<boolean>(3);
    this.show[0] = true;
    this.show[1] = false;

    this.racunService.getAllRacunStatus()
      .subscribe(sviStatusi => { this.sviStatusi = sviStatusi; console.log(sviStatusi) });

    let user = localStorage.getItem("loggedUser");
    if (user == null || user == "") {
      user = "";
      this.router.navigate(['']);
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
    this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote(this.login)
      .subscribe(vlasnici => { this.vlasnici = vlasnici; console.log(vlasnici) });
  }

  home() {
    this.router.navigate(['loginsuccess']);
  }

  reloadData() {
    this.racuni = this.racunService.getAllRacunFromRemote(this.login);
    this.racuni.subscribe(
      data => {
        if (data.length == 0)
          this.msg = 'Sistem ne mo??e da na??e ra??un po zadatoj vrednosti';
        else
          this.msg = '';
      },
      error => {
        console.log('error');
      })
  }

  findRacunByStatusFromRemote() {
    if (this.status == "") {
      this.racuni = this.racunService.getAllRacunFromRemote(this.login);
    } else {
      this.racuni = this.racunService.findRacunByStatusFromRemote(this.login, this.status);
      this.racuni.subscribe(
        data => {
          if (data.length == 0)
            this.msg = 'Sistem ne mo??e da na??e ra??un po zadatoj vrednosti';
          else
            this.msg = '';
        },
        error => {
          console.log('error');
        })
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
    this.racuni.subscribe(
      data => {
        if (data.length == 0)
          this.msg = 'Sistem ne mo??e da na??e ra??un po zadatoj vrednosti';
        else
          this.msg = '';
      },
      error => {
        console.log('error');
      })
  }

  racunDetails(id: number) {
    this.router.navigate(['moje-zgrade/detailsracun', id]);
  }
}
