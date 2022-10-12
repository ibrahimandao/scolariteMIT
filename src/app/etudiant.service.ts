import { Injectable } from '@angular/core';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { Etudiant } from './etudiant/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  items: Etudiant[] = [];  
  constructor() { }

  find(etu:Etudiant){    
     this.items.push(etu);
     return this.items;
  }
}
