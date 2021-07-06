import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Racun } from '../model/racun';
import { StavkaRacuna } from '../model/stavka-racuna';
import { Usluga } from '../model/usluga';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { RacunService } from '../services/racun.service';
import { UslugaService } from '../services/usluga.service';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  brojStavki: number;
  racun!: Racun;

  stavke: StavkaRacuna[];

  vlasnici!: VlasnikPosebnogDela[];
  selectedVlasnik!: VlasnikPosebnogDela;

  sveUsluge!: Usluga[];
  selectedUsluga!: Usluga;

  ukupnaVrednost:number;

  day: number;
  month: number;
  year: number;

  msg = '';

  constructor(private racunService: RacunService,
    private vlasnikService: VlasnikPosebnogDelaService,
    private uslugeService: UslugaService,
    private router: Router) {
    this.racun = new Racun();
    this.brojStavki = 0;
    this.ukupnaVrednost = 0;
    this.stavke = new Array<StavkaRacuna>();
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.racun.datumIzdavanja.setFullYear(this.year, this.month, this.day);
  }

  ngOnInit(): void {
    this.fillComboBoxVlasnici();
    this.fillComboBoxUsluge();
  }

  fillComboBoxVlasnici(): void {
    this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote()
      .subscribe(vlasnici => { this.vlasnici = vlasnici; console.log(vlasnici) });
  }

  fillComboBoxUsluge(): void {
    this.uslugeService.getAllUslugeFromRemote()
      .subscribe(sveUsluge => { this.sveUsluge = sveUsluge; console.log(sveUsluge) });
  }

  selected() {
    this.racun.vlasnikPosebnogDela = this.selectedVlasnik;
  }

  addStavka(){
    this.brojStavki +=1;
    this.stavke.push(new StavkaRacuna(this.brojStavki, this.selectedUsluga.cena, this.selectedUsluga, new Racun()));
    this.ukupnaVrednost +=  this.selectedUsluga.cena;
  }

  saveRacun() {
    this.racun.racunId = 1;
    this.racun.datumIzdavanja.setFullYear(this.year, this.month - 1, this.day);
    this.racun.stavke = this.stavke;
    this.racun.ukupnaVrednost = this.ukupnaVrednost;
    console.log(this.racun);
    this.racunService.saveRacunFromRemote(this.racun).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Racun nije sacuvan.";
      }
    );
    this.brojStavki = 0;
    this.ukupnaVrednost = 0;
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
  }

  home() {
    this.router.navigate(['loginsuccess']);
  }

}
