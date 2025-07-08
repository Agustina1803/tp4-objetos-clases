class Avion{
    #nombre;
    #capacidad;
    #destino;
    #listaPasajeros;

    constructor(nombre, capacidad, destino){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros = [];
    }

    get nombre (){
        return this.#nombre
    }

    get capacidad (){
        return this.#capacidad;
    }

    get destino (){
        return this.#destino
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }

    set capacidad (nuevaCapacidad){
        this.#capacidad = nuevaCapacidad
    }

    set destino (nuevoDestino){
        this.#destino = nuevoDestino
    }


    abordar(pasajero){
        if (this.#listaPasajeros.length < this.capacidad){
            this.#listaPasajeros.push(pasajero);
            document.writeln(`${pasajero} ha aboradado el avion ${this.nombre} <br>`);
        }else {
            document.writeln(`El avión ${this.#nombre} está lleno. No se puede abordar <br>`);
        }

    }
}


class Aeropuerto {
    #nombreAeropuerto;
    #listaAviones;

    constructor (nombreAeropuerto){
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#listaAviones =[];
    }

    get nombreAeropuerto (){
        return this.#nombreAeropuerto
    }

    set nombreAeropuerto (nuevoNombreAeropuerto){
        this.#nombreAeropuerto = nuevoNombreAeropuerto
    }

    agregarAvion(avion){
      this.#listaAviones.push(avion);
    }

    buscarAvion(nombre){
        for (let i = 0; i < this.#listaAviones.length; i++) {
        if (this.#listaAviones[i].nombre === nombre) {
            document.writeln(`Avión encontrado: ${this.#listaAviones[i].nombre} - Destino: ${this.#listaAviones[i].destino} <br>`);
            return this.#listaAviones[i]
        }
    }
    document.writeln(`No se encontró ningún avión con el nombre "${nombre} <br>`);
    return null;
   }

}


const aeropuerto = new Aeropuerto(`Aeropuerto Internacional`);

const nombre1 = prompt(`Ingrese el nombre del primer avion`);
const capacidad1 =parseInt(prompt(`Ingrese la capacidad del primer  avion`));
const destino1 = prompt(`Ingrese el destino del primer  avion`);

 const avion1 = new Avion(nombre1, capacidad1, destino1);

 const nombre2 = prompt(`Ingrese el nombre del segundo avion`);
const capacidad2 =parseInt(prompt(`Ingrese la capacidad del  segundo avion`));
const destino2 = prompt(`Ingrese el destino del segundo avion`);

 const avion2 = new Avion(nombre2, capacidad2, destino2);

 const nombre3 = prompt(`Ingrese el nombre del tercer avion`);
const capacidad3 =parseInt(prompt(`Ingrese la capacidad del tercer avion`));
const destino3 = prompt(`Ingrese el destino del tercer avion`);

const avion3 = new Avion(nombre3, capacidad3, destino3);

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

const nombreABuscar = prompt ('Ingrese el nombre del avion a bucar')
const avionBuscado = aeropuerto.buscarAvion(nombreABuscar);


if (avionBuscado !== null) {
    for (let i = 0; i < avionBuscado.capacidad; i++) {
        const nombreAbordar = prompt(`Ingrese el nombre del pasajero:`);
        avionBuscado.abordar(nombreAbordar);
    }
}