import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaS: ExperienciaService, private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.experienciaS.lista().subscribe(
      data =>{
        this.experiencia = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.experienciaS.delete(id).subscribe(
        {
        next: resp => {
          this.cargarExperiencia();
          
        },
          error: err => {
            
          }
      })
      location.reload();
    }
  }
}
