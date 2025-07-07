/* clase rectangulo: alto , ancho
    metodos: modificar, mostrar , calcular perimetro y area
 */

class Rectangulo {
    #alto;
    #ancho;

    constructor(alto, ancho){
        this.#alto = alto;
        this.#ancho = ancho;
    }

    get getAlto(){
        return this.#alto
    }

    get getAncho(){
        return this.#ancho
    }

    set setAlto (nuevoAlto){
        this.#alto = nuevoAlto;
    }

    set setAncho(nuevoAncho){
        this.#ancho = nuevoAncho;
    }

    modificar (altoNuevo, anchoNuevo){
        this.setAlto = altoNuevo;
        this.setAncho = anchoNuevo;
    }

    calcularArea(){
        return this.#alto * this.#ancho; 
       
    }

    calcularPerimetro(){
        return 2* (this.#alto + this.#ancho);
    }

    mostrarDatos(){
       alert(`Alto: ${this.#alto} - Ancho: ${this.#ancho} - Area: ${this.calcularArea()} -  Perimetro: ${this.calcularPerimetro()} `);
    
    }

}

const alto = parseFloat(prompt(`Ingrese el alto del rectangulo: `));
const ancho = parseFloat(prompt(`Ingrese el ancho del rectangulo: `));

const rectangulo1 = new Rectangulo(alto, ancho);

rectangulo1.mostrarDatos();


const altoNuevo = parseFloat(prompt(`Ingrese el alto para modificar del rectangulo: `));
const anchoNuevo = parseFloat(prompt(`Ingrese el ancho para modiciar del rectangulo: `));

rectangulo1.modificar(altoNuevo,anchoNuevo);
rectangulo1.mostrarDatos();







