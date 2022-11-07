export class Formation{
    id : number;
    libelle : string
    niveau : number

    constructor(pLibelle : string='',pNiv: number =0,pId : number=0){
        this.libelle = pLibelle;
        this.niveau = pNiv;
        this.id = pId;
    }

    static getListNiveau(){
       return [{id:1,libelle:"Premère année"},{id:2,libelle:"Deuxième année"},{id:3,libelle:"Troisième année"},{id:4,libelle:"Quatrième année"},{id:5,libelle:"Cinquième année"}]
    }
}