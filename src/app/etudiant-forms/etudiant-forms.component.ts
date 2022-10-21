import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

import { Etudiant } from '../etudiant/Etudiant';
import { EtudiantService } from '../services/etudiant/etudiant.service';

@Component({
  selector: 'app-etudiant-forms',
  templateUrl: './etudiant-forms.component.html',
  styleUrls: ['./etudiant-forms.component.css']
})
export class EtudiantFormsComponent implements OnInit {

  formationSelected : number = 3;
  etudiantform : FormGroup = new FormGroup('');
  etudiant = new Etudiant();
  constructor(private fb : FormBuilder,private service : EtudiantService) { }

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
  }

  addStudent(){
    this.etudiant = Etudiant.loadFromFormGroup(this.etudiantform.value);
    this.service.add(this.etudiant).subscribe((data: any) => {     
      console.log(data);
    });
  }
}
