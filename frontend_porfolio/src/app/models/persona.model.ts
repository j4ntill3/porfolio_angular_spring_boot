export class persona{
    id: number;
    nombre: string;
    apellido: string;
    perfil: string;
    descripcion: string;
    img: string;
    imgP: string;


    constructor(nombre: string,apellido: string,perfil: string,descripcion: string ,img: string, imgP: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.perfil = perfil;
        this.descripcion =descripcion;
        this.img = img;
        this.imgP = imgP;
    }
}