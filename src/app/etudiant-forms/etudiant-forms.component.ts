import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

import { Etudiant } from '../etudiant/Etudiant';
import { Formation } from '../formation/Formation';
import { EtudiantService } from '../services/etudiant/etudiant.service';
import { FormationService } from '../services/formation/FormationService';

@Component({
  selector: 'app-etudiant-forms',
  templateUrl: './etudiant-forms.component.html',
  styleUrls: ['./etudiant-forms.component.css']
})
export class EtudiantFormsComponent implements OnInit {

  etudiantform : FormGroup = new FormGroup('');
  etudiant = new Etudiant();
  formations : any[] = [];
  constructor(private fb : FormBuilder,private service : EtudiantService,private serviceFormation : FormationService) { }

  ngOnInit(): void {

    this.etudiantform = this.fb.group({
      name : [],
      email : [],
      phone : [],
      matricule : [],
      city : [],
      firstname : [], 
      formationId: [],
    });

    this.serviceFormation.findAll().subscribe((data: any) => {
      this.formations = data;
    });
  }

  addStudent(){
    this.etudiant = Etudiant.loadFromFormGroup(this.etudiantform.value);
    this.service.add(this.etudiant).subscribe((data: any) => {     
      console.log(data);
    });
  }
}
