import { Racun } from "./racun";

export class EmailRacun {
    racun!: Racun;
    emailPassword!: string;
    sifraPlacanja!: string;
    valuta!: string;
    iznos!: string;
    tekuciRacun!: string;
    model!: string;
    pozivNaBroj!: string;

    constructor(racun: Racun,
        password: string,
        sifraPlacanja: string,
        valuta: string,
        iznos: string,
        tekuciRacun: string,
        model: string,
        pozivNaBroj: string) {
        this.racun = racun;
        this.emailPassword = password;
        this.sifraPlacanja = sifraPlacanja;
        this.valuta = valuta;
        this.iznos = iznos;
        this.tekuciRacun = tekuciRacun;
        this.model = model;
        this.pozivNaBroj = pozivNaBroj;
    }
}
