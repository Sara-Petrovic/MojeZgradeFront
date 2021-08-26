import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racun } from 'src/app/model/racun';
import { RacunService } from 'src/app/services/racun.service';

@Component({
  selector: 'app-racun-send',
  templateUrl: './racun-send.component.html',
  styleUrls: ['./racun-send.component.css']
})
export class RacunSendComponent implements OnInit {

  @ViewChild('nalog_za_uplatu') nalogZaUplatu!: ElementRef;

  racun: Racun;
  mesec!: String;

  password = "";

  constructor(private route: ActivatedRoute,
    private racunService: RacunService,
    private router: Router) {

    this.racun = new Racun();
  }

  ngOnInit(): void {

    let racunId = this.route.snapshot.params['id'];

    this.racunService.getRacunByIdFromRemote(racunId)
      .subscribe(data => {
        this.racun = data;
      }, error => console.log(error));

    let mesec = {
      0: "januar", 1: "februar", 2: "mart", 3: "april", 4: "maj",
      5: "jun", 6: "jul", 7: "avgust", 8: "septembar", 9: "oktobar", 10: "novembar", 11: "decembar"
    }[this.racun.datumIzdavanja.getMonth()];
    if (mesec != undefined) {
      this.mesec = mesec;
    }
    this.mesec += " " + this.racun.datumIzdavanja.getUTCFullYear().toString();
  }

  sendRacun() {
    if (this.racun.status != 'KREIRAN') {
      alert("Ne mozete da posaljete ovaj racun.");
      return;
    }

    this.racunService.updateRacunSentFromRemote(this.racun.racunId, this.racun, this.password).subscribe(
      data => { console.log(data); this.racun.status = "POSLAT" }
    );


  }

}
