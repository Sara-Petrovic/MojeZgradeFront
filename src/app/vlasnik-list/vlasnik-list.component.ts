import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-vlasnik-list',
  templateUrl: './vlasnik-list.component.html',
  styleUrls: ['./vlasnik-list.component.css']
})
export class VlasnikListComponent implements OnInit {

  vlasnici: Observable<VlasnikPosebnogDela[]>;

  constructor(private vlasnikService: VlasnikPosebnogDelaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.vlasnici = this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote();
  }

  deleteVlasnik(id: number) {
    this.vlasnikService.deleteVlasnikPosebnogDelaFromRemote(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  vlasnikDetails(id: number){
    this.router.navigate(['detailsvlasnik', id]);
  }
  vlasnikUpdate(id: number){
    this.router.navigate(['updatevlasnik', id]);
  }

}
