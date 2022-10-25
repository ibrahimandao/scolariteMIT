import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantFormsComponent } from './etudiant-forms/etudiant-forms.component';
import { EtudiantUpdateFormComponent } from './etudiant-update-form/etudiant-update-form.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormationFormsComponent } from './formation-forms/formation-forms.component';
import { FormationUpdateFormComponent } from './formation-update-form/formation-update-form.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  {path:'etudiant', component :EtudiantComponent},
  {path:'addetudiant', component :EtudiantFormsComponent},
  {path:'formation', component :FormationComponent},
  {path:'addformation', component :FormationFormsComponent},
  {path:'updateformation/:id', component :FormationUpdateFormComponent},
  {path:'updateetudiant/:id', component :EtudiantUpdateFormComponent},
  {path:'',redirectTo:'/etudiant',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
