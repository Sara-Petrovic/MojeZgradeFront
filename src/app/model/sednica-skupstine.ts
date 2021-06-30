import { StambenaZajednica } from "./stambena-zajednica";
import { VlasnikPosebnogDela } from "./vlasnik-posebnog-dela";

export class SednicaSkupstine {
    sednicaSkupstineId: number;
    datumOdrzavanja: Date;
    brojPrisutnih: number;
    dnevniRed: string;
    stambenaZajednica: StambenaZajednica;
    vlasnici: VlasnikPosebnogDela[];
}
