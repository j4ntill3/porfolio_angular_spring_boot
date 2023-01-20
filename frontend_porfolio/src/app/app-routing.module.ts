import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdescripcionComponent } from './components/descripcion/editdescripcion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { EditImgEduComponent } from './components/educacion/edit-img-edu.component';
import { EditImgExpComponent } from './components/experiencia/edit-img-exp.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'nuevopro', component: NewproyectoComponent},
  {path: 'editpro/:id', component: EditproyectoComponent},
  {path: 'nuevaexp', component: NewexperienciaComponent},
  {path: 'editdescripcion/:id', component: EditdescripcionComponent},
  {path: 'editexp/:id', component: EditexperienciaComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editheader/:id', component: EditHeaderComponent},
  {path: 'editimgedu/:id', component: EditImgEduComponent},
  {path: 'editimgexp/:id', component: EditImgExpComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
