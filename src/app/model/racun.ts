import { StavkaRacuna } from "./stavka-racuna";
import { User } from "./user";
import { VlasnikPosebnogDela } from "./vlasnik-posebnog-dela";

export class Racun {

    racunId!:number;
    ukupnaVrednost!:number;
    datumIzdavanja:Date;
    status!:string;
    vlasnikPosebnogDela!:VlasnikPosebnogDela;
    upravnik!:User;
    stavke!:StavkaRacuna[];

    constructor(){
        this.datumIzdavanja = new Date();
    }

}
