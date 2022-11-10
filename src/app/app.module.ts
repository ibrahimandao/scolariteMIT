import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDateFormats, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ListemoduleformationComponent } from './listemoduleformation/listemoduleformation.component';
import { ListeetudiantformationComponent } from './listeetudiantformation/listeetudiantformation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { PlanningcourssemaineComponent } from './planningcourssemaine/planningcourssemaine.component';

export const MY_FORMAT: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


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
    FormationmoduleUpdateComponent,
    ListemoduleformationComponent,
    ListeetudiantformationComponent,
    PlanningcourssemaineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [EtudiantService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 

   periodicite  = [{id:0,libelle:"Quotidien"},{id:1,libelle:"Hebdomadaire"}]
}


