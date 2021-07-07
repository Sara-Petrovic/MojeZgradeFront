import { Racun } from "./racun";
import { Usluga } from "./usluga";

export class StavkaRacuna {
    redniBroj:number;
    cena:number;
    kolicina:number;
    usluga:Usluga;
    racun:Racun;

    constructor(redniBroj:number, cena:number, kolicina:number, usluga:Usluga, racun:Racun){
        this.redniBroj = redniBroj;
        this.cena = cena;
        this.kolicina = kolicina;
        this.usluga = usluga;
        this.racun = racun;
    }
}
