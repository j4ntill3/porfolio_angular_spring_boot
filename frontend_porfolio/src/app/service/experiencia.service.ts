import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

    //URL = 'https://localhost:8080/exp/';


    constructor(private httpClient : HttpClient) { }

    public lista(): Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>('/exp/lista');
    }
  
    public detail(id: number): Observable<Experiencia>{
      return this.httpClient.get<Experiencia>(`/exp/detail/${id}`);
    }
  
    public save(experiencia: Experiencia): Observable<any>{
      return this.httpClient.post<any>('/exp/create', experiencia);
    }
  
    public update(id: number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(`/exp/update/${id}`, experiencia);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(`/exp/delete/${id}`);
    }

    public updateImgExp(id: number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.post<any>(`/exp/updateImgExp/${id}`, experiencia);
    }
}
