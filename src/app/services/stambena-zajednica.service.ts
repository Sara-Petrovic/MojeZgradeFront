import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StambenaZajednica } from '../model/stambena-zajednica';

@Injectable({
  providedIn: 'root'
})
export class StambenaZajednicaService {

  constructor(private _http: HttpClient) { }

  saveStambenaZajednicaFromRemote(sZajednica:StambenaZajednica){
    return this._http.post<any>("http://localhost:8090/stambenazajednica", sZajednica);

  }

  getAllStambenaZajednicaFromRemote():Observable<any>{
    return this._http.get<StambenaZajednica>("http://localhost:8090/stambenazajednica");

  }
}
