import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StambenaZajednica } from 'src/app/model/stambena-zajednica';
import { VlasnikPosebnogDela } from 'src/app/model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from 'src/app/services/vlasnik-posebnog-dela.service';
import { JedinicaMere } from 'src/app/model/jedinica-mere'
import { StambenaZajednicaService } from 'src/app/services/stambena-zajednica.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-vlasnik',
  templateUrl: './vlasnik.component.html',
  styleUrls: ['./vlasnik.component.css']
})
export class VlasnikComponent implements OnInit {
  stambeneZajednice!: StambenaZajednica[];
  selectedStambenaZajednica!: StambenaZajednica;

  vlasnik = new VlasnikPosebnogDela();
  
  msg = '';

  login:Login;

  jediniceMere: Array<string> = Object.keys(JedinicaMere).filter(key => isNaN(+key));
  selectedJedinicaMere!: JedinicaMere;

  constructor(private _service: VlasnikPosebnogDelaService, private _serviceSZ: StambenaZajednicaService,
    private _router: Router) { 
      this.vlasnik.velicinaPosebnogDela=0;
      this.vlasnik.kontaktVlasnika="";
      this.vlasnik.brojPosebnogDela="1";
      this.vlasnik.ime="";
      this.vlasnik.prezime="";
      let user = localStorage.getItem("loggedUser"); 
      if (user == null || user == "") {
        user = "";
        this._router.navigate(['']);
      }
      this.login = JSON.parse(user);
     
    }

  ngOnInit(): void {
    this.fillComboBoxStambenaZajednica();
    console.log(this.stambeneZajednice)
  }

  fillComboBoxStambenaZajednica(): void {
    this._serviceSZ.getAllStambenaZajednicaFromRemoteForUser(this.login)
      .subscribe(stambeneZajednice => { this.stambeneZajednice = stambeneZajednice; 
        this.selectedStambenaZajednica = this.stambeneZajednice[0];
        this.vlasnik.stambenaZajednica = this.selectedStambenaZajednica;
        console.log(stambeneZajednice) });

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
        this._router.navigate(['/vlasnici'])
      },
      error => {
        console.log("exception occured");
        console.log(error)
        this.msg = "Vlasnik posebnog dela nije sacuvan. " +  error.error.message;
      }
    );
    alert("Vlasnik je uspešno sačuvan");
  }
}
