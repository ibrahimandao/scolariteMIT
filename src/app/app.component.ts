import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  
  title = 'Site scolarité de MIT';
  displayMenuEtudiant = false;
  displayMenuFormation = false;
  displayMenuFormateur = false;
  displayMenuPlanning = false;
  displayMenuModule = false;
  currentProfil : any ;

  constructor(private service : AuthenticationService,private route : Router){

  }
  ngDoCheck(): void {
    if(this.route.url == '/login' || this.route.url == ''){
      this.displayMenuEtudiant = false;
      this.displayMenuFormation = false;
      this.displayMenuFormateur = false;
      this.displayMenuPlanning = false;
      this.displayMenuModule = false;
    }
    else
     this.displayMenu();
  }


  ngOnInit(): void {


  }

  displayMenu(){
    let _token = this.service.GetToken();
    if(_token != null){
      this.currentProfil = (JSON.parse(_token)).profil.code;
      this.displayMenuEtudiant = this.currentProfil == "Etudiant" || this.currentProfil == "ADMIN";
      this.displayMenuFormation = this.currentProfil == "Formation" || this.currentProfil == "ADMIN";
      this.displayMenuFormateur = this.currentProfil == "Formateur" || this.currentProfil == "ADMIN";
      this.displayMenuPlanning = this.currentProfil == "Planning" || this.currentProfil == "ADMIN";
      this.displayMenuModule = this.currentProfil == "Planning" || this.currentProfil == "ADMIN";
    }
    
  }

}
