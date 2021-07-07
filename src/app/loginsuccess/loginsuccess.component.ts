import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavFooterComponent } from '../components/footer/nav-footer.component';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  openSaveVlasnikPosebnogDela(){
    this._router.navigate(['/vlasnikposebnogdela']);
  }

}
