export class Formationmodule{

    formationId : number
    moduleId : number
    
    dateDebut: string

    dateFin: string

    creneauHoraireDebut : string

    creneauHoraireFin : string

    periodicite : number

    jourSemaine : number

    constructor(pIdModule: number =0,pIdFormation : number=0,pDateDebut:string='',pDateFin:string='',pCreneauHoraireDebut : string='',pCreneauHoraireFin : string='',pPeriodicite : number=0,pJourSemaine : number=0){
        this.formationId = pIdFormation;
        this.moduleId = pIdModule;
        this.dateDebut = pDateDebut;
        this.dateFin = pDateFin;
        this.creneauHoraireDebut = pCreneauHoraireDebut;
        this.creneauHoraireFin = pCreneauHoraireFin;
        this.periodicite = pPeriodicite;
        this.jourSemaine = pJourSemaine;
    }
}