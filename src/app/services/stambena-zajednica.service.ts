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

  findStambenaZajednicaByPibFromRemote(pib:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/searchbypib?pib=" + pib);
  }

  findStambenaZajednicaByMaticniBrojFromRemote(maticniBroj:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/searchbymaticnibroj?maticni_broj=" + maticniBroj);
  }

  findStambenaZajednicaByUlicaIBrojFromRemote(ulica:string, broj:string){
    return this._http.get<any>("http://localhost:8090/stambenazajednica/searchbyulicabroj?ulica=" + ulica + "&broj=" + broj);
  }

  deleteStambenaZajednicaFromRemote(id: number){
    return this._http.delete<any>("http://localhost:8090/stambenazajednica/" + id);
  }

}
