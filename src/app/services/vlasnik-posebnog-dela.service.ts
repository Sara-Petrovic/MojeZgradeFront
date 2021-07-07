import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { User } from '../model/user';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class VlasnikPosebnogDelaService {
  
  constructor(private _http: HttpClient) { }

  saveVlasnikPosebnogDelaFromRemote(vlasnik:VlasnikPosebnogDela){
    return this._http.post<any>(
      "http://localhost:8090/vlasnikposebnogdela/",vlasnik);

  }

  getAllVlasnikPosebnogDelaFromRemote(login:Login){
    return this._http.get<any>("http://localhost:8090/vlasnikposebnogdela/all/" + login.user.userId + "/" + login.token);

  }
  getVlasnikPosebnogDelaFromRemote(vlasnikId:number){
    return this._http.get<any>("http://localhost:8090/findvlasnikbyid/"+ vlasnikId);

  }
  getVlasnikByPrezimeFromRemote(vlasnikPrezime:string, login:Login){
    return this._http.get<any>("http://localhost:8090/findvlasnikbyprezime/"+ vlasnikPrezime + "/user/" + login.user.userId+ "/" + login.token);

  }
  getAllVlasniciByStambenaZajednicaFromRemote(szId:number, login:Login) {
    return this._http.get<any>("http://localhost:8090/findvlasnikbystambenazajednica/"+ szId + "/user/" + login.user.userId + "/" + login.token);
  }
  updateVlasnikPosebnogDelaFromRemote(vlasnikId:number, newVlasnik: VlasnikPosebnogDela){
    return this._http.put<any>("http://localhost:8090/vlasnikposebnogdela/"+vlasnikId, newVlasnik);
  }
  deleteVlasnikPosebnogDelaFromRemote(vlasnikId: number){
    return this._http.delete<any>("http://localhost:8090/vlasnikposebnogdela/"+vlasnikId);

  }

}
