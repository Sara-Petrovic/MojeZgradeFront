import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racun } from 'src/app/model/racun';
import { StavkaRacuna } from 'src/app/model/stavka-racuna';
import { Usluga } from 'src/app/model/usluga';
import { RacunService } from 'src/app/services/racun.service';
import { UslugaService } from 'src/app/services/usluga.service';

@Component({
  selector: 'app-racun-details',
  templateUrl: './racun-details.component.html',
  styleUrls: ['./racun-details.component.css']
})
export class RacunDetailsComponent implements OnInit {
  racunId!: number;
  racun!: Racun;

  sveUsluge!: Usluga[];
  selectedUsluga!: Usluga;

  kolicina: number;
  ukupnaVrednost: number;

  constructor(private route: ActivatedRoute,
    private racunService: RacunService,
    private uslugeService: UslugaService,
    private router: Router) {
      
    this.kolicina = 1;
    this.ukupnaVrednost = 0;

  }

  ngOnInit(): void {
    this.racun = new Racun();
    this.racunId = this.route.snapshot.params['id'];
    this.racunService.getRacunByIdFromRemote(this.racunId)
      .subscribe(data => {
        this.racun = data;
      }, error => {
        console.log(error);
        this.router.navigate(['moje-zgrade/racuni']); 
        alert('Sistem ne može da nađe račun po zadatoj vrednosti');    
      });
      this.fillComboBoxUsluge();
  }

  fillComboBoxUsluge(): void {
    this.uslugeService.getAllUslugeFromRemote()
      .subscribe(sveUsluge => { this.sveUsluge = sveUsluge; console.log(sveUsluge) });
  }

  list() {
    this.router.navigate(['moje-zgrade/racuni']);
  }

  updateRacun() {
    if (this.racun.status != 'KREIRAN') {
      alert("Ne mozete da promeniti racun koji ste vec poslalti vlasniku.");
      return;
    }
    console.log(this.racunService.updateRacunFromRemote(this.racunId, this.racun).subscribe(
      data => {
        alert('Račun je izmenjen');
        this.router.navigate(['moje-zgrade/racuni']);
      },
      error => {
        console.log(error);
        alert('Sistem ne može da zapamti račun');
      }
    ));
  }

  racunIsPaid() {
    if (this.racun.status == 'PLACEN') {
      alert("Ne mozete da promenite racun koji je vec placen.");
      return;
    }

    this.racunService.updateRacunPaidFromRemote(this.racun.racunId).subscribe(
      data => { console.log(data); this.racun.status = "PLACEN" }
    );

    alert("Status racuna je azuriran na placen.");
  }

  sendRacun(){
    this.router.navigate(['moje-zgrade/send-racun/' + this.racunId]);
  }

  addStavka() {
    if (!this.isNumber(this.kolicina) || this.kolicina <= 0) {
      alert("Kolicina mora da bude pozitivan broj.");
    }
    this.racun.stavke.push(new StavkaRacuna(this.racun.stavke.length, this.selectedUsluga.cena, this.kolicina, this.selectedUsluga, new Racun()));
    this.ukupnaVrednost += this.kolicina * this.selectedUsluga.cena;
  }

  isNumber(value: string | number): boolean {
    return ((value != null) &&
      (value !== '') &&
      !isNaN(Number(value.toString())));
  }

  deleteStavka(stavka:StavkaRacuna){
    let index = this.racun.stavke.indexOf(stavka);
    this.racun.stavke.splice(index, 1);
    console.log(this.racun.stavke);
  }

}
