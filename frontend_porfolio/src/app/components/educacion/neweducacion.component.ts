import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  img: string;
  anioInicio: string;
  anioFin: string;
  carrera: string;

  n_file: string = `educacion_imagenes/`;

  educacion: Educacion;


  constructor(private educacionS: EducacionService, private router: Router,
    public imageService: ImageService,private activatedRouter : ActivatedRoute) { }
  

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.img, this.anioInicio, this.anioFin,
      this.carrera);

    this.educacionS.save(educacion).subscribe(
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
    const name = "educacion_" + id;
    this.imageService.uploadImage($event, name,this.n_file); 

  }

}
