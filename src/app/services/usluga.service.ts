import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../components/global/globalVariable';
import { Usluga } from '../model/usluga';

@Injectable({
  providedIn: 'root'
})
export class UslugaService {

  constructor(private _http: HttpClient) { }

  getAllUslugeFromRemote(): Observable<any> {
    return this._http.get<Usluga>(GlobalVariable.BASE_API_URL + "usluga");
  }

  saveUslugaFromRemote(usluga:Usluga){
    return this._http.post<Usluga>(GlobalVariable.BASE_API_URL + "usluga", usluga);
  }

}
