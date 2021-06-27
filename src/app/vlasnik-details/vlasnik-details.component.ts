import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from '../services/vlasnik-posebnog-dela.service';

@Component({
  selector: 'app-vlasnik-details',
  templateUrl: './vlasnik-details.component.html',
  styleUrls: ['./vlasnik-details.component.css']
})
export class VlasnikDetailsComponent implements OnInit {

  vlasnikId: number;
  vlasnik: VlasnikPosebnogDela;

  constructor(private route: ActivatedRoute, private router: Router,
    private vlasnikService: VlasnikPosebnogDelaService) { }

  ngOnInit() {
    this.vlasnik = new VlasnikPosebnogDela();

    this.vlasnikId = this.route.snapshot.params['id'];

    this.vlasnikService.getVlasnikPosebnogDelaFromRemote(this.vlasnikId)
      .subscribe(data => {
        console.log(data)
        this.vlasnik = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['vlasnici']);
  }

}
