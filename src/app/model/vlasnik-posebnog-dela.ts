import { JedinicaMere } from "./jedinica-mere";
import { SednicaSkupstine } from "./sednica-skupstine";
import { StambenaZajednica } from "./stambena-zajednica";

export class VlasnikPosebnogDela {
    vlasnikId: number;
    ime: string;
    prezime:string;
    brojPosebnogDela:string;
    velicinaPosebnogDela:number;
    mernaJedinica:JedinicaMere;
    kontaktVlasnika: string;
    stambenaZajednica:StambenaZajednica;

    constructor(){}

}
