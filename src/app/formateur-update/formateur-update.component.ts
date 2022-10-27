import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from '../models/Formateur';
import { FormateurService } from '../services/fromateur/formateur.service';

@Component({
  selector: 'app-formateur-update',
  templateUrl: './formateur-update.component.html',
  styleUrls: ['./formateur-update.component.css']
})
export class FormateurUpdateComponent implements OnInit {

  alerte = false;
  formateurform : FormGroup = new FormGroup('');
  formateur = new Formateur();
  formations : any[] = [];
  constructor(private fb : FormBuilder,private service : FormateurService,private router : ActivatedRoute) { }

  ngOnInit(): void {

    this.formateurform = this.fb.group({
      name : [],
      email : [],
      firstname : []
    });

    this.getCurrentData(this.router.snapshot.params['id']);
  }


  updateFormateur(){
    this.formateur = Formateur.loadFromFormGroup(this.formateurform.value);
    this.service.update(this.router.snapshot.params['id'],this.formateur).subscribe((data: any) => { 
         
      this.alerte = true;
    });
  }

  getCurrentData(id : number){
    this.service.findById(id).subscribe((data: any) => {        
      this.formateurform = this.fb.group({        
        name : [data["name"]],
        email : [data["email"]],
        firstname : [data["firstname"]]
      });
    });
  }

  CloseAlerte(){
    this.alerte = false;
  }
}
