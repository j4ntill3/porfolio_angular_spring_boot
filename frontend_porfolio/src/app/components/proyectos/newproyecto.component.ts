import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {

  nombreP: string;
  descripcionP: string;
  urlP: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.urlP);

    this.proyectoS.save(proyecto).subscribe(
      {
      next: resp => {
        this.router.navigate(['']);
      },
        error: err => {
          this.router.navigate(['']);
        }
    })
  }
}
