import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesto } from '../model/mesto';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { MestoService } from '../services/mesto.service';
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';

@Component({
  selector: 'app-stambenazajednica-details',
  templateUrl: './stambenazajednica-details.component.html',
  styleUrls: ['./stambenazajednica-details.component.css']
})
export class StambenazajednicaDetailsComponent implements OnInit {
  stambenaZajednicaId!: number;
  stambenaZajednica!: StambenaZajednica;

  selectedMesto!:Mesto;

  mesto!: Mesto[];

  constructor(private route: ActivatedRoute, private router: Router,
    private sZajednicaService: StambenaZajednicaService,
    private _mestoService: MestoService) { }

  ngOnInit(): void {
    this.stambenaZajednica = new StambenaZajednica();
    this.stambenaZajednica.mesto = new Mesto(0, "", "");
    this.stambenaZajednicaId = this.route.snapshot.params['id'];

    this.sZajednicaService.getStambenaZajednicaByIdFromRemote(this.stambenaZajednicaId)
      .subscribe(data => {
        console.log(data)
        this.stambenaZajednica = data;

      }, error => console.log(error));
      this.fillComboBoxMesta();
      this.selectedMesto = this.stambenaZajednica.mesto;
  }

  fillComboBoxMesta(): void {
    this._mestoService.getMesta()
      .subscribe(mesto => {this.mesto = mesto; console.log(mesto)});
  }

  list() {
    this.router.navigate(['stambene-zajednice']);
  }

  home(){
    this.router.navigate(['loginsuccess']);
  }

  selectMesto(){
    this.stambenaZajednica.mesto = this.selectedMesto;
  }

  updateStambenaZajednica(){
    console.log(this.sZajednicaService.updateStambenaZajednicaFromRemote(this.stambenaZajednicaId, this.stambenaZajednica).subscribe(
      data => console.log(data)
    ));
    alert("Stambena zajednica je uspešno sačuvana.");
  }
  
}