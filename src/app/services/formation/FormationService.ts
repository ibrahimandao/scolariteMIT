import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from  'src/environments/environment';
import { Formation } from 'src/app/formation/Formation';

@Injectable({
    providedIn: 'root'
  })
  export class FormationService {
    endpoint = environment.url;
    result : any = [];
    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        }),
    };

    constructor(private http: HttpClient) { }

    findAll() {
       return this.http.get(this.endpoint + 'Formation/All/');
    }

    add(form : Formation){
      return this.http.post(this.endpoint + 'Formation/Add/',form);
    }

    delete(id : number){
      return this.http.delete(this.endpoint + 'Formation/delete/'+ id +'/');
    }
  }