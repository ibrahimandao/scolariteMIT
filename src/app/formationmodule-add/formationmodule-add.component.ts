import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formationmodule } from '../models/Formationmodule';
import { FormationService } from '../services/formation/FormationService';
import { FormationmoduleService } from '../services/formationmodule/formationmodule.service';
import { ModuleService } from '../services/module/module.service';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

defineFullCalendarElement();

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
  jourDeSemaine  = [{id:0,jour:"Dimanche"},{id:1,jour:"Lundi"},{id:2,jour:"Mardi"},{id:3,jour:"Mercredi"},{id:4,jour:"Jeudi"},{id:5,jour:"Vendredi"},{id:6,jour:"Samedi"}]
  periodiciteList  = [{id:0,libelle:"Quotidien"},{id:1,libelle:"Hebdomadaire"}]

  isOpen = true;
  myDate = Date.now;

  modules : any[] = [];
  constructor(private fb : FormBuilder,private service : FormationmoduleService,private serviceFormation : FormationService,private serviceModule : ModuleService) { }

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
  }

  CloseAlerte(){
    this.alerte = false;
  }

  addFormationModule(){
    this.formationModule = new Formationmodule(this.formationmoduleform.value.moduleId,this.formationmoduleform.value.formationId,this.formationmoduleform.value.dateDebut,this.formationmoduleform.value.dateFin,this.formationmoduleform.value.creneauHoraireDebut,this.formationmoduleform.value.creneauHoraireFin,this.formationmoduleform.value.periodicite,this.formationmoduleform.value.jourSemaine);
    console.log(this.formationModule)
    this.service.add(this.formationModule).subscribe((data: any) => {     
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
}
