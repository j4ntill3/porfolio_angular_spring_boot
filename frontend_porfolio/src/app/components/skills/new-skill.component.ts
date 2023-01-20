import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {


  nombreS: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreS, this.porcentaje);
    this.skillS.save(skill).subscribe(
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
