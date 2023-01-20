import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http://localhost:8080/auth/;'
  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    //return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
    return this.httpClient.post<JwtDto>('/auth/login', loginUsuario);
  }
}
