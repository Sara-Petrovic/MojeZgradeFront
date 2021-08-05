import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { Racun } from '../model/racun';
import { User } from '../model/user';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class RacunService {

  constructor(private _http: HttpClient) { }

  getAllRacunFromRemote(login:Login):Observable<any>{
    return this._http.get<Racun>("http://localhost:8090/racun/all/" + login.user.userId + "/" + login.token);
  }
  deleteRacunFromRemote(id: number){
    return this._http.delete<any>("http://localhost:8090/racun/" + id);
  }

  saveRacunFromRemote(racun:Racun){
    return this._http.post<any>("http://localhost:8090/racun", racun);
  }

  findRacunByStatusFromRemote(login:Login, status:string){
    return this._http.get<any>("http://localhost:8090/racun/user/" + login.user.userId+ "/" + login.token + "/searchbystatus?status=" + status);
  }
  
  getRacunByIdFromRemote(id: number):Observable<any>{
    return this._http.get<Racun>("http://localhost:8090/racun/" + id);
  }
 
  findRacunByVlasnikFromRemote(login:Login, vlasnik:VlasnikPosebnogDela){
    return this._http.get<any>("http://localhost:8090/racun/user/" + login.user.userId + "/" + login.token + "/searchbyvlasnik?vlasnik=" + vlasnik.vlasnikId);
  }

  updateRacunFromRemote(id:number, updatedRacun: Racun){
    return this._http.put<any>("http://localhost:8090/racun/"+ id, updatedRacun);
  }

  getAllRacunStatus(){
    return this._http.get<any>("http://localhost:8090/racun/all/status");
  }
}
