import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { intercetorProvider } from './service/interceptor-service';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EditdescripcionComponent } from './components/descripcion/editdescripcion.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { EditImgEduComponent } from './components/educacion/edit-img-edu.component';
import { EditImgExpComponent } from './components/experiencia/edit-img-exp.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    DescripcionComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    NeweducacionComponent,
    NewexperienciaComponent,
    EditdescripcionComponent,
    EditexperienciaComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditHeaderComponent,
    EditImgEduComponent,
    EditImgExpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    intercetorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
