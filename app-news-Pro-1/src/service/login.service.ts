import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public isLogged(): boolean {
    return (
      localStorage.getItem('token') != null &&
      localStorage.getItem('roles') != null &&
      localStorage.getItem('roles') != '' &&
      localStorage.getItem('token') != ''
    );
  }

  public login(user: User): Observable<any> {
    return this.httpClient.post(environment.REST_API + '/authenticate', user);
  }

  public register(user: User): Observable<any> {
    return this.httpClient.post(environment.REST_API + '/register', user);
  }
}
