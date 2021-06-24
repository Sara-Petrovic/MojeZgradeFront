import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  openSaveStambenaZajednica(){
    this._router.navigate(['/stambenazajednica']);
  }

}
