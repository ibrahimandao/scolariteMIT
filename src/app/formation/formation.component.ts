import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation/FormationService';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations : any = []
  constructor(private service : FormationService) { }

  ngOnInit(): void {

    this.service.findAll().subscribe((data: any) => {
      this.formations = data;
    });

    
  }

  deleteFormation(id : number) {
    this.service.delete(id).subscribe(() => {
    });
  }


  updateFormation(id : number) {
    
  }
}
