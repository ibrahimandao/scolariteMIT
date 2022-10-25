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

  etudiants : any = [];
  constructor(private service : EtudiantService) { }

  ngOnInit(): void {
    /*this.service.find('MIT0002').subscribe((data: Etudiant) => {
      this.etudiant = data;
      console.log(data);
    });*/

    this.service.findAll().subscribe((data: Etudiant) => {
      this.etudiants = data;
      console.log(data);
    });
  }
  
  deleteEtudiant(id : number) {
    
  }


  updateEtudiant(id : number) {
    
  }   
}
