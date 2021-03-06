import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SednicaSkupstine } from '../../model/sednica-skupstine';
import { StambenaZajednica } from '../../model/stambena-zajednica';
import { VlasnikPosebnogDela } from '../../model/vlasnik-posebnog-dela';
import { SednicaSkupstineService } from '../../services/sednica-skupstine.service';
import { StambenaZajednicaService } from '../../services/stambena-zajednica.service';
import { VlasnikPosebnogDelaService } from '../../services/vlasnik-posebnog-dela.service';
import { DatePipe } from '@angular/common';
import { Login } from '../../model/login';


@Component({
  selector: 'app-sednica-create',
  templateUrl: './sednica-create.component.html',
  styleUrls: ['./sednica-create.component.css']
})
export class SednicaCreateComponent implements OnInit {

  stambeneZajednice!: StambenaZajednica[];
  selectedStambenaZajednica!: StambenaZajednica;
  vlasnici!: VlasnikPosebnogDela[];
  selectedVlasnici!: VlasnikPosebnogDela[];

  login:Login;

  sednica = new SednicaSkupstine();
  msg = '';

  constructor(private _serviceSS: SednicaSkupstineService, private _service: VlasnikPosebnogDelaService, private _serviceSZ: StambenaZajednicaService,
    private _router: Router, private _datePipe: DatePipe) { 
      let user = localStorage.getItem("loggedUser"); 
      if (user == null) {
        user = "";
        this._router.navigate(['']);
      }
      this.login = JSON.parse(user);
    }

  ngOnInit(): void {
    this.fillComboBoxStambenaZajednica();
    this.sednica.datumOdrzavanja = <any>this._datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.sednica.datumOdrzavanja)

    this.selectedVlasnici = new Array();
    this.vlasnici = new Array();
    this.sednica.vlasnici = new Array();
    this.sednica.stambenaZajednica = new StambenaZajednica();
    this.sednica.brojPrisutnih=0;
  }

  fillComboBoxStambenaZajednica(): void {
    this._serviceSZ.getAllStambenaZajednicaFromRemoteForUser(this.login)
      .subscribe(stambeneZajednice => {
        this.stambeneZajednice = stambeneZajednice;
        this.selectedStambenaZajednica = this.stambeneZajednice[0];
        this.sednica.stambenaZajednica = this.selectedStambenaZajednica;
        console.log(stambeneZajednice);

        this.fillComboBoxVlasnici();
      });
  }

  fillComboBoxVlasnici(): void {
    this._service.getAllVlasniciByStambenaZajednicaFromRemote(this.selectedStambenaZajednica.stambenaZajednicaId, this.login)
      .subscribe(vlasnici => { this.vlasnici = vlasnici; console.log(vlasnici) });
  }

  selectedSZ() {
    this.sednica.stambenaZajednica = this.selectedStambenaZajednica
    console.log(this.selectedStambenaZajednica.ulica)
    console.log(this.selectedStambenaZajednica.broj)
    console.log(this.selectedStambenaZajednica.mesto.naziv)
    this.fillComboBoxVlasnici();
  }
  onCheck(vlasnikId: any) {
    if (!this.selectedVlasnici.includes(vlasnikId)) {
      this.selectedVlasnici.push(vlasnikId);
    } else {
      var index = this.selectedVlasnici.indexOf(vlasnikId);
      if (index > -1) {
        this.selectedVlasnici.splice(index, 1);
      }
    }
    console.log(this.selectedVlasnici);
    this.sednica.vlasnici = this.selectedVlasnici;
    this.sednica.brojPrisutnih = this.selectedVlasnici.length;
  }


  saveSednicaSkupstine() {
    this._serviceSS.saveSednicaSkupstineFromRemote(this.sednica).subscribe(
      data => {
        console.log("saved sednica");
        this._router.navigate(['moje-zgrade/sednice'])
      },
      error => {
        console.log("exception occured");
        console.log(this.sednica);
        this.msg = "Sednica skupstine nije sacuvana.";
      }
    );
    alert("Sednica skup??tine je uspe??no sa??uvan");
  }
}
