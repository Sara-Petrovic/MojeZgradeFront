import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesto } from '../model/mesto';

@Injectable({
  providedIn: 'root'
})
export class MestoService {

  constructor(private _http: HttpClient) { }

  getMesta(): Observable<any>{
    return this._http.get<Mesto>("http://localhost:8090/mesto");
  } 
}