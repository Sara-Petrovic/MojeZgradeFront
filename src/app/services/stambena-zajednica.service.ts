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

  getStambenaZajednicaByIdFromRemote(id: number):Observable<any>{
    return this._http.get<StambenaZajednica>("http://localhost:8090/stambenazajednica/" + id);
  }

  findStambenaZajednicaByPibFromRemote(pib:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/searchbypib?pib=" + pib);
  }

  findStambenaZajednicaByMaticniBrojFromRemote(maticniBroj:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/searchbymaticnibroj?maticni_broj=" + maticniBroj);
  }

  findStambenaZajednicaByUlicaIBrojFromRemote(ulica:string, broj:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/searchbyulicabroj?ulica=" + ulica + "&broj=" + broj);
  }
  updateVlasnikPosebnogDelaFromRemote(id:number, updatedStambenaZajednica: StambenaZajednica){
    return this._http.put<any>("http://localhost:8090/stambenazajednica/"+ id, updatedStambenaZajednica);
  }
  deleteStambenaZajednicaFromRemote(id: number){
    return this._http.delete<any>("http://localhost:8090/stambenazajednica/" + id);
  }

}
