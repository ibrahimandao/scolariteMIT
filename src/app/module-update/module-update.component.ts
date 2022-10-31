import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../models/Module';
import { FormateurService } from '../services/fromateur/formateur.service';
import { ModuleService } from '../services/module/module.service';

@Component({
  selector: 'app-module-update',
  templateUrl: './module-update.component.html',
  styleUrls: ['./module-update.component.css']
})
export class ModuleUpdateComponent implements OnInit {

  alerte = false;
  moduleform : FormGroup = new FormGroup('');
  module = new Module();
  formateurs : any[] = [];
  constructor(private fb : FormBuilder,private service : ModuleService,private serviceFormateur : FormateurService,private router : ActivatedRoute) { }

  ngOnInit(): void {
      this.moduleform = this.fb.group({
        descriptif : [], 
        formateurId: [],
      });

      this.serviceFormateur.findAll().subscribe((data: any) => {
        this.formateurs = data;
      });

      this.getCurrentData(this.router.snapshot.params['id']);
  }

  CloseAlerte(){
     this.alerte =false;
  }

  updateModule(){

  }

  getCurrentData(id : number){
    this.service.findById(id).subscribe((data: any) => {       
      this.moduleform = this.fb.group({
        descriptif : [data["descriptif"]], 
        formateurId: [data["formateurId"]],
      });
    });
  }

}
