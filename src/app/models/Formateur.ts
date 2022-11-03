export class Formateur{
    
    id : number
    name : String
    email : String
    firstname : String

    constructor(pId : number=0, pName : String='',pEmail : String='',pFirstname : String=''){
      this.id = pId;
      this.name = pName;
      this.email = pEmail;
      this.firstname = pFirstname;
    }

    static loadFromFormGroup(data : any){
      return new Formateur(data.id,data.name,data.email,data.firstname);
  }
}