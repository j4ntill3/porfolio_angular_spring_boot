import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {

  nombreE: string;
  puesto: string;
  descripcionE: string;
  imgE: string;
  anioInicio: string;
  anioFin: string;

  n_file: string = `experiencia_imagenes/`;

  constructor(private experienciaS: ExperienciaService, private router: Router,
    public imageService: ImageService,private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreE, this.puesto, this.descripcionE, this.imgE, this.anioInicio, this.anioFin);

    this.experienciaS.save(experiencia).subscribe(
      {
      next: resp => {
        this.router.navigate(['']);
      },
        error: err => {
          this.router.navigate(['']);
        }
    })
  }

  uploadImage($event:any){

    const id = this.activatedRouter.snapshot.params['id'];
    const name = "experiencia_" + id;
    this.imageService.uploadImage($event,name,this.n_file); 

  }

}
