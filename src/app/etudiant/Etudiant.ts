export class Etudiant{
    
    Name : string;
    Email : string;
    Phone : string;
    Matricule : string;
    City : string;
    Firstname : string;

    /**
     *
     */
    constructor(pNom:string ='',pFirstName:string='',pMail:string='',pTel:string='',pMatricule:string='',pCity:string='') {        
        this.Name = pNom;
        this.Email = pMail;
        this.Phone = pTel;
        this.Matricule = pMatricule;
        this.City = pCity;
        this.Firstname = pFirstName;

    }

    loadFromJson(data : any){
        Object.assign(this,data);
    }

}