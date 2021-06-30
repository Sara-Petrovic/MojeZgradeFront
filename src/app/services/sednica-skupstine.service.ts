import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SednicaSkupstine } from '../model/sednica-skupstine';

@Injectable({
  providedIn: 'root'
})
export class SednicaSkupstineService {

  constructor(private _http: HttpClient) { }

  saveSednicaSkupstineFromRemote(sednica:SednicaSkupstine){
    return this._http.post<any>("http://localhost:8090/sednicaskupstine", sednica);

  }
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
