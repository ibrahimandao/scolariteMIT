export class Formationmodule{

    FormationId : number
    ModuleId : number

    constructor(pIdModule: number =0,pIdFormation : number=0){
        this.FormationId = pIdFormation;
        this.ModuleId = pIdModule;
    }
}