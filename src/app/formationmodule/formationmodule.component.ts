import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateFormatService } from '../services/Common/date-format.service';
import { FormationmoduleService } from '../services/formationmodule/formationmodule.service';

@Component({
  selector: 'app-formationmodule',
  templateUrl: './formationmodule.component.html',
  styleUrls: ['./formationmodule.component.css']
})
export class FormationmoduleComponent implements OnInit {
  totalRecord:number = 0;
  page : number = 1;
  formationmoduleform : FormGroup = new FormGroup('');

  formationmodules : any = [];
  constructor(private service : FormationmoduleService,private fb : FormBuilder,private dateFormat : DateFormatService) { }

  ngOnInit(): void {
    this.formationmoduleform = this.fb.group({ 
      dateDebut :[],
      dateFin: []
    });
   // console.log(this.formationmodules)
    this.service.findAll().subscribe((data: any) => {
      this.formationmodules = data;
      this.totalRecord = this.formationmodules.lenght;
    });
  }


  deleteformationmodule(id : number){
    this.service.delete(id).subscribe(() => {      
    });
  }

  RechercheFormationModule() {
    console.log(this.formationmoduleform.value.dateDebut)
    this.service.findPlaningByDate(this.formationmoduleform.value.dateDebut != null ? this.dateFormat.formatToISO8601Date(this.formationmoduleform.value.dateDebut) : '',this.formationmoduleform.value.dateFin != null ? this.dateFormat.formatToISO8601Date(this.formationmoduleform.value.dateFin) : '').subscribe((data: any) => {
      this.formationmodules = data;
      this.totalRecord = this.formationmodules.lenght;
    });
  }
}
