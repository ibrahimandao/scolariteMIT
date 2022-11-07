import { Formation } from "./Formation";

export class Etudiant{
   
    id : number;
    name : string;
    email : string;
    phone : string;
    matricule : string;
    city : string;
    firstname : string;

    formation : Formation;

    formationId : number;

    /**
     *
     */
    constructor(id : number=0,pNom:string ='',pFirstName:string='',pMail:string='',pTel:string='',pMatricule:string='',pCity:string='',pLibelleForm : string='',pNiv:number=0,pFormId:number=0) {        
        this.name = pNom;
        this.email = pMail;
        this.phone = pTel;
        this.matricule = pMatricule;
        this.city = pCity;
        this.firstname = pFirstName;
        this.formationId = pFormId;
        this.id = 0;
     
        this.formation = new Formation(pLibelleForm,pNiv);
    }   

    static loadFromFormGroup(data : any){
        return new Etudiant(data.id,data.name,data.firstname,data.email,data.phone,"MIT",data.city,data.libelle,data.niveau,data.formationId);
    }

}

