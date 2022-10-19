import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../etudiant/Etudiant';

@Component({
  selector: 'app-etudiant-forms',
  templateUrl: './etudiant-forms.component.html',
  styleUrls: ['./etudiant-forms.component.css']
})
export class EtudiantFormsComponent implements OnInit {
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
      libelle: [],
      niveau: [],
    });
  }

  addStudent(){
    //console.log(this.etudiantform.value);

    this.etudiant = Etudiant.loadFromFormGroup(this.etudiantform.value);
    this.service.add(this.etudiant).subscribe((data: any) => {     
      console.log(data);
    });
  }
}
