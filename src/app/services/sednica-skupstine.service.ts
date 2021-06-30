import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SednicaSkupstineService {

  constructor(private _http: HttpClient) { }

  getAllSedniceSkupstine(){
    return this._http.get<any>("http://localhost:8090/sednicaskupstine");
  }
  getSednicaSkupstineFromRemote(sednicaId:number){
    return this._http.get<any>("http://localhost:8090/sednicaskupstine/"+ sednicaId);
  }
  getSednicaSkupstineByUlicaFromRemote(ulica:string){
    return this._http.get<any>("http://localhost:8090/findsednicabyulica/"+ ulica);
  }
}
