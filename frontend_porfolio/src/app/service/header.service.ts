import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from '../models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Header[]>{
    return this.httpClient.get<Header[]>('/header/lista');
  }

  public detail(id: number): Observable<Header>{
    return this.httpClient.get<Header>(`/header/detail/${id}`);
  }

 /*public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>('/educacion/create', educacion);
  }*/

  public update(id: number, Header: Header): Observable<any>{
    return this.httpClient.put<any>(`/header/update/${id}`, Header);
  }

  /*
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`/educacion/delete/${id}`);
  }*/
}
