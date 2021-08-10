import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../components/global/globalVariable';
import { Login } from '../model/login';
import { Racun } from '../model/racun';
import { VlasnikPosebnogDela } from '../model/vlasnik-posebnog-dela';

@Injectable({
  providedIn: 'root'
})
export class RacunService {

  constructor(private _http: HttpClient) { }

  getAllRacunFromRemote(login: Login): Observable<any> {
    return this._http.get<Racun>(GlobalVariable.BASE_API_URL + "racun/all/" + login.user.userId + "/" + login.token);
  }
  deleteRacunFromRemote(id: number) {
    return this._http.delete<any>(GlobalVariable.BASE_API_URL + "racun/" + id);
  }

  saveRacunFromRemote(racun: Racun) {
    return this._http.post<any>(GlobalVariable.BASE_API_URL + "racun", racun);
  }

  findRacunByStatusFromRemote(login: Login, status: string) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "racun/user/" + login.user.userId + "/" + login.token + "/searchbystatus?status=" + status);
  }

  getRacunByIdFromRemote(id: number): Observable<any> {
    return this._http.get<Racun>(GlobalVariable.BASE_API_URL + "racun/" + id);
  }

  findRacunByVlasnikFromRemote(login: Login, vlasnik: VlasnikPosebnogDela) {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "racun/user/" + login.user.userId + "/" + login.token + "/searchbyvlasnik?vlasnik=" + vlasnik.vlasnikId);
  }

  updateRacunFromRemote(id: number, updatedRacun: Racun) {
    return this._http.put<any>(GlobalVariable.BASE_API_URL + "racun/" + id, updatedRacun);
  }

  getAllRacunStatus() {
    return this._http.get<any>(GlobalVariable.BASE_API_URL + "racun/all/status");
  }

  updateRacunPaidFromRemote(id: number) {
    return this._http.put<any>(GlobalVariable.BASE_API_URL + "racun/paid/" + id, null);
  }

  updateRacunSentFromRemote(id: number, emailPassword: string) {

    // console.log(uplatnica)

    // let fd: FormData = new FormData();
    // fd.append('emailPassword', password);
    // fd.append('uplatnica', uplatnica, 'uplatnica.pdf');

    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');

    // uplatnica.open;


    return this._http.post<any>(GlobalVariable.BASE_API_URL + "racun/" + id + "/send", emailPassword);
  }
}
/*
        
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )

*/