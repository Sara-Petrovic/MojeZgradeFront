import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racun } from 'src/app/model/racun';
import { RacunService } from 'src/app/services/racun.service';

@Component({
  selector: 'app-racun-details',
  templateUrl: './racun-details.component.html',
  styleUrls: ['./racun-details.component.css']
})
export class RacunDetailsComponent implements OnInit {
  racunId!: number;
  racun!: Racun;

  constructor(private route: ActivatedRoute,
    private racunService: RacunService,
    private router: Router) { }

  ngOnInit(): void {
    this.racun = new Racun();
    this.racunId = this.route.snapshot.params['id'];
    this.racunService.getRacunByIdFromRemote(this.racunId)
      .subscribe(data => {
        this.racun = data;
      }, error => console.log(error));
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
      data => console.log(data)
      //ovde postavi racun na azurirane podatke
    ));
    alert("Racun je uspešno sačuvan.");
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
    // this.router.navigate(['moje-zgrade/racuni']);
  }

  racunIsSent(){
    if (this.racun.status != 'KREIRAN') {
      alert("Ne mozete da posaljete ovaj racun.");
      return;
    }

    this.racunService.updateRacunSentFromRemote(this.racun.racunId).subscribe(
      data => { console.log(data); this.racun.status = "POSLAT" }
    );
  }
}
