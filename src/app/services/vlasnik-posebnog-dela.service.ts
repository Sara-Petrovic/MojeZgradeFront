import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class VlasnikPosebnogDelaService {
  
  constructor(private _http: HttpClient) { }

  saveVlasnikPosebnogDelaFromRemote(vlasnik:VlasnikPosebnogDela){
    return this._http.post<any>("http://localhost:8090/vlasnikposebnogdela", vlasnik);

  }

  getAllVlasnikPosebnogDelaFromRemote(user:User){
    return this._http.get<any>("http://localhost:8090/vlasnikposebnogdela/"+ user.userId);

  }
  getVlasnikPosebnogDelaFromRemote(vlasnikId:number){
    return this._http.get<any>("http://localhost:8090/findvlasnikbyid/"+ vlasnikId);

  }
  getVlasnikByPrezimeFromRemote(vlasnikPrezime:string, user:User){
    return this._http.get<any>("http://localhost:8090/findvlasnikbyprezime/"+ vlasnikPrezime+ "/" + user.userId);

  }
  getAllVlasniciByStambenaZajednicaFromRemote(szId:number) {
    return this._http.get<any>("http://localhost:8090/findvlasnikbystambenazajednica/"+ szId);
  }
  updateVlasnikPosebnogDelaFromRemote(vlasnikId:number, newVlasnik: VlasnikPosebnogDela){
    return this._http.put<any>("http://localhost:8090/vlasnikposebnogdela/"+vlasnikId, newVlasnik);
  }
  deleteVlasnikPosebnogDelaFromRemote(vlasnikId: number){
    return this._http.delete<any>("http://localhost:8090/vlasnikposebnogdela/"+vlasnikId);

  }

}
