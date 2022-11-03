import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formationmodule } from '../models/Formationmodule';
import { FormationService } from '../services/formation/FormationService';
import { FormationmoduleService } from '../services/formationmodule/formationmodule.service';
import { ModuleService } from '../services/module/module.service';

@Component({
  selector: 'app-formationmodule-update',
  templateUrl: './formationmodule-update.component.html',
  styleUrls: ['./formationmodule-update.component.css']
})
export class FormationmoduleUpdateComponent implements OnInit {

  alerte = false;
  formationmoduleform : FormGroup = new FormGroup('');
  formationModule = new Formationmodule();
  formations : any[] = [];

  modules : any[] = [];
  constructor(private fb : FormBuilder,private service : FormationmoduleService,private serviceFormation : FormationService,private serviceModule : ModuleService,private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.formationmoduleform = this.fb.group({      
      moduleId : [], 
      formationId: [],
    });

    this.serviceFormation.findAll().subscribe((data: any) => {
      this.formations = data;
    });

    this.serviceModule.findAll().subscribe((data: any) => {
      this.modules = data;
    });
    this.getCurrentData(this.router.snapshot.params['id']);
  }

  CloseAlerte(){
    this.alerte = false;
  }

  updateFormationModule(){
    this.formationModule = new Formationmodule(this.formationmoduleform.value.moduleId,this.formationmoduleform.value.formationId)
    console.log(this.formationModule)
    this.service.update(this.router.snapshot.params['id'],this.formationModule).subscribe((data: any) => {  
      this.formationmoduleform = this.fb.group({      
        moduleId : [], 
        formationId: [],
      });   
      this.alerte = true;
    });
  }

  getCurrentData(id : number){
    this.service.findById(id).subscribe((data: any) => { 
      console.log(data);       
      this.formationmoduleform = this.fb.group({            
        moduleId : [data["moduleId"]], 
        formationId: [data["formationId"]],
      });
    });
  }
}
