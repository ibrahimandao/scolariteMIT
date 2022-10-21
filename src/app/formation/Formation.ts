export class Formation{
    
    libelle : string
    niveau : number

    constructor(pLibelle : string='',pNiv: number =0){
        this.libelle = pLibelle;
        this.niveau = pNiv;
    }
}