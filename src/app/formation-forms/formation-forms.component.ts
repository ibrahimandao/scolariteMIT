import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formation } from '../formation/Formation';
import { FormationService } from '../services/formation/FormationService';

@Component({
  selector: 'app-formation-forms',
  templateUrl: './formation-forms.component.html',
  styleUrls: ['./formation-forms.component.css']
})
export class FormationFormsComponent implements OnInit {

  formationform : FormGroup = new FormGroup('');
  formation = new Formation();
  constructor(private fb : FormBuilder,private service : FormationService) { }


  ngOnInit(): void {
    this.formationform = this.fb.group({
      libelle: [],
      niveau: [],
    });
  }

   addFormation(){
    this.formation = new Formation(this.formationform.value.libelle,this.formationform.value.niveau);
    this.service.add(this.formation).subscribe((data: any) => {     
      console.log(data);
    });
  }
}
