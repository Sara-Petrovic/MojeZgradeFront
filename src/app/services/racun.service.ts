import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Racun } from '../model/racun';

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

  /*
  getStambenaZajednicaByIdFromRemote(id: number):Observable<any>{
    return this._http.get<StambenaZajednica>("http://localhost:8090/racun/" + id);
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
  updateStambenaZajednicaFromRemote(id:number, updatedStambenaZajednica: StambenaZajednica){
    return this._http.put<any>("http://localhost:8090/stambenazajednica/"+ id, updatedStambenaZajednica);
  }
 

  
  */
}
