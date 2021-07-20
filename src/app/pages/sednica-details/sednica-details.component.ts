import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesto } from 'src/app/model/mesto';
import { SednicaSkupstine } from 'src/app/model/sednica-skupstine';
import { StambenaZajednica } from 'src/app/model/stambena-zajednica';
import { SednicaSkupstineService } from 'src/app/services/sednica-skupstine.service';

@Component({
  selector: 'app-sednica-details',
  templateUrl: './sednica-details.component.html',
  styleUrls: ['./sednica-details.component.css']
})
export class SednicaDetailsComponent implements OnInit {

  sednicaId!: number;
  sednica!: SednicaSkupstine;

  constructor(private route: ActivatedRoute, private router: Router,
    private sednicaService: SednicaSkupstineService) { }

  ngOnInit() {
    this.sednica = new SednicaSkupstine();
    this.sednica.stambenaZajednica = new StambenaZajednica();
    this.sednica.stambenaZajednica.mesto = new Mesto(0,"","");
    this.sednicaId = this.route.snapshot.params['id'];
    this.sednica.vlasnici = new Array();

    this.sednicaService.getSednicaSkupstineFromRemote(this.sednicaId)
      .subscribe(data => {
        console.log(data)
        this.sednica = data;

      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['moje-zgrade/sednice']);
  }

}
