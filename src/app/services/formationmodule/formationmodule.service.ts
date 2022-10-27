import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  /*add(form : Module){
    return this.http.post(this.endpoint + 'Module/add/',form);
  }

  update(id: number,form : Module){
    return this.http.put(this.endpoint + 'Module/update/'+ id +'/',form);
  }*/
}
