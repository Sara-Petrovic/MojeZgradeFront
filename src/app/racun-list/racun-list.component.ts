import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Racun } from '../model/racun';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { RacunService } from '../services/racun.service';

@Component({
  selector: 'app-racun-list',
  templateUrl: './racun-list.component.html',
  styleUrls: ['./racun-list.component.css']
})
export class RacunListComponent implements OnInit {

  racuni!:Observable<Racun[]>;
  searchCriteria!: string;
  show: Array<boolean>;
  datumOd!:Date;
  datumDo!:Date;
  status!:string;
  vlasnik!:VlasnikPosebnogDela;

  constructor(private racunService:RacunService, private router:Router) { 
    this.show = new Array<boolean>(3);
    this.show[0] = true;
    this.show[1] = false;
    this.show[2] = false;
  }

  ngOnInit(): void {
    this.reloadData();
    this.datumOd = new Date;
    this.datumDo = new Date;
    this.vlasnik = new VlasnikPosebnogDela;
    this.status = "";
    this.selectSearchCriteria();
  }

  deleteStambenaZajednica(id: number) {
    this.racunService.deleteRacunFromRemote(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  home(){
    this.router.navigate(['loginsuccess']);
  }

  reloadData() {
    this.racuni = this.racunService.getAllRacunFromRemote();
  }

  selectSearchCriteria() {
    if (this.searchCriteria == "vlasnik") {
      this.show[0] = false;
      this.show[1] = true;
      this.show[2] = false;
    } else if (this.searchCriteria == "datum") {
      this.show[0] = false;
      this.show[1] = false;
      this.show[2] = true;
    } else {
      this.status = "";
      this.show[0] = true;
      this.show[1] = false;
      this.show[2] = false;
    }
  }

  /*
    ngOnInit() {
   
    
  }

  stambenaZajednicaDetails(id: number) {
    this.router.navigate(['detailsstambenazajednica', id]);
  }
  stambenaZajednicaUpdate(id: number) {
    this.router.navigate(['detailsstambenazajednica', id]);
  }

  findStambenaZajednicaByPibFromRemote() {
    if (this.pib == "") {
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemote();
    } else if (this.pib.length != 9) {
      alert("PIB mora da ima tačno 9 cifara.");
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemote();
    } else {
      this.zajednice = this.szService.findStambenaZajednicaByPibFromRemote(this.pib);
    }
  }

  findStambenaZajednicaByMaticniBrojFromRemote() {
    if (this.maticniBroj == "") {
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemote();
    } else if (this.maticniBroj.length != 8) {
      alert("Maticni broj mora da ima tačno 8 cifara.");
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemote();
    } else {
      this.zajednice = this.szService.findStambenaZajednicaByMaticniBrojFromRemote(this.maticniBroj);
    }
  }

  findStambenaZajednicaByUlicaIBrojFromRemote() {
    if (this.ulica == "") {
      this.zajednice = this.szService.getAllStambenaZajednicaFromRemote();
    } else {
      this.zajednice = this.szService.findStambenaZajednicaByUlicaIBrojFromRemote(this.ulica, this.broj);
    }
  } 
  */
}
