import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formationmodule } from '../models/Formationmodule';
import { DateFormatService } from '../services/Common/date-format.service';
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

  jourDeSemaine  = [{id:0,jour:"Dimanche"},{id:1,jour:"Lundi"},{id:2,jour:"Mardi"},{id:3,jour:"Mercredi"},{id:4,jour:"Jeudi"},{id:5,jour:"Vendredi"},{id:6,jour:"Samedi"}]
  periodiciteList  = [{id:0,libelle:"Quotidien"},{id:1,libelle:"Hebdomadaire"}]

  constructor(private fb : FormBuilder,private service : FormationmoduleService,private serviceFormation : FormationService,private serviceModule : ModuleService,private router : ActivatedRoute,private dateFormat : DateFormatService) { }

  ngOnInit(): void {
    this.formationmoduleform = this.fb.group({      
      moduleId : [], 
      formationId: [],
      dateDebut :[],
      dateFin: [],
      creneauHoraireDebut:[],
      creneauHoraireFin:[],
      periodicite:[],
      jourSemaine:[],
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
    this.formationModule = new Formationmodule(this.formationmoduleform.value.moduleId,this.formationmoduleform.value.formationId,this.dateFormat.formatToISO8601Date(this.formationmoduleform.value.dateDebut),this.dateFormat.formatToISO8601Date(this.formationmoduleform.value.dateFin),this.formationmoduleform.value.creneauHoraireDebut,this.formationmoduleform.value.creneauHoraireFin,this.formationmoduleform.value.periodicite,this.formationmoduleform.value.jourSemaine)
    console.log(this.formationModule)
    this.service.update(this.router.snapshot.params['id'],this.formationModule).subscribe((data: any) => {  
      this.formationmoduleform = this.fb.group({      
        moduleId : [], 
        formationId: [],
        dateDebut :[],
        dateFin: [],
        creneauHoraireDebut:[],
        creneauHoraireFin:[],
        periodicite:[],
        jourSemaine:[],
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
        dateDebut :[data["dateDebut"]],
        dateFin: [data["dateFin"]],
        creneauHoraireDebut:[data["creneauHoraireDebut"]],
        creneauHoraireFin:[data["creneauHoraireFin"]],
        periodicite:[data["periodicite"]],
        jourSemaine:[data["jourSemaine"]],
      });
    });
  }
}
