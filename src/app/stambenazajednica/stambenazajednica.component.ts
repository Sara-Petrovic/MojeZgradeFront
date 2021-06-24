import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesto } from '../model/mesto';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { User } from '../model/user';
import { MestoService } from '../services/mesto.service';
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';

@Component({
  selector: 'app-stambenazajednica',
  templateUrl: './stambenazajednica.component.html',
  styleUrls: ['./stambenazajednica.component.css']
})
export class StambenazajednicaComponent implements OnInit {

  mesto: Mesto[];
  selectedMesto: Mesto;

  sZajednica = new StambenaZajednica();
  msg = '';

  user = new User();

  constructor(private _service: StambenaZajednicaService, private _router: Router,
    private _mestoService: MestoService) { }

  ngOnInit(): void {
    this.fillComboBoxMesta();

  }

  fillComboBoxMesta(): void {
    this._mestoService.getMesta()
      .subscribe(mesto => {this.mesto = mesto; console.log(mesto)});
  }

  selected(){
    this.sZajednica.mesto = this.selectedMesto
    console.log(this.selectedMesto.mestoId)
    console.log(this.selectedMesto.naziv)
    console.log(this.selectedMesto.ptt)
  }

  saveStambenaZajednica() {
    this.user.userId = 0;
    let userJson:any = '';
    if(localStorage.getItem("loggedUser")){
      userJson = localStorage.getItem("loggedUser");
      this.sZajednica.upravnik = JSON.parse(userJson);
    } else {
      this.sZajednica.upravnik = this.user;
    }
    this._service.saveStambenaZajednicaFromRemote(this.sZajednica).subscribe(
      data => {
        console.log("saved");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Stambena zajednica nije sacuvana.";
      }
    );
  }

}