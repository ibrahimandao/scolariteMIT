import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantService } from './etudiant.service';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { GerantComponent } from './gerant/gerant.component';
import { EtudiantFormsComponent } from './etudiant-forms/etudiant-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    GerantComponent,
    EtudiantFormsComponent
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
