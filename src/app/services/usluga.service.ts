import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usluga } from '../model/usluga';

@Injectable({
  providedIn: 'root'
})
export class UslugaService {

  constructor(private _http: HttpClient) { }

  getAllUslugeFromRemote():Observable<any>{
    return this._http.get<Usluga>("http://localhost:8090/usluga");
  }

}
