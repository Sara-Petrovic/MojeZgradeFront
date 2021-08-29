import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { GlobalVariable } from '../components/global/globalVariable';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(GlobalVariable.BASE_API_URL + "login", user);
  }

  public logoutUserFromRemote(login: Login): Observable<any> {
    return this._http.post<any>(GlobalVariable.BASE_API_URL + "logout", login.user);
  }
}
