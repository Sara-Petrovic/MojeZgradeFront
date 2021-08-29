import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { Mesto } from 'src/app/model/mesto';
import { StambenaZajednica } from 'src/app/model/stambena-zajednica';
import { VlasnikPosebnogDela } from 'src/app/model/vlasnik-posebnog-dela';
import { MestoService } from 'src/app/services/mesto.service';
import { StambenaZajednicaService } from 'src/app/services/stambena-zajednica.service';
import { VlasnikPosebnogDelaService } from 'src/app/services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-stambenazajednica-details',
  templateUrl: './stambenazajednica-details.component.html',
  styleUrls: ['./stambenazajednica-details.component.css']
})
export class StambenazajednicaDetailsComponent implements OnInit {
  stambenaZajednicaId!: number;
  stambenaZajednica!: StambenaZajednica;

  vlasnici!: VlasnikPosebnogDela[];

  selectedMesto!: Mesto;

  mesto!: Mesto[];

  login: Login;

  constructor(private route: ActivatedRoute, private router: Router,
    private sZajednicaService: StambenaZajednicaService,
    private vlasnikService: VlasnikPosebnogDelaService,
    private _mestoService: MestoService) {
    let user = localStorage.getItem("loggedUser");
    if (user == null) {
      user = "";
      this.router.navigate(['']);
    }
    this.login = JSON.parse(user);
  }

  ngOnInit(): void {
    this.stambenaZajednica = new StambenaZajednica();
    this.stambenaZajednica.mesto = new Mesto(0, "", "");
    this.stambenaZajednicaId = this.route.snapshot.params['id'];

    this.sZajednicaService.getStambenaZajednicaByIdFromRemote(this.stambenaZajednicaId)
      .subscribe(
        data => {
          this.stambenaZajednica = data;
          this.vlasnikService.getAllVlasniciByStambenaZajednicaFromRemote(this.stambenaZajednica.stambenaZajednicaId, this.login).subscribe(data => {
            console.log(data)
            this.vlasnici = data;

          }, error => {
            console.log(error);

          });

        }, error => {
          console.log(error);
          alert('Sistem ne može da nađe stambenu zajednicu po zadatoj vrednosti');
          this.router.navigate(['moje-zgrade/home']);
        });
    this.fillComboBoxMesta();
    this.selectedMesto = this.stambenaZajednica.mesto;

  }

  fillComboBoxMesta(): void {
    this._mestoService.getMesta()
      .subscribe(mesto => { this.mesto = mesto; console.log(mesto) });
  }

  list() {
    this.router.navigate(['moje-zgrade/stambene-zajednice']);
  }

  home() {
    this.router.navigate(['moje-zgrade/home']);
  }

  selectMesto() {
    this.stambenaZajednica.mesto = this.selectedMesto;
  }

  updateStambenaZajednica() {
    this.sZajednicaService.updateStambenaZajednicaFromRemote(this.stambenaZajednicaId, this.stambenaZajednica)
      .subscribe(
        data => {
          alert("Stambena zajednica je izmenjena");
        },
        error => {
          console.log(error);
          alert('Sistem ne može da zapamti stambenu zajednicu');
        }
      );

  }

}
