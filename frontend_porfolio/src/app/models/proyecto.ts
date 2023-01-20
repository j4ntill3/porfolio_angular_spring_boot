export class Proyecto {
    id: number;
    nombreP: String;
    descripcionP: String;
    urlP: String;

    constructor(nombreP: String, descripcionP: String, urlP: String){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.urlP = urlP;
    }
}
