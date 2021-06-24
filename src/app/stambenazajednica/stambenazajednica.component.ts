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

  sZajednica = new StambenaZajednica();
  msg = '';
  selectMesto = Mesto;

  user = new User();
  mesto = new Mesto();

  constructor(private _service:StambenaZajednicaService, private _router:Router,
    private _mestoService:MestoService) { }

  ngOnInit(): void {

  }

  saveStambenaZajednica(){
    this.user.userId = 0;
    this.mesto.mestoId = 1;
    this.sZajednica.mesto = this.mesto;
        this.sZajednica.upravnik = this.user;
    this._service.saveStambenaZajednicaFromRemote(this.sZajednica).subscribe(
      data => {
        console.log("saved");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg="Stambena zajednica nije sacuvana.";
      }
    );
  }

}
