import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SednicaSkupstine } from '../model/sednica-skupstine';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SednicaSkupstineService {

  constructor(private _http: HttpClient) { }

  saveSednicaSkupstineFromRemote(sednica:SednicaSkupstine){
    return this._http.post<any>("http://localhost:8090/sednicaskupstine", sednica);

  }
  getAllSedniceSkupstine(user:User){
    return this._http.get<any>("http://localhost:8090/sednice/"+user.userId);
  }
  getSednicaSkupstineFromRemote(sednicaId:number){
    return this._http.get<any>("http://localhost:8090/sednicaskupstine/"+ sednicaId);
  }
  getSednicaSkupstineByUlicaFromRemote(ulica:string,user:User ){
    return this._http.get<any>("http://localhost:8090/findsednicabyulica/"+ ulica +"/"+user.userId);
  }
}
