import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../model/login';
import { Racun } from '../../model/racun';
import { StavkaRacuna } from '../../model/stavka-racuna';
import { Usluga } from '../../model/usluga';
import { VlasnikPosebnogDela } from '../../model/vlasnik-posebnog-dela';
import { RacunService } from '../../services/racun.service';
import { UslugaService } from '../../services/usluga.service';
import { VlasnikPosebnogDelaService } from '../../services/vlasnik-posebnog-dela.service';

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

  kolicina: number;
  ukupnaVrednost: number;

  login:Login;

  msg = '';

  constructor(private racunService: RacunService,
    private vlasnikService: VlasnikPosebnogDelaService,
    private uslugeService: UslugaService,
    private router: Router) {
    this.racun = new Racun();
    this.brojStavki = 0;
    this.ukupnaVrednost = 0;
    this.kolicina = 1;
    this.stavke = new Array<StavkaRacuna>();
    this.racun.datumIzdavanja.setDate(Date.now());
    let login = localStorage.getItem("loggedUser");
    if(login != null && login != ""){ 
      this.login = JSON.parse(login);
    } else {
      this.login = new Login();
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.fillComboBoxVlasnici();
    this.fillComboBoxUsluge();
  }

  fillComboBoxVlasnici(): void {
    this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote(this.login)
      .subscribe(vlasnici => { this.vlasnici = vlasnici; console.log(vlasnici) });
  }

  fillComboBoxUsluge(): void {
    this.uslugeService.getAllUslugeFromRemote()
      .subscribe(sveUsluge => { this.sveUsluge = sveUsluge; console.log(sveUsluge) });
  }

  selected() {
    this.racun.vlasnikPosebnogDela = this.selectedVlasnik;
  }

  addStavka() {
    if(!this.isNumber(this.kolicina) || this.kolicina <= 0){
      alert("Kolicina mora da bude pozitivan broj.");
    }
    this.brojStavki += 1;
    this.stavke.push(new StavkaRacuna(this.brojStavki, this.selectedUsluga.cena, this.kolicina, this.selectedUsluga, new Racun()));
    this.ukupnaVrednost += this.kolicina * this.selectedUsluga.cena;
  }

  saveRacun() {
    this.racun.stavke = this.stavke;
    this.racun.ukupnaVrednost = this.ukupnaVrednost;
    this.racun.status = "KREIRAN";
    this.racunService.saveRacunFromRemote(this.racun).subscribe(
      data => {
        alert("Račun je sačuvan");
        this.router.navigate(['moje-zgrade/home']);
      },
      error => {
        console.log(error);
        this.msg = "Sistem ne može da kreira račun";
      }
    );
    this.brojStavki = 0;
    this.ukupnaVrednost = 0;
  }

  isNumber(value: string | number): boolean {
    return ((value != null) &&
      (value !== '') &&
      !isNaN(Number(value.toString())));
  }

  home() {
    this.router.navigate(['moje-zgrade/home']);
  }

}
