import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill'
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillS: SkillService, private tokenService: TokenService, private router: Router) { }
  isLogged = false;
  skill: Skill[] = [];

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.skillS.delete(id).subscribe(
        {
        next: resp => {
          this.cargarSkill();
          location.reload();
        },
          error: err => {
            location.reload();
          }
      })
      location.reload();
    }
  }


}









