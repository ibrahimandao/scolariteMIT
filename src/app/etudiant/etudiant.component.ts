import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private service : EtudiantService) { }

  ngOnInit(): void {
  }
  
  etudiantsList = this.service.find({nom:"Ndao",prenom:"Ibou"});

  //etudiantsList = this.service.find({nom:"Ndao",prenom:"Vieux"});
}
