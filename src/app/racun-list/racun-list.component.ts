import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-racun-list',
  templateUrl: './racun-list.component.html',
  styleUrls: ['./racun-list.component.css']
})
export class RacunListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  home(){
    this.router.navigate(['loginsuccess']);
  }
}
