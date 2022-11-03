import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formationmodule } from 'src/app/models/Formationmodule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationmoduleService {
  endpoint = environment.url;   

  constructor(private http: HttpClient) { }
  

  findAll() {
     return this.http.get(this.endpoint + 'FormationModule/all');
  }

  findById(id: number) {
    return this.http.get(this.endpoint + 'FormationModule/find/'+ id +'/');
 }

  add(form : Formationmodule){
    return this.http.post(this.endpoint + 'FormationModule/add/',form);
  }

  update(id: number,form : Formationmodule){
    return this.http.put(this.endpoint + 'FormationModule/update/'+ id +'/',form);
  }

  delete(id : number){
    return this.http.delete(this.endpoint + 'FormationModule/delete/'+ id +'/');
  }
}
