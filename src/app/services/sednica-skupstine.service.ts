import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from '../components/global/globalVariable';
import { Login } from '../model/login';
import { SednicaSkupstine } from '../model/sednica-skupstine';

@Injectable({
  providedIn: 'root'
})
export class SednicaSkupstineService {

  constructor(private _http: HttpClient) { }

  saveSednicaSkupstineFromRemote(sednica:SednicaSkupstine){
    return this._http.post<any>(GlobalVariable.BASE_API_URL  + "sednicaskupstine", sednica);
  }
  updateSednicaSkupstineFromRemote(sednicaId:number,sednica:SednicaSkupstine){
    return this._http.put<any>(GlobalVariable.BASE_API_URL  + "sednicaskupstine/"+ sednicaId, sednica);
  }
  getAllSedniceSkupstine(login:Login){
    return this._http.get<any>(GlobalVariable.BASE_API_URL  + "sednice/user/"+ login.user.userId + "/" + login.token);
  }
  getSednicaSkupstineFromRemote(sednicaId:number){
    return this._http.get<any>(GlobalVariable.BASE_API_URL  + "sednicaskupstine/"+ sednicaId);
  }
  getSednicaSkupstineByUlicaFromRemote(ulica:string, login:Login ){
    return this._http.get<any>(GlobalVariable.BASE_API_URL  + "findsednicabyulica/"+ ulica +"/user/"+ login.user.userId + "/" + login.token);
  }
}
