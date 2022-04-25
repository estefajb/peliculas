export class Pelicula {
    identificador: number;
    titulo: string;
    sinopsis: string;
    estreno: number;
    imagen: string;
    

    constructor(identificador: number, titulo: string, sinopsis: string, estreno: number, imagen: string){
        this.identificador=identificador;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.estreno=estreno;
        this.imagen=imagen;
    }
}