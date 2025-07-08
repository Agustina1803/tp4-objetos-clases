class Persona {
    #nombre;
    #edad;
    #profesion

    constructor(nombre, edad, profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }

    get nombre(){
        return this.#nombre
    }

    get edad (){
        return this.#edad
    }

    get profesion(){
        return this.#profesion
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }
    
    set edad (nuevaEdad){
        this.#edad = nuevaEdad
    }

    set profesion (nuevaProfesion){
        this.#profesion = nuevaProfesion
    }

    saludar(){
        document.writeln(`Buen dia ${this.nombre} <br>`);
    }

    despedirse(){
        document.writeln(`Hasta luego ${this.nombre} <br>`);
    }
}

const nombre1 = prompt(`Igrese el nombre de la primera persona: `);
const edad1 = parseInt(prompt(`Ingrese la edad de la primera persona: `));
const profesion1 = prompt(`Ingrese la profesion de la primera persona`);

const persona1 = new Persona (nombre1, edad1, profesion1);

const nombre2 = prompt(`Igrese el nombre de la segunda persona: `);
const edad2 = parseInt(prompt(`Ingrese la edad de la segunda persona: `));
const profesion2 = prompt(`Ingrese la profesion de la segunda persona`);

const persona2 = new Persona (nombre2, edad2, profesion2);

persona1.saludar(nombre1);
persona2.saludar(nombre2);

persona1.despedirse(nombre1);
persona2.despedirse(nombre2);
