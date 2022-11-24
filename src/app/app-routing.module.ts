import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EtudiantFormsComponent } from './etudiant-forms/etudiant-forms.component';
import { EtudiantUpdateFormComponent } from './etudiant-update-form/etudiant-update-form.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurAddComponent } from './formateur-add/formateur-add.component';
import { FormateurUpdateComponent } from './formateur-update/formateur-update.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationFormsComponent } from './formation-forms/formation-forms.component';
import { FormationUpdateFormComponent } from './formation-update-form/formation-update-form.component';
import { FormationComponent } from './formation/formation.component';
import { FormationmoduleAddComponent } from './formationmodule-add/formationmodule-add.component';
import { FormationmoduleUpdateComponent } from './formationmodule-update/formationmodule-update.component';
import { FormationmoduleComponent } from './formationmodule/formationmodule.component';
import { ListeetudiantformationComponent } from './listeetudiantformation/listeetudiantformation.component';
import { ListemoduleformationComponent } from './listemoduleformation/listemoduleformation.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleUpdateComponent } from './module-update/module-update.component';
import { ModuleComponent } from './module/module.component';
import { PlanningcourssemaineComponent } from './planningcourssemaine/planningcourssemaine.component';

const routes: Routes = [
  {path:'etudiant', component :EtudiantComponent}, 
  {path:'formation', component :FormationComponent},
  {path:'formateur', component :FormateurComponent},
  {path:'module', component :ModuleComponent},
  {path:'formationmodule', component :FormationmoduleComponent},
  {path:'planningsemaine', component :PlanningcourssemaineComponent},

  {path:'addformation', component :FormationFormsComponent},
  {path:'addformateur', component :FormateurAddComponent},
  {path:'addmodule', component :ModuleAddComponent},
  {path:'addetudiant', component :EtudiantFormsComponent},
  {path:'addformationmodule', component: FormationmoduleAddComponent},

  {path:'updateformation/:id', component :FormationUpdateFormComponent},
  {path:'updateetudiant/:id', component :EtudiantUpdateFormComponent},
  {path:'updateformateur/:id', component :FormateurUpdateComponent},
  {path:'updatemodule/:id', component :ModuleUpdateComponent},
  {path:'updateformationmodule/:id', component: FormationmoduleUpdateComponent},

  {path:'listemoduleformation/:id', component: ListemoduleformationComponent},
  {path:'listeetudiant/:id', component: ListeetudiantformationComponent},

  {path:'login',component: AuthenticationComponent},
  {path:'',component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
