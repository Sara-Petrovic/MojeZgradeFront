import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-vlasnik-list',
  templateUrl: './vlasnik-list.component.html',
  styleUrls: ['./vlasnik-list.component.css']
})
export class VlasnikListComponent implements OnInit {

  vlasnici: Observable<VlasnikPosebnogDela[]>;
  prezime: string;
  user: User;

  constructor(private vlasnikService: VlasnikPosebnogDelaService,
    private router: Router) {
      let user = localStorage.getItem("loggedUser"); 
      if (user == null) {
        user = "";
      }
      this.user = JSON.parse(user);
    }

  ngOnInit() {
    this.reloadData();
    this.prezime = "";
  }

  reloadData() {
    this.vlasnici = this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote(this.user);
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

  vlasnikDetails(id: number) {
    this.router.navigate(['detailsvlasnik', id]);
  }
  vlasnikUpdate(id: number) {
    this.router.navigate(['updatevlasnik', id]);
  }
  findVlasnikByPrezime() {
    if (this.prezime == "") {
      this.vlasnici = this.vlasnikService.getAllVlasnikPosebnogDelaFromRemote(this.user);
    } else {
      this.vlasnici = this.vlasnikService.getVlasnikByPrezimeFromRemote(this.prezime,this.user);
    }
  }

}
