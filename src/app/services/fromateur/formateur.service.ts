import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  endpoint = environment.url;   

    constructor(private http: HttpClient) { }

    findById(id: number) {
      return this.http.get(this.endpoint + 'Formateur/findbyid/'+ id +'/');
    }

    findAll() {
       return this.http.get(this.endpoint + 'Formateur/All/');
    }

    add(form : Formateur){
      return this.http.post(this.endpoint + 'Formateur/Add/',form);
    }

    update(id: number,form : Formateur){
      return this.http.put(this.endpoint + 'Formateur/update/'+ id +'/',form);
    }

    delete(id : number){
      return this.http.delete(this.endpoint + 'Formateur/delete/'+ id +'/');
    }
}
