import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from  'src/environments/environment';
import { Formation } from 'src/app/models/Formation';

@Injectable({
    providedIn: 'root'
  })
  export class FormationService {
    endpoint = environment.url;   

    constructor(private http: HttpClient) { }

    findById(id: number) {
      return this.http.get(this.endpoint + 'Formation/Find/'+ id +'/');
    }

    findAll() {
       return this.http.get(this.endpoint + 'Formation/All/');
    }

    add(form : Formation){
      return this.http.post(this.endpoint + 'Formation/Add/',form);
    }

    update(id: number,form : Formation){
      return this.http.put(this.endpoint + 'Formation/update/'+ id +'/',form);
    }

    delete(id : number){
      return this.http.delete(this.endpoint + 'Formation/delete/'+ id +'/');
    }
  }