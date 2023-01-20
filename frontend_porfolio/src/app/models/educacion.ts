export class Educacion {
    id: number;
    nombreE: string;
    descripcionE: string;
    img: string;
    anioInicio: string;
    anioFin: string;
    carrera: string;

    constructor(nombreE: string, descripcionE: string, img: string, anioInicio: string, anioFin: string,
        carrera: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img = img;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.carrera = carrera;
    }

    getId (){
        return this.id;
    }
}
