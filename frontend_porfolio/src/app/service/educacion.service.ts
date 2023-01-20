import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //URL = 'https://localhost:8080/educacion/';


  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>('/educacion/lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(`/educacion/detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>('/educacion/create', educacion);
  }

  public updateImgEdu(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(`/educacion/updateImgEdu/${id}`, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(`/educacion/update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`/educacion/delete/${id}`);
  }
}