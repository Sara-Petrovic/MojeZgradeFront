import { Mesto } from "./mesto";
import { User } from "./user";

export class StambenaZajednica {
    stambenaZajednicaId: number;
    ulica: string;
    broj:string;
    mesto:Mesto;
    tekuciRacun:string;
    banka:string;
    pib: string;
    maticniBroj:string;
    upravnik:User;

    constructor(){}

    

}
