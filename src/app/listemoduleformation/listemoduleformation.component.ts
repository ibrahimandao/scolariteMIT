import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../services/module/module.service';

@Component({
  selector: 'app-listemoduleformation',
  templateUrl: './listemoduleformation.component.html',
  styleUrls: ['./listemoduleformation.component.css']
})
export class ListemoduleformationComponent implements OnInit {

  totalRecord:number = 0;
  page : number = 1;
  searchText : any;
  modules : any = [];
  libelle : string = ''
  constructor(private service : ModuleService,private router : ActivatedRoute) { }

  ngOnInit(): void {

    this.service.findModuleFormation(this.router.snapshot.params['id']).subscribe((data: any) => {
      this.modules = data.modules;
      this.libelle = data.libelleFormation;
      this.totalRecord = this.modules.lenght;
    });
  }

}
