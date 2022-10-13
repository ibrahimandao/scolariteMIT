import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { GerantComponent } from './gerant/gerant.component';

const routes: Routes = [
  {path:'etudiant', component :EtudiantComponent},
  {path:'gerant', component :GerantComponent},
  {path:'',redirectTo:'/etudiant',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
