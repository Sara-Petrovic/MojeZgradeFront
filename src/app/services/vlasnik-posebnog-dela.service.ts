import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from '../components/global/globalVariable';
import { Login } from '../model/login';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class VlasnikPosebnogDelaService {

  constructor(private _http: HttpClient) { }

  saveVlasnikPosebnogDelaFromRemote(vlasnik: VlasnikPosebnogDela) {
    return this._http.post<any>(
      GlobalVariable.BASE_API_URL + "vlasnikposebnogdela/", vlasnik);

  }

  getAllVlasnikPosebnogDelaFromRemote(login: Login) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "vlasnikposebnogdela/all/" + login.user.userId + "/" + login.token);

  }
  getVlasnikPosebnogDelaFromRemote(vlasnikId: number) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "findvlasnikbyid/" + vlasnikId);

  }
  getVlasnikByPrezimeFromRemote(vlasnikPrezime: string, login: Login) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "findvlasnikbyprezime/" + vlasnikPrezime + "/user/" + login.user.userId + "/" + login.token);

  }
  getAllVlasniciByStambenaZajednicaFromRemote(szId: number, login: Login) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "findvlasnikbystambenazajednica/" + szId + "/user/" + login.user.userId + "/" + login.token);
  }
  updateVlasnikPosebnogDelaFromRemote(vlasnikId: number, newVlasnik: VlasnikPosebnogDela) {
    return this._http.put<any>(GlobalVariable.BASE_API_URL + "vlasnikposebnogdela/" + vlasnikId, newVlasnik);
  }
  deleteVlasnikPosebnogDelaFromRemote(vlasnikId: number) {
    return this._http.delete<any>(GlobalVariable.BASE_API_URL + "vlasnikposebnogdela/" + vlasnikId);

  }

}
