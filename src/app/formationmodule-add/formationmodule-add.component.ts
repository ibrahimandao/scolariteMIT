import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formationmodule } from '../models/Formationmodule';
import { FormationService } from '../services/formation/FormationService';
import { FormationmoduleService } from '../services/formationmodule/formationmodule.service';
import { ModuleService } from '../services/module/module.service';

@Component({
  selector: 'app-formationmodule-add',
  templateUrl: './formationmodule-add.component.html',
  styleUrls: ['./formationmodule-add.component.css']
})
export class FormationmoduleAddComponent implements OnInit {
  alerte = false;
  formationmoduleform : FormGroup = new FormGroup('');
  formationModule = new Formationmodule();
  formations : any[] = [];

  modules : any[] = [];
  constructor(private fb : FormBuilder,private service : FormationmoduleService,private serviceFormation : FormationService,private serviceModule : ModuleService) { }

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
  }

  CloseAlerte(){
    this.alerte = false;
  }

  addFormationModule(){
    this.formationModule = new Formationmodule(this.formationmoduleform.value.moduleId,this.formationmoduleform.value.formationId);
    console.log(this.formationModule)
    this.service.add(this.formationModule).subscribe((data: any) => {     
      this.formationmoduleform = this.fb.group({      
        moduleId : [], 
        formationId: [],
      });

      this.alerte = true;
    });
  }
}
