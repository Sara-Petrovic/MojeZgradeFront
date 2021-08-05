import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesto } from '../model/mesto';
import { GlobalVariable } from '../components/global/globalVariable';

@Injectable({
  providedIn: 'root'
})
export class MestoService {

  constructor(private _http: HttpClient) { }

  getMesta(): Observable<any>{
    return this._http.get<Mesto>(GlobalVariable.BASE_API_URL  + "mesto");
  } 
}