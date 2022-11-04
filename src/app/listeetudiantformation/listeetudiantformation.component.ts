import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../services/etudiant/etudiant.service';

@Component({
  selector: 'app-listeetudiantformation',
  templateUrl: './listeetudiantformation.component.html',
  styleUrls: ['./listeetudiantformation.component.css']
})
export class ListeetudiantformationComponent implements OnInit {  
  totalRecord:number = 0;
  page : number = 1;
  libelle : string = '';

  etudiants : any = [];
  constructor(private service : EtudiantService,private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.service.findStudentByFormationId(this.router.snapshot.params['id']).subscribe((data: any) => {
      console.log(data);
      this.etudiants = data.etudiants;
      this.libelle = data.libelleFormation;
      this.totalRecord = this.etudiants.lenght;
    });
  }

}
