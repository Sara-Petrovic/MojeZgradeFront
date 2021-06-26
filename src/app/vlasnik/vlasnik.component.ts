import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';
import { JedinicaMere } from '../model/jedinica-mere'
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';
import { StambenaZajednica } from '../model/stambena-zajednica';

@Component({
  selector: 'app-vlasnik',
  templateUrl: './vlasnik.component.html',
  styleUrls: ['./vlasnik.component.css']
})
export class VlasnikComponent implements OnInit {
  stambeneZajednice: StambenaZajednica[];
  selectedStambenaZajednica: StambenaZajednica;


  vlasnik = new VlasnikPosebnogDela();
  msg = '';

  jediniceMere: Array<string> = Object.keys(JedinicaMere).filter(key => isNaN(+key));
  selectedJedinicaMere: JedinicaMere;

  constructor(private _service: VlasnikPosebnogDelaService, private _serviceSZ: StambenaZajednicaService,
    private _router: Router) { }

  ngOnInit(): void {
    this.fillComboBoxMesta();
  }

  fillComboBoxMesta(): void {
    this._serviceSZ.getAllStambenaZajednicaFromRemote()
      .subscribe(stambeneZajednice => { this.stambeneZajednice = stambeneZajednice; console.log(stambeneZajednice) });
  }

  selected() {
    this.vlasnik.stambenaZajednica = this.selectedStambenaZajednica
    console.log(this.selectedStambenaZajednica.ulica)
    console.log(this.selectedStambenaZajednica.broj)
    console.log(this.selectedStambenaZajednica.mesto.naziv)
  }
  selectedMernaJedinica() {
    this.vlasnik.mernaJedinica = this.selectedJedinicaMere
    console.log(this.selectedJedinicaMere)
  }


  saveVlasnikPosebnogDela() {

    this._service.saveVlasnikPosebnogDelaFromRemote(this.vlasnik).subscribe(
      data => {
        console.log("saved vlasnik");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Vlasnik posebnog dela nije sacuvan.";
      }
    );
  }
}
