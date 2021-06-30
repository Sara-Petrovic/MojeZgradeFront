import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SednicaSkupstine } from '../model/sednica-skupstine';
import { SednicaSkupstineService } from '../services/sednica-skupstine.service';


@Component({
  selector: 'app-sednica-list',
  templateUrl: './sednica-list.component.html',
  styleUrls: ['./sednica-list.component.css']
})
export class SednicaListComponent implements OnInit {

  sednice: Observable<SednicaSkupstine[]>;
  options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  constructor(private sednicaService: SednicaSkupstineService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.sednice = this.sednicaService.getAllSedniceSkupstine();
    
  }


  sednicaDetails(id: number) {
    this.router.navigate(['detailssednica', id]);
  }

}
