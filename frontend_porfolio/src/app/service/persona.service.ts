import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>('/personas/lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(`/personas/detail/${id}`);
  }

 /*public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>('/educacion/create', educacion);
  }*/

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(`/personas/update/${id}`, Persona);
  }

  public updatePortada(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(`/personas/update/portada/${id}`, Persona);
  }
  /*
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`/educacion/delete/${id}`);
  }*/
}
