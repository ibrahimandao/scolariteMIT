import { Component, OnInit } from '@angular/core';
import { Module } from '../models/Module';
import { ModuleService } from '../services/module/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  totalRecord:number = 0;
  page : number = 1;
  searchText : any;

  modules : any = [];
  constructor(private service : ModuleService) { }

  ngOnInit(): void {

    this.service.findAll().subscribe((data: any) => {
      this.modules = data;
      this.totalRecord = this.modules.lenght;
    });
  }

  deletemodule(id : number){
    this.service.delete(id).subscribe(() => {
    });
  }
}
