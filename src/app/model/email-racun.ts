import { Racun } from "./racun";

export class EmailRacun {
    racun!: Racun;
    emailPassword!:string;

    constructor(racun:Racun, password:string){
        this.racun = racun;
        this.emailPassword = password;
    }
}
