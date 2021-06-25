import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class VlasnikPosebnogDelaService {
  constructor(private _http: HttpClient) { }

  saveVlasnikPosebnogDelaFromRemote(vlasnik:VlasnikPosebnogDela){
    return this._http.post<any>("http://localhost:8090/vlasnikposebnogdela", vlasnik);

  }
}
