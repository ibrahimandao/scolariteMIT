import { Formateur } from "./Formateur";

export class Module{

    id : number
    descriptif : String
    formateur : Formateur
    formateurId : number

    isOneline : boolean

    constructor(pId : number=0, pDescriptif : String='', pName : String='',pEmail : String='',pFirstname : String='',pFormateurId : number = 0,pIsOneline : boolean=false){
      this.id = pId;
      this.descriptif = pDescriptif;
      this.formateur = new Formateur(0,pName,pEmail,pFirstname);
      this.formateurId = pFormateurId;
      this.isOneline = pIsOneline;
    }
}