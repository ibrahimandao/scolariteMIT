import { Formation } from "../formation/Formation";

export class Etudiant{
   
    
    name : string;
    email : string;
    phone : string;
    matricule : string;
    city : string;
    firstname : string;

    formation : Formation;

    /**
     *
     */
    constructor(pNom:string ='',pFirstName:string='',pMail:string='',pTel:string='',pMatricule:string='',pCity:string='',pLibelleForm : string='',pNiv:number=0) {        
        this.name = pNom;
        this.email = pMail;
        this.phone = pTel;
        this.matricule = pMatricule;
        this.city = pCity;
        this.firstname = pFirstName;

        this.formation = new Formation(pLibelleForm,pNiv);
    }

    loadFromJson(data : any){
        Object.assign(this,data);
    }

    static loadFromFormGroup(data : any){
        return new Etudiant(data.name,data.firstname,data.email,data.phone,data.matricule,data.city,data.libelle,data.niveau);
    }

}

