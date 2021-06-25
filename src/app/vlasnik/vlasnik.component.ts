import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';
import {JedinicaMere} from '../model/jedinica-mere'

@Component({
  selector: 'app-vlasnik',
  templateUrl: './vlasnik.component.html',
  styleUrls: ['./vlasnik.component.css']
})
export class VlasnikComponent implements OnInit {

  vlasnik = new VlasnikPosebnogDela();
  msg = '';

   propertyType: Array<string> = Object.keys(JedinicaMere).filter(key => isNaN(+key));

  constructor(private _service: VlasnikPosebnogDelaService, private _router: Router) { }

  ngOnInit(): void {
  }


  saveVlasnikPosebnogDela() {
  
    this._service.saveVlasnikPosebnogDelaFromRemote(this.vlasnik).subscribe(
      data => {
        console.log("saved vlasnik");
        this._router.navigate(['/vlasnikposebnogdela'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Vlasnik posebnog dela nije sacuvan.";
      }
    );
  }
}
