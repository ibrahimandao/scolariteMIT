import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../etudiant/Etudiant';
import { EtudiantService } from '../services/etudiant/etudiant.service';
import { FormationService } from '../services/formation/FormationService';

@Component({
  selector: 'app-etudiant-update-form',
  templateUrl: './etudiant-update-form.component.html',
  styleUrls: ['./etudiant-update-form.component.css']
})
export class EtudiantUpdateFormComponent implements OnInit {
  alerte = false;
  etudiantform : FormGroup = new FormGroup('');
  etudiant = new Etudiant();
  formations : any[] = [];
  constructor(private fb : FormBuilder,private service : EtudiantService,private serviceFormation : FormationService,private router : ActivatedRoute) { }

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

    this.getCurrentData(this.router.snapshot.params['id']);
  }

  updateEtudiant(){
    console.log(this.etudiantform);
    this.etudiant = Etudiant.loadFromFormGroup(this.etudiantform.value);

    console.log(this.etudiant);
    this.service.update(this.router.snapshot.params['id'],this.etudiant).subscribe((data: any) => {     
      this.alerte = true;
    });
  }

  getCurrentData(id : number){
    this.service.findById(id).subscribe((data: any) => {        
      this.etudiantform = this.fb.group({        
        name : [data["name"]],
        email : [data["email"]],
        phone : [data["phone"]],
        matricule : [data["matricule"]],
        city : [data["city"]],
        firstname : [data["firstname"]], 
        formationId: [data["formationId"]],
      });
    });
  }
}
