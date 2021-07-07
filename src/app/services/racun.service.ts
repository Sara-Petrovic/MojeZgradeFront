import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racun } from '../model/racun';
import { User } from '../model/user';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class RacunService {

  constructor(private _http: HttpClient) { }

  getAllRacunFromRemote(user:User):Observable<any>{
    return this._http.get<Racun>("http://localhost:8090/racun/all/" + user.userId);
  }
  deleteRacunFromRemote(id: number){
    return this._http.delete<any>("http://localhost:8090/racun/" + id);
  }

  saveRacunFromRemote(racun:Racun){
    return this._http.post<any>("http://localhost:8090/racun", racun);
  }

  findRacunByStatusFromRemote(user:User, status:string){
    return this._http.get<any>("http://localhost:8090/racun/user/" + user.userId + "/searchbystatus?status=" + status);
  }
  
  getRacunByIdFromRemote(id: number):Observable<any>{
    return this._http.get<Racun>("http://localhost:8090/racun/" + id);
  }
 
  findRacunByVlasnikFromRemote(user:User, vlasnik:VlasnikPosebnogDela){
    return this._http.get<any>("http://localhost:8090/racun/user/" + user.userId + "/searchbyvlasnik?vlasnik=" + vlasnik.vlasnikId);
  }

  findRacunByDatumFromRemote(datumOd:Date, datumDo:Date){
    return this._http.get<any>("http://localhost:8090/racun/searchbydatum?datumOd=" + datumOd + "&datumDo=" + datumDo);
  }

  updateRacunFromRemote(id:number, updatedRacun: Racun){
    return this._http.put<any>("http://localhost:8090/racun/"+ id, updatedRacun);
  }
}
