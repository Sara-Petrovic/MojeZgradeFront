import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JedinicaMere } from 'src/app/model/jedinica-mere';
import { Usluga } from 'src/app/model/usluga';
import { UslugaService } from 'src/app/services/usluga.service';

@Component({
  selector: 'app-usluga',
  templateUrl: './usluga.component.html',
  styleUrls: ['./usluga.component.css']
})
export class UslugaComponent implements OnInit {

  usluga!: Usluga;

  jediniceMere: Array<string> = Object.keys(JedinicaMere).filter(key => isNaN(+key));
  selectedJedinicaMere!: JedinicaMere;

  msg = '';

  constructor(private router:Router,
    private uslugaService: UslugaService) {
    this.usluga = new Usluga(0, "", 0, "KOMAD");
  }

  ngOnInit(): void {
  }

  saveUsluga() {
    this.uslugaService.saveUslugaFromRemote(this.usluga).subscribe(
      data => {console.log(data);
       }
    );
    alert("Usluga je sacuvana!");
    this.router.navigate(['moje-zgrade/home']);
  }

  selectedMernaJedinica() {
    this.usluga.jedinicaMere = this.selectedJedinicaMere.toString();
    console.log(this.selectedJedinicaMere)
  }

}
