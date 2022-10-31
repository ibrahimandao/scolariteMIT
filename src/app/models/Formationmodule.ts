export class Formationmodule{

    formationId : number
    moduleId : number

    constructor(pIdModule: number =0,pIdFormation : number=0){
        this.formationId = pIdFormation;
        this.moduleId = pIdModule;
    }
}