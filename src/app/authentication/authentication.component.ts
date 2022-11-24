import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authentificationform : FormGroup = new FormGroup('');
  dataResult : any;
  constructor(private fb : FormBuilder,private service : AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.authentificationform = this.fb.group({
      login : ['',Validators.required],
      password : ['',Validators.required],
    });
  }

  authentifierUser(){
    if(this.authentificationform.valid){
      this.service.connexion(this.authentificationform.value.login,this.authentificationform.value.password).subscribe(data =>{
         this.dataResult = data;
         if(this.dataResult != null){
             localStorage.setItem('token',JSON.stringify(this.dataResult))
             //localStorage.setItem('tokenRefresh',this.dataResult.refreshToken)

             this.router.navigateByUrl("/Etudiant")
         }
         else{
          alert("Login failed!")
         }
      })
    }
  }
}
