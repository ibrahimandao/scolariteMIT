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
      localStorage.setItem('etudiants',JSON.stringify(this.etudiants));
    });     
   
  }
  
  deleteEtudiant(id : number) {
    
  }

  MakePDF(){
    let pdf = new jsPDF('p','pt','a2');
    if(localStorage.getItem('etudiants') != null)
    {
      this.etudiants = JSON.parse(localStorage.getItem('etudiants') || "")
    }
       
    
    let flux  = "<div class=\"container\"><table class=\"table\">"
    flux = flux + "<thead><tr><th>Nom</th><th>Prénom</th><th>Email</th><th>Ville</th><th>Matricule</th><th>Téléphone</th><th>Formation</th></tr></thead><tbody>";

    for (var val of this.etudiants) {
      flux = flux +"<tr><td>"+val.name+"</td><td>"+val.firstname+"</td><td>"+val.email+"</td><td>"+val.city+"</td><td>"+val.matricule+"</td><td>"+" "+val.phone+"</td><td>"+val.formation.libelle+"</td></tr>"
    }
    flux = flux + "</tbody></div></table>";
    
    pdf.html(flux,{
      callback : (pdf) =>{
        pdf.save("Liste etudiants.pdf");
      }
    })

    /*this.etudiants.forEach((element:Etudiant,i:number) => {
      pdf.text(
        element.firstname + " " + element.name+" " +element.email+" " +element.matricule+" " +element.phone+" " +element.formation.libelle+" " +element.formation.niveau+"ième année"
        ,50,50+(i*50))
    });
    pdf.save("Liste etudiants.pdf");*/
  }
}
