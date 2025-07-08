class Animal {
    #nombre;
    #edad; 
    
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre (){
        return this.#nombre
    }

    get edad (){
        return this.#edad
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }

    set edad (nuevaEdad){
        this.#edad = nuevaEdad
    }

    emitirSonido(){

    }

}

class Perro extends Animal {
    constructor (nombre, edad){
        super (nombre, edad);
    }

    emitirSonido(){
        document.writeln(`${this.nombre} dice: Guau guau! <br>`);
    }

}

class Gato extends Animal {
    constructor (nombre, edad){
        super (nombre, edad);
    }

    emitirSonido(){
        document.writeln(`${this.nombre} dice: Miau miau!`);
    }

}


const perro = new Perro (`Uma`, 10);
const gato = new Gato (`Tintin`, 5);

perro.emitirSonido();
gato.emitirSonido();
