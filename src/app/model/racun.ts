import { StavkaRacuna } from "./stavka-racuna";
import { VlasnikPosebnogDela } from "./vlasnik-posebnog-dela";

export class Racun {

    racunId!:number;
    ukupnaVrednost!:number;
    datumIzdavanja:Date;
    status!:string;
    vlasnikPosebnogDela!:VlasnikPosebnogDela;
    stavke!:StavkaRacuna[];

    constructor(){
        this.datumIzdavanja = new Date();
    }

}
