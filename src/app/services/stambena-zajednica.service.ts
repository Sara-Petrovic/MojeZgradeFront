import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../components/global/globalVariable';
import { Login } from '../model/login';
import { StambenaZajednica } from '../model/stambena-zajednica';

@Injectable({
  providedIn: 'root'
})
export class StambenaZajednicaService {

  constructor(private _http: HttpClient) { }

  saveStambenaZajednicaFromRemote(sZajednica: StambenaZajednica) {
    return this._http.post<any>(GlobalVariable.BASE_API_URL + "stambenazajednica", sZajednica);
  }

  getAllStambenaZajednicaFromRemoteForUser(login: Login): Observable<any> {
    return this._http.get<StambenaZajednica>(GlobalVariable.BASE_API_URL + "stambenazajednica/all/" + login.user.userId + "/" + login.token);
  }

  getStambenaZajednicaByIdFromRemote(id: number): Observable<any> {
    return this._http.get<StambenaZajednica>(GlobalVariable.BASE_API_URL + "stambenazajednica/" + id);
  }

  findStambenaZajednicaByPibFromRemote(login: Login, pib: string) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "stambenazajednica/user/" + login.user.userId + "/" + login.token + "/searchbypib?pib=" + pib);
  }

  findStambenaZajednicaByMaticniBrojFromRemote(login: Login, maticniBroj: string) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "stambenazajednica/user/" + login.user.userId + "/" + login.token + "/searchbymaticnibroj?maticni_broj=" + maticniBroj);
  }

  findStambenaZajednicaByUlicaIBrojFromRemote(login: Login, ulica: string, broj: string) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "stambenazajednica/user/" + login.user.userId + "/" + login.token + "/searchbyulicabroj?ulica=" + ulica + "&broj=" + broj);
  }
  updateStambenaZajednicaFromRemote(id: number, updatedStambenaZajednica: StambenaZajednica) {
    return this._http.put<any>(GlobalVariable.BASE_API_URL + "stambenazajednica/" + id, updatedStambenaZajednica);
  }
  deleteStambenaZajednicaFromRemote(id: number) {
    return this._http.delete<any>(GlobalVariable.BASE_API_URL + "stambenazajednica/" + id);
  }

}
