import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantFormsComponent } from './etudiant-forms/etudiant-forms.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormationFormsComponent } from './formation-forms/formation-forms.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  {path:'etudiant', component :EtudiantComponent},
  {path:'addetudiant', component :EtudiantFormsComponent},
  {path:'formation', component :FormationComponent},
  {path:'addformation', component :FormationFormsComponent},
  {path:'',redirectTo:'/etudiant',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
