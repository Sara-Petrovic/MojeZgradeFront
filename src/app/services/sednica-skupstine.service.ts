import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { SednicaSkupstine } from '../model/sednica-skupstine';

@Injectable({
  providedIn: 'root'
})
export class SednicaSkupstineService {

  constructor(private _http: HttpClient) { }

  saveSednicaSkupstineFromRemote(sednica:SednicaSkupstine){
    return this._http.post<any>("http://localhost:8090/sednicaskupstine", sednica);
  }
  updateSednicaSkupstineFromRemote(sednicaId:number,sednica:SednicaSkupstine){
    return this._http.put<any>("http://localhost:8090/sednicaskupstine/"+ sednicaId, sednica);
  }
  getAllSedniceSkupstine(login:Login){
    return this._http.get<any>("http://localhost:8090/sednice/user/"+ login.user.userId + "/" + login.token);
  }
  getSednicaSkupstineFromRemote(sednicaId:number){
    return this._http.get<any>("http://localhost:8090/sednicaskupstine/"+ sednicaId);
  }
  getSednicaSkupstineByUlicaFromRemote(ulica:string, login:Login ){
    return this._http.get<any>("http://localhost:8090/findsednicabyulica/"+ ulica +"/user/"+ login.user.userId + "/" + login.token);
  }
}
