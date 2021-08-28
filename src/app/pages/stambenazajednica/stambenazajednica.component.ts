import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../model/login';
import { Mesto } from '../../model/mesto';
import { StambenaZajednica } from '../../model/stambena-zajednica';
import { MestoService } from '../../services/mesto.service';
import { StambenaZajednicaService } from '../../services/stambena-zajednica.service';

@Component({
  selector: 'app-stambenazajednica',
  templateUrl: './stambenazajednica.component.html',
  styleUrls: ['./stambenazajednica.component.css']
})
export class StambenazajednicaComponent implements OnInit {

  mesto!: Mesto[];
  selectedMesto!: Mesto;

  sZajednica = new StambenaZajednica();
  msg = '';

  login:Login;

  constructor(private _service: StambenaZajednicaService, 
    private _router: Router,
    private _mestoService: MestoService) {
    let userJson: any = '';
    userJson = localStorage.getItem("loggedUser");
    if(userJson == ""){
      this._router.navigate(['']);
    }
    this.login = JSON.parse(userJson);
  }

  ngOnInit(): void {
    this.fillComboBoxMesta();
  }

  fillComboBoxMesta(): void {
    this._mestoService.getMesta()
      .subscribe(mesto => { this.mesto = mesto; });
  }

  selected() {
    this.sZajednica.mesto = this.selectedMesto
  }

  saveStambenaZajednica() {
    this.sZajednica.upravnik = this.login.user;
    console.log(this.sZajednica);
    this._service.saveStambenaZajednicaFromRemote(this.sZajednica)
    .subscribe(
      data => {
        alert("Stambena zajednica je sačuvana");
        this._router.navigate(['moje-zgrade/home'])
      },
      error => {
        console.log(error);
        this.msg = "Sistem ne može da kreira stambenu zajednicu";
      }
    );
  }

  home() {
    this._router.navigate(['moje-zgrade/home']);
  }
}