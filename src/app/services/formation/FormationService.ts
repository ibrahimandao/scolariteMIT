import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from  'src/environments/environment';

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
        //this.result = this.http.get(this.endpoint + 'Formation/All/');

        return this.http.get(this.endpoint + 'Formation/All/');
    }
  }