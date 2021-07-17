import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JedinicaMere } from 'src/app/model/jedinica-mere';
import { Login } from 'src/app/model/login';
import { Mesto } from 'src/app/model/mesto';
import { StambenaZajednica } from 'src/app/model/stambena-zajednica';
import { VlasnikPosebnogDela } from 'src/app/model/vlasnik-posebnog-dela';
import { StambenaZajednicaService } from 'src/app/services/stambena-zajednica.service';
import { VlasnikPosebnogDelaService } from 'src/app/services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-vlasnik-update',
  templateUrl: './vlasnik-update.component.html',
  styleUrls: ['./vlasnik-update.component.css']
})
export class VlasnikUpdateComponent implements OnInit {

  stambeneZajednice!: StambenaZajednica[];
  selectedStambenaZajednica!: StambenaZajednica;

  vlasnikId!: number;
  vlasnik!: VlasnikPosebnogDela;

  msg = '';

  jediniceMere: Array<string> = Object.keys(JedinicaMere).filter(key => isNaN(+key));
  selectedJedinicaMere!: JedinicaMere;

  login:Login;

  constructor(private route: ActivatedRoute, private router: Router,
    private vlasnikService: VlasnikPosebnogDelaService, private szService: StambenaZajednicaService) { 

      let user = localStorage.getItem("loggedUser"); 
      if (user == null) {
        user = "";
      }
      this.login = JSON.parse(user);
     
    }

  ngOnInit() {
    this.fillComboBoxStambenaZajednica();

    this.vlasnik = new VlasnikPosebnogDela();
    this.vlasnik.stambenaZajednica = new StambenaZajednica();
    this.vlasnik.stambenaZajednica.mesto = new Mesto(0, "", "");
    this.selectedStambenaZajednica = new StambenaZajednica();
    this.selectedStambenaZajednica.mesto = new Mesto(0, "", "");
    this.vlasnikId = this.route.snapshot.params['id'];

    this.vlasnikService.getVlasnikPosebnogDelaFromRemote(this.vlasnikId)
      .subscribe(data => {
        console.log(data)
        this.vlasnik = data;
        this.stambeneZajednice.forEach(element => {
          if (element.stambenaZajednicaId == data.stambenaZajednica.stambenaZajednicaId) {
            this.selectedStambenaZajednica = element
          }
        });
        console.log(data.stambenaZajednica)
        this.selectedJedinicaMere = data.mernaJedinica;
      }, error => console.log(error));
  }

  fillComboBoxStambenaZajednica(): void {
    this.szService.getAllStambenaZajednicaFromRemoteForUser(this.login)
      .subscribe(stambeneZajednice => { this.stambeneZajednice = stambeneZajednice; console.log(stambeneZajednice) });
  }

  updateVlasnikPosebnogDela() {
    this.vlasnikService.updateVlasnikPosebnogDelaFromRemote(this.vlasnikId, this.vlasnik)
      .subscribe(data => {
        console.log(data);
        this.vlasnik = new VlasnikPosebnogDela();
        this.gotoList();
      }, error => console.log(error));
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

  gotoList() {
    this.router.navigate(['/vlasnici']);
  }
}
