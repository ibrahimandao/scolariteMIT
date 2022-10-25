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

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantFormsComponent,
    FormationFormsComponent,
    FormationComponent,
    FormationUpdateFormComponent,
    EtudiantUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
