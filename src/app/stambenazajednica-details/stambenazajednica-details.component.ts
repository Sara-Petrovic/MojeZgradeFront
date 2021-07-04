import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesto } from '../model/mesto';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { StambenaZajednicaService } from '../services/stambena-zajednica.service';

@Component({
  selector: 'app-stambenazajednica-details',
  templateUrl: './stambenazajednica-details.component.html',
  styleUrls: ['./stambenazajednica-details.component.css']
})
export class StambenazajednicaDetailsComponent implements OnInit {
  stambenaZajednicaId!: number;
  stambenaZajednica!: StambenaZajednica;

  constructor(private route: ActivatedRoute, private router: Router,
    private sZajednicaService: StambenaZajednicaService) { }

  ngOnInit(): void {
    this.stambenaZajednica = new StambenaZajednica();
    this.stambenaZajednica.mesto = new Mesto(0, "", "");
    this.stambenaZajednicaId = this.route.snapshot.params['id'];

    this.sZajednicaService.getStambenaZajednicaByIdFromRemote(this.stambenaZajednicaId)
      .subscribe(data => {
        console.log(data)
        this.stambenaZajednica = data;

      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['stambene-zajednice']);
  }

  home(){
    this.router.navigate(['loginsuccess']);
  }
  
}
