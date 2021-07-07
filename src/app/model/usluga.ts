export class Usluga {
    uslugaId: number;
    naziv: string;
    cena: number;
    jedinicaMere: string;

    constructor(uslugaId: number, naziv: string, cena: number, jedinicaMere: string) {
        this.uslugaId = uslugaId;
        this.naziv = naziv;
        this.cena = cena;
        this.jedinicaMere = jedinicaMere;
    }
}
