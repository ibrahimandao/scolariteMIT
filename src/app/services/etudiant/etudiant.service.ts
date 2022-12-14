import { Injectable } from '@angular/core';
import { EtudiantComponent } from '../../etudiant/etudiant.component';
import { Etudiant } from '../../models/Etudiant';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {  
  endpoint = environment.url;
  result : any = [];

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  find(matricule : string){
    return new Observable<Etudiant>((observer)=>{
      return this.http
      .get<Etudiant>(this.endpoint + 'Etudiant/find/' + matricule +'/').subscribe((data: any) => {
        const etudiant = data;
        observer.next(etudiant);
        observer.complete();
      },error =>{
        observer.error(error);
        observer.complete();
      }
      );
    })
  }

  findAll() {
    this.result = this.http.get(this.endpoint + 'Etudiant/all/');

    return this.result;
  }

  findStudentByFormationId(formationId : number) {
    this.result = this.http.get(this.endpoint + 'Etudiant/Formation/'+ formationId +'/list');

    return this.result;
  }

  findById(id : number) {
    return this.http.get(this.endpoint + 'Etudiant/findbyid/'+ id +'/');
  }

  add(etu : Etudiant){
    return this.http.post(this.endpoint + 'Etudiant/add/',etu);
  }

  update(id: number,etu : Etudiant){
    return this.http.put(this.endpoint + 'Etudiant/update/'+ id +'/',etu);
  }
}
