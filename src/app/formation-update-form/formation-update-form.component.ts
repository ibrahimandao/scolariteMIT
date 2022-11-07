import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../models/Formation';
import { FormationService } from '../services/formation/FormationService';

@Component({
  selector: 'app-formation-update-form',
  templateUrl: './formation-update-form.component.html',
  styleUrls: ['./formation-update-form.component.css']
})
export class FormationUpdateFormComponent implements OnInit {
  alerte = false;
  formationform : FormGroup = new FormGroup('');
  formation = new Formation();
  listNiveau  = Formation.getListNiveau();
  constructor(private fb : FormBuilder,private service : FormationService,private router : ActivatedRoute) { }


  ngOnInit(): void {   
    this.formationform = this.fb.group({
      libelle: [],
      niveau: [],
    });
    this.getCurrentData(this.router.snapshot.params['id']);
  }

   updateFormation(){
    this.formation = new Formation(this.formationform.value.libelle,this.formationform.value.niveau);
    this.service.update(this.router.snapshot.params['id'],this.formation).subscribe((data: any) => { 
      this.formationform = this.fb.group({
        libelle: [],
        niveau: [],
      });    
      this.alerte = true;
    });
  }

  getCurrentData(id:number){
    this.service.findById(id).subscribe((data: any) => {        
      this.formationform = this.fb.group({
        libelle: [data["libelle"]],
        niveau: [data["niveau"]],
      });
    });
  }

  CloseAlerte(){
    this.alerte = false;
  }
}
