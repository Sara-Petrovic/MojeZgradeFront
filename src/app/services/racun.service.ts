import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racun } from '../model/racun';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';
import { VlasnikPosebnogDelaService } from './vlasnik-posebnog-dela.service';

@Injectable({
  providedIn: 'root'
})
export class RacunService {

  constructor(private _http: HttpClient) { }

  getAllRacunFromRemote():Observable<any>{
    return this._http.get<Racun>("http://localhost:8090/racun");
  }
  deleteRacunFromRemote(id: number){
    return this._http.delete<any>("http://localhost:8090/racun/" + id);
  }

  saveRacunFromRemote(racun:Racun){
    return this._http.post<any>("http://localhost:8090/racun", racun);
  }

  findRacunByStatusFromRemote(status:string){
    return this._http.get<any>("http://localhost:8090/racun/searchbystatus?status=" + status);
  }
/*
  getRacunByIdFromRemote(id: number):Observable<any>{
    return this._http.get<Racun>("http://localhost:8090/racun/" + id);
  }
 */  
  findRacunByVlasnikFromRemote(vlasnik:VlasnikPosebnogDela){
    return this._http.get<any>("http://localhost:8090/racun/searchbyvlasnik?vlasnik=" + vlasnik.vlasnikId);
  }

  findRacunByDatumFromRemote(datumOd:Date, datumDo:Date){
    return this._http.get<any>("http://localhost:8090/racun/searchbydatum?datumOd=" + datumOd + "&datumDo=" + datumDo);
  }

  updateRacunFromRemote(id:number, updatedRacun: Racun){
    return this._http.put<any>("http://localhost:8090/racun/"+ id, updatedRacun);
  }
}
