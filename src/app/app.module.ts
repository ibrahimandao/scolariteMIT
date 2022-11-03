import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantService } from './services/etudiant/etudiant.service';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantFormsComponent } from './etudiant-forms/etudiant-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormationFormsComponent } from './formation-forms/formation-forms.component';
import { FormationComponent } from './formation/formation.component';
import { FormationUpdateFormComponent } from './formation-update-form/formation-update-form.component';
import { EtudiantUpdateFormComponent } from './etudiant-update-form/etudiant-update-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModuleComponent } from './module/module.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormateurAddComponent } from './formateur-add/formateur-add.component';
import { FormateurUpdateComponent } from './formateur-update/formateur-update.component';
import { ModuleUpdateComponent } from './module-update/module-update.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { FormationmoduleComponent } from './formationmodule/formationmodule.component';
import { FormationmoduleAddComponent } from './formationmodule-add/formationmodule-add.component';
import { FormationmoduleUpdateComponent } from './formationmodule-update/formationmodule-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantFormsComponent,
    FormationFormsComponent,
    FormationComponent,
    FormationUpdateFormComponent,
    EtudiantUpdateFormComponent,
    ModuleComponent,
    FormateurComponent,
    FormateurAddComponent,
    FormateurUpdateComponent,
    ModuleUpdateComponent,
    ModuleAddComponent,
    FormationmoduleComponent,
    FormationmoduleAddComponent,
    FormationmoduleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
