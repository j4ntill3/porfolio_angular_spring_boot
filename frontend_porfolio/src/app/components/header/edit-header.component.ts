import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from 'src/app/models/header';
import { ImageService } from 'src/app/service/image.service';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {


  header: Header;
  n_file: string = `portada_imagen/`;


  constructor(private activatedRouter : ActivatedRoute,
    private headerService: HeaderService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.headerService.detail(id).subscribe(
      data =>{
        this.header = data;
      }, err =>{
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.header.urlP = this.imageService.url;
    this.headerService.update(id, this.header).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){

    const id = this.activatedRouter.snapshot.params['id'];
    const name = "portada_" + id;
    this.imageService.uploadImage($event, name,this.n_file); 

  }

}
