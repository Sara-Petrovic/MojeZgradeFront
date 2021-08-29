import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { Mesto } from 'src/app/model/mesto';
import { SednicaSkupstine } from 'src/app/model/sednica-skupstine';
import { StambenaZajednica } from 'src/app/model/stambena-zajednica';
import { VlasnikPosebnogDela } from 'src/app/model/vlasnik-posebnog-dela';
import { SednicaSkupstineService } from 'src/app/services/sednica-skupstine.service';
import { StambenaZajednicaService } from 'src/app/services/stambena-zajednica.service';
import { VlasnikPosebnogDelaService } from 'src/app/services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-sednica-update',
  templateUrl: './sednica-update.component.html',
  styleUrls: ['./sednica-update.component.css']
})
export class SednicaUpdateComponent implements OnInit {
  stambeneZajednice!: StambenaZajednica[];
  selectedStambenaZajednica!: StambenaZajednica;
  vlasnici!: VlasnikPosebnogDela[];
  selectedVlasnici!: VlasnikPosebnogDela[];

  sednicaId!: number;
  sednica!: SednicaSkupstine;

  msg = '';

  login: Login;

  constructor(private route: ActivatedRoute, private router: Router,
    private vlasnikService: VlasnikPosebnogDelaService, private szService: StambenaZajednicaService,
    private sednicaService: SednicaSkupstineService, private _datePipe: DatePipe) {

    let user = localStorage.getItem("loggedUser");
    if (user == null) {
      user = "";
    }
    this.login = JSON.parse(user);

  }

  ngOnInit() {
    this.fillComboBoxStambenaZajednica();

    this.selectedVlasnici = new Array();
    this.vlasnici = new Array();
    this.sednica = new SednicaSkupstine();
    this.sednica.vlasnici = new Array();
    this.sednica.stambenaZajednica = new StambenaZajednica();
    this.sednica.stambenaZajednica.mesto = new Mesto(0, "", "");
    this.selectedStambenaZajednica = new StambenaZajednica();
    this.selectedStambenaZajednica.mesto = new Mesto(0, "", "");
    this.sednicaId = this.route.snapshot.params['id'];
    this.sednica.datumOdrzavanja = <any>this._datePipe.transform(new Date(), 'yyyy-MM-dd');


    this.sednicaService.getSednicaSkupstineFromRemote(this.sednicaId)
      .subscribe(data => {
        console.log(data)
        this.sednica = data;
        this.stambeneZajednice.forEach(element => {
          if (element.stambenaZajednicaId == data.stambenaZajednica.stambenaZajednicaId) {
            this.selectedStambenaZajednica = element

          }
        });

        this.sednica.datumOdrzavanja = <any>this._datePipe.transform(data.datumOdrzavanja, 'yyyy-MM-dd');
        console.log(data.stambenaZajednica)
      }, error => console.log(error));
  }

  fillComboBoxStambenaZajednica(): void {
    this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login)
      .subscribe(stambeneZajednice => {
        this.stambeneZajednice = stambeneZajednice;
        this.selectedStambenaZajednica = this.stambeneZajednice[0];
        this.sednica.stambenaZajednica = this.selectedStambenaZajednica;
        console.log(stambeneZajednice);

        this.fillComboBoxVlasnici();
      });
  }

  isChecked(id:any) {
    //ovo se izvrsava samo jednom kad se ucita stranica prvi put:

    return this.sednica.vlasnici.some(item => item.vlasnikId === id)

    // this.sednica.vlasnici.forEach(element => {
      
    //   // this.vlasnici.forEach(element1 => {
    //     if (element.vlasnikId == id.vlasnikId) {
    //       return true;
    //     }
    //     else{
    //       return false;
    //     }
    //   // });

    // });
    // return this.vlasnici.some(item => item.vlasnikId === id);
  }

  fillComboBoxVlasnici(): void {
    this.vlasnikService.getAllVlasniciByStambenaZajednicaFromRemote(this.selectedStambenaZajednica.stambenaZajednicaId, this.login)
      .subscribe(vlasnici => {
        this.vlasnici = vlasnici;
        console.log(vlasnici)

        
      });
  }

  updateSednicaSkupstine() {
    this.sednicaService.updateSednicaSkupstineFromRemote(this.sednicaId, this.sednica)
      .subscribe(data => {
        console.log(data);
        this.sednica = new SednicaSkupstine();
        this.gotoList();
      }, error => console.log(error));
  }

  selected() {
    this.sednica.stambenaZajednica = this.selectedStambenaZajednica
    this.sednica.vlasnici = new Array();
    this.selectedVlasnici = new Array();
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

  gotoList() {
    this.router.navigate(['moje-zgrade/sednice']);
  }
}
