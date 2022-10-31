import { Component, OnInit } from '@angular/core';
import { FormationmoduleService } from '../services/formationmodule/formationmodule.service';

@Component({
  selector: 'app-formationmodule',
  templateUrl: './formationmodule.component.html',
  styleUrls: ['./formationmodule.component.css']
})
export class FormationmoduleComponent implements OnInit {
  //etudiant : Etudiant = new Etudiant();
  totalRecord:number = 0;
  page : number = 1;

  formationmodules : any = [];
  constructor(private service : FormationmoduleService) { }

  ngOnInit(): void {

    this.service.findAll().subscribe((data: any) => {
      this.formationmodules = data;
      this.totalRecord = this.formationmodules.lenght;
    });
  }


  deleteformationmodule(id : number){
    this.service.delete(id).subscribe(() => {      
    });
  }
}
