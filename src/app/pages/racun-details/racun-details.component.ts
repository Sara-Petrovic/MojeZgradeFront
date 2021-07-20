import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racun } from 'src/app/model/racun';
import { RacunService } from 'src/app/services/racun.service';

@Component({
  selector: 'app-racun-details',
  templateUrl: './racun-details.component.html',
  styleUrls: ['./racun-details.component.css']
})
export class RacunDetailsComponent implements OnInit {
  racunId!: number;
  racun!:Racun;

  constructor(private route: ActivatedRoute,
    private racunService: RacunService,
    private router: Router) { }

  ngOnInit(): void {
    this.racun = new Racun();
    this.racunId = this.route.snapshot.params['id'];
    this.racunService.getRacunByIdFromRemote(this.racunId)
      .subscribe(data => {
        console.log(data)
        this.racun = data;

      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['moje-zgrade/racuni']);
  }

  home() {
    this.router.navigate(['moje-zgrade/home']);
  }

  updateRacun(){
    this.racun.status = 'PLACEN';
    console.log(this.racunService.updateRacunFromRemote(this.racunId, this.racun).subscribe(
      data => console.log(data)
    ));
    alert("Racun je uspešno sačuvan.");
  }
}
