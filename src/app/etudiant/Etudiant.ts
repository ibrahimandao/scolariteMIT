export class Etudiant{
    
    name : string;
    email : string;
    Phone : string;
    matricule : string;
    city : string;
    firstname : string;

    /**
     *
     */
    constructor(pNom:string ='',pFirstName:string='',pMail:string='',pTel:string='',pMatricule:string='',pCity:string='') {        
        this.name = pNom;
        this.email = pMail;
        this.Phone = pTel;
        this.matricule = pMatricule;
        this.city = pCity;
        this.firstname = pFirstName;

    }

    loadFromJson(data : any){
        Object.assign(this,data);
    }

}