import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StambenaZajednica } from '../model/stambena-zajednica';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StambenaZajednicaService {

  constructor(private _http: HttpClient) { }

  saveStambenaZajednicaFromRemote(sZajednica:StambenaZajednica){
    return this._http.post<any>("http://localhost:8090/stambenazajednica", sZajednica);
  }

 // getAllStambenaZajednicaFromRemote():Observable<any>{
 //   return this._http.get<StambenaZajednica>("http://localhost:8090/stambenazajednica");
  //}

  getAllStambenaZajednicaFromRemoteForUser(user:User):Observable<any>{
    return this._http.get<StambenaZajednica>("http://localhost:8090/stambenazajednica/all/" + user.userId);
  }

  getStambenaZajednicaByIdFromRemote(id: number):Observable<any>{
    return this._http.get<StambenaZajednica>("http://localhost:8090/stambenazajednica/" + id);
  }

  findStambenaZajednicaByPibFromRemote(user:User, pib:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/user/" + user.userId + "/searchbypib?pib=" + pib);
  }

  findStambenaZajednicaByMaticniBrojFromRemote(user:User, maticniBroj:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/user/" + user.userId + "/searchbymaticnibroj?maticni_broj=" + maticniBroj);
  }

  findStambenaZajednicaByUlicaIBrojFromRemote(user:User, ulica:string, broj:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/user/" + user.userId + "/searchbyulicabroj?ulica=" + ulica + "&broj=" + broj);
  }
  updateStambenaZajednicaFromRemote(id:number, updatedStambenaZajednica: StambenaZajednica){
    return this._http.put<any>("http://localhost:8090/stambenazajednica/"+ id, updatedStambenaZajednica);
  }
  deleteStambenaZajednicaFromRemote(id: number){
    return this._http.delete<any>("http://localhost:8090/stambenazajednica/" + id);
  }

}
