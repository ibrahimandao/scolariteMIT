export class Formation{
    id : number;
    libelle : string
    niveau : number

    constructor(pLibelle : string='',pNiv: number =0,pId : number=0){
        this.libelle = pLibelle;
        this.niveau = pNiv;
        this.id = pId;
    }
}