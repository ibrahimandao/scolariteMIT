import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Module } from '../models/Module';
import { FormateurService } from '../services/fromateur/formateur.service';
import { ModuleService } from '../services/module/module.service';

@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.css']
})
export class ModuleAddComponent implements OnInit {
  alerte = false;
  moduleform : FormGroup = new FormGroup('');
  module = new Module();
  formateurs : any[] = [];
  constructor(private fb : FormBuilder,private service : ModuleService,private serviceFormateur : FormateurService) { }

  ngOnInit(): void {
    this.moduleform = this.fb.group({
      descriptif : [], 
      formateurId: [],
      isOneline:[]
    });

    this.serviceFormateur.findAll().subscribe((data: any) => {
      this.formateurs = data;
    });
  }

  addModule(){
    this.module = new Module(0,this.moduleform.value.descriptif,'test','test','test',this.moduleform.value.formateurId,this.moduleform.value.isOneline)

    this.service.add(this.module).subscribe((data: any) => {     
      this.moduleform = this.fb.group({
        descriptif : [], 
        formateurId: [],
        isOneline:[]
      });

      this.alerte = true;
    });
  }

  CloseAlerte(){
    this.alerte = false;
  }
}
