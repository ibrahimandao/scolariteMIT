import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {  
    endpoint = environment.url;
    
    // Http Headers
    
  
    constructor(private http: HttpClient,private router : Router) { }

    connexion(login : string, password : string){

        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'login': login,
              'password': password
            }),
          };
        return this.http.get(this.endpoint + 'Utilisateur/connexion',httpOptions);
    }

    IsLogged() {
        return localStorage.getItem("token") != null;
    }

    GetToken() {
      return localStorage.getItem("token") || '';
    }

    Logout() {
        alert('Your session expired')
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}