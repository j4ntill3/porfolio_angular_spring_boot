export class Experiencia {
    id: number;
    nombreE: string;
    puesto: string;
    descripcionE: string;
    imgE: string;
    anioInicio: string;
    anioFin: string;

    constructor(nombreE: string,puesto: string,descripcionE: string,imgE: string,anioInicio: string,anioFin: string){
        this.nombreE = nombreE;
        this.puesto = puesto;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
    }
}
