import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-img-edu',
  templateUrl: './edit-img-edu.component.html',
  styleUrls: ['./edit-img-edu.component.css']
})
export class EditImgEduComponent implements OnInit {

  educacion: Educacion;
  n_file: string = `educacion_imagenes/`;

  constructor(private activatedRouter : ActivatedRoute,
    private educacionS: EducacionService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.img = this.imageService.url;
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){

    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageService.uploadImage($event, name,this.n_file); 

  }

}
