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
      .subscribe(mesto => { this.mesto = mesto; console.log(mesto) });
  }

  selected() {
    this.sZajednica.mesto = this.selectedMesto
  }

  saveStambenaZajednica() {
    console.log(this.login);
    this.sZajednica.upravnik = this.login.user;
    console.log(this.sZajednica);
    this._service.saveStambenaZajednicaFromRemote(this.sZajednica).subscribe(
      data => {
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log(error);
        this.msg = "Stambena zajednica nije sacuvana.";
      }
    );
    alert("Stambena zajednica je uspešno sačuvana.");
  }

  home() {
    this._router.navigate(['loginsuccess']);
  }
}