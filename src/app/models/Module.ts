import { Formateur } from "./Formateur";

export class Module{

    id : number
    descriptif : String
    formateur : Formateur
    formateurId : number

    constructor(pId : number=0, pDescriptif : String='', pName : String='',pEmail : String='',pFirstname : String='',pFormateurId : number = 0){
      this.id = pId;
      this.descriptif = pDescriptif;
      this.formateur = new Formateur(0,pName,pEmail,pFirstname);
      this.formateurId = pFormateurId;
    }
}