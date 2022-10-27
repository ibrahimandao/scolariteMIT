import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formateur } from '../models/Formateur';
import { FormateurService } from '../services/fromateur/formateur.service';

@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.css']
})
export class FormateurAddComponent implements OnInit {
  alerte = false;
  formateurform : FormGroup = new FormGroup('');
  formateur = new Formateur();
  formations : any[] = [];
  constructor(private fb : FormBuilder,private service : FormateurService) { }

  ngOnInit(): void {

    this.formateurform = this.fb.group({
      name : [],
      email : [],
      firstname : [],
    });
  }


  addFormateur(){
    this.formateur = Formateur.loadFromFormGroup(this.formateurform.value);
    this.service.add(this.formateur).subscribe((data: any) => {     
      this.formateurform = this.fb.group({
        name : [],
        email : [],
        firstname : [],
      });

      this.alerte = true;
    });
  }

  CloseAlerte(){
    this.alerte = false;
  }
}
