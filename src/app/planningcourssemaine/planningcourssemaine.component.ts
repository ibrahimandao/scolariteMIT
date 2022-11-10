import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { FormationmoduleComponent } from '../formationmodule/formationmodule.component';
import { DateFormatService } from '../services/Common/date-format.service';
import { FormationmoduleService } from '../services/formationmodule/formationmodule.service';

@Component({
  selector: 'app-planningcourssemaine',
  templateUrl: './planningcourssemaine.component.html',
  styleUrls: ['./planningcourssemaine.component.css']
})
export class PlanningcourssemaineComponent implements OnInit {
  totalRecord:number = 0;
  page : number = 1;
  formationmodules : any = [];

  constructor(private service : FormationmoduleService,private dateformat : DateFormatService) { }

  ngOnInit(): void {

    this.service.findPlaningSemaine().subscribe((data: any) => {
      this.formationmodules = data;
      this.totalRecord = this.formationmodules.lenght;
      localStorage.setItem("planning",JSON.stringify(this.formationmodules));
    });

  }

  MakePDF(){

    if(localStorage.getItem('planning') != null)
    {
      this.formationmodules = JSON.parse(localStorage.getItem('planning') || "")
    }
       
    
    let flux  = "<div class=\"container\"><table class=\"table\">"
    flux = flux + "<thead><tr><th class=\"th-lg w-auto\">Module</th><th class=\"th-lg w-auto\">Formation</th><th class=\"th-lg w-auto\">Niveau</th class=\"th-lg w-auto\"><th class=\"th-lg w-auto\">Du</th><th class=\"th-lg w-auto\">Au</th><th class=\"th-lg w-auto\">Formateur</th></tr></thead><tbody>";
      
    for (var val of this.formationmodules) {
      flux = flux +"<tr><td>"+val.module.descriptif+"</td><td>"+val.formation.libelle+"</td><td>"+val.formation.niveau+"ième année</td><td>"+this.dateformat.formatToISO8601Date(val.dateDebut)+"</td><td>"+this.dateformat.formatToISO8601Date(val.dateFin)+"</td><td>"+" "+val.module.formateur.name+" " +val.module.formateur.firstname+"</td></tr>"
    }
    flux = flux + "</tbody></div></table>";
    let pdf = new jsPDF('l','pt','a4');
    pdf.html(flux,{
      callback : (pdf) =>{
        pdf.save("planning_semaine.pdf");
      }
    })    
  }
}

