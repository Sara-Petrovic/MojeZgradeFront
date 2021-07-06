import { Racun } from "./racun";
import { Usluga } from "./usluga";

export class StavkaRacuna {
    redniBroj:number;
    cena:number;
    usluga:Usluga;
    racun:Racun;

    constructor(redniBroj:number, cena:number, usluga:Usluga, racun:Racun){
        this.redniBroj = redniBroj;
        this.cena = cena;
        this.usluga = usluga;
        this.racun = racun;
    }
}
