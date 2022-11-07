import { Component, OnInit } from '@angular/core';
import { Formateur } from '../models/Formateur';
import { FormateurService } from '../services/fromateur/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  formateur : Formateur = new Formateur();
  totalRecord:number = 0;
  page : number = 1;
  searchText : any;

  formateurs : any = [];
  constructor(private service : FormateurService) { }

  ngOnInit(): void {

    this.service.findAll().subscribe((data: any) => {
      this.formateurs = data;
      this.totalRecord = this.formateurs.lenght;
    });
  }

  deleteformateur(id : number){

  }

}
