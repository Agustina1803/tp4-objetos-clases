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

const avion1 = new Avion(`Aeropuerto Internacional Ezeiza`, 2, `Madrid`);
const avion2 = new Avion(`Internacional Jorge Newbery`, 3, `Lima`);
const avion3 = new Avion(`Internacional de Córdoba`, 1, `Santiago`);

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

const avionBuscado = aeropuerto.buscarAvion(`Internacional Jorge Newbery`);


if (avionBuscado !== null) {
    avionBuscado.abordar("Agustina");
    avionBuscado.abordar("Lucas");
    avionBuscado.abordar("Carla");
    avionBuscado.abordar("Martina"); 
}