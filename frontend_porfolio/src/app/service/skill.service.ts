import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient : HttpClient) { }
  
  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>('/skill/lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(`/skill/detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>('/skill/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(`/skill/update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`/skill/delete/${id}`);
  }
}
