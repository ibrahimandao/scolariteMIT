import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from 'src/app/models/Module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  endpoint = environment.url;   

    constructor(private http: HttpClient) { }
    

    findAll() {
       return this.http.get(this.endpoint + 'Module/all/');
    }

    findById(id : number) {
      return this.http.get(this.endpoint + 'Module/find/' + id +'/');
    }

    add(form : Module){
      return this.http.post(this.endpoint + 'Module/add/',form);
    }

    update(id: number,form : Module){
      return this.http.put(this.endpoint + 'Module/update/'+ id +'/',form);
    }

    delete(id : number){
      return this.http.delete(this.endpoint + 'Module/delete/'+ id +'/');
    }
}
