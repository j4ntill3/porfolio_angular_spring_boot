import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  experiencia: Experiencia;
  n_file: string = `experiencia_imagenes/`;
  constructor(
    private experienciaS: ExperienciaService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.imgE = this.imageService.url;
    this.experienciaS.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "experiencia_" + id;
    this.imageService.uploadImage($event, name,this.n_file); 
  }

}
