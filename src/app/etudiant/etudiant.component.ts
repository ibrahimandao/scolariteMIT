import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { EtudiantService } from '../services/etudiant/etudiant.service';
import { Etudiant } from '../models/Etudiant';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiant : Etudiant = new Etudiant();
  totalRecord:number = 0;
  page : number = 1;

  @ViewChild("content_table") el!: ElementRef;

  searchText : any;

  etudiants : any = [];
  constructor(private service : EtudiantService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((data: Etudiant) => {
      this.etudiants = data;
      this.totalRecord = this.etudiants.lenght;
    });   
   
  }
  
  deleteEtudiant(id : number) {
    
  }

  MakePDF(){
    this.service.findAll().subscribe((data: Etudiant) => {
      this.etudiants = data;
    }); 
    
    let flux  = "<table">
    ";"
    let pdf = new jsPDF('p','pt','a4');
    /*pdf.html(this.el.nativeElement,{
      callback : (pdf) =>{
        pdf.save("Liste etudiants.pdf");
      }
    })*/

    this.etudiants.forEach((element:Etudiant,i:number) => {
      pdf.text(
        element.firstname + " " + element.name+" " +element.email+" " +element.matricule+" " +element.phone+" " +element.formation.libelle+" " +element.formation.niveau+"ième année"
        ,50,50+(i*50))
    });
    pdf.save("Liste etudiants.pdf");
  }
}
