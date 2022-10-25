import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant/etudiant.service';
import { Etudiant } from './Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiant : Etudiant = new Etudiant();
  totalRecord:number = 0;
  page : number = 1;

  etudiants : any = [];
  constructor(private service : EtudiantService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((data: Etudiant) => {
      this.etudiants = data;
      this.totalRecord = this.etudiants.lenght;
    });
  }
  
  deleteEtudiant(id : number) {
    
  }


  updateEtudiant(id : number) {
    
  }   
}
