import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SednicaSkupstine } from '../model/sednica-skupstine';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { SednicaSkupstineService } from '../services/sednica-skupstine.service';
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-sednica-create',
  templateUrl: './sednica-create.component.html',
  styleUrls: ['./sednica-create.component.css']
})
export class SednicaCreateComponent implements OnInit {

  stambeneZajednice: StambenaZajednica[];
  selectedStambenaZajednica: StambenaZajednica;
  vlasnici: VlasnikPosebnogDela[];
  selectedVlasnici: VlasnikPosebnogDela[];


  sednica = new SednicaSkupstine();
  msg = '';


  constructor(private _serviceSS: SednicaSkupstineService, private _service: VlasnikPosebnogDelaService, private _serviceSZ: StambenaZajednicaService,
    private _router: Router) { }

  ngOnInit(): void {
    this.fillComboBoxStambenaZajednica();
    this.sednica.datumOdrzavanja= new Date();
   // this.vlasnici = new Array();
  }

  fillComboBoxStambenaZajednica(): void {
    this._serviceSZ.getAllStambenaZajednicaFromRemote()
      .subscribe(stambeneZajednice => { this.stambeneZajednice = stambeneZajednice; console.log(stambeneZajednice) });
  }

  fillComboBoxVlasnici(): void {
    this._service.getAllVlasniciByStambenaZajednicaFromRemote(this.selectedStambenaZajednica.stambenaZajednicaId)
      .subscribe(vlasnici => { this.vlasnici = vlasnici; console.log(vlasnici) });
  }

  selectedSZ() {
    this.sednica.stambenaZajednica = this.selectedStambenaZajednica
    console.log(this.selectedStambenaZajednica.ulica)
    console.log(this.selectedStambenaZajednica.broj)
    console.log(this.selectedStambenaZajednica.mesto.naziv)
    this.fillComboBoxVlasnici();
  }


  saveSednicaSkupstine() {

    this._serviceSS.saveSednicaSkupstineFromRemote(this.sednica).subscribe(
      data => {
        console.log("saved sednica");
        this._router.navigate(['/sednice'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Sednica skupstine nije sacuvana.";
      }
    );
  }
}
