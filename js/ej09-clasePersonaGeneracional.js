class Persona {
    #nombre;
    #edad;
    #DNI;
    #sexo;
    #peso;
    #altura;
    #anioNac;

    constructor(nombre, edad, sexo, peso,altura, anioNac){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura =altura
        this.#anioNac = anioNac;
    }
    get nombre (){
        return this.#nombre
    }

    get edad (){
        return this.#edad
    }

    get sexo(){
        return this.#sexo
    }

    get peso(){
        return this.#peso
    }

    get altura(){
        return this.#altura
    }

    get anioNac(){
        return this.#anioNac
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }

    set edad(nuevaEdad){
        this.#edad = nuevaEdad
    }

    set sexo(nuevoSexo){
        this.#sexo = nuevoSexo
    }

    set peso(nuevoPeso){
        this.#peso = nuevoPeso
    }

    set altura(nuevaAltura){
        this.#altura = nuevaAltura
    }

    set anioNac (nuevoAnioNac){
        this.#anioNac = nuevoAnioNac;
    }

    generarDNI(){
     this.#DNI = Math.floor(Math.random() * 90000000) + 10000000;
    }

    mostrarGeneracion(){
        let generacion = '';
        let datos ={}
        if(this.anioNac >= 1994 && this.anioNac <= 2010 ){
            generacion = `Generacion Z`
            datos= {
                marco: `1994-2010`,
                poblacion: `7.800.000`,
                historia: "Expansión masiva de internet",
                rasgo: "😋 Irreverencia", 
            }
        }else if(this.anioNac >= 1981 && this.anioNac <= 1993){
            generacion = `Generacion Y millennials`
            datos= {
                marco: `1981-1993`,
                poblacion: `7.200.000`,
                historia: "Inicio de la digitalización",
                rasgo: "😓 Frustracion", 
            }
            }else if(this.anioNac >= 1969 && this.anioNac <= 1980){
            generacion = `Generacion X`
            datos= {
                marco: `1969-1980`,
                poblacion: `9.300.000`,
                historia: "Crisis del 73 y transición española",
                rasgo: "😎 Obsesión por el éxito", 
            }
            }else if(this.anioNac >= 1949 && this.anioNac <= 1968){
            generacion = `Baby Boom`
            datos= {
                marco: `1949-1968`,
                poblacion: `12.200.000`,
                historia: "Paz y explosión demográfica",
                rasgo: "🤑 Ambición", 
            }
            }else{
            generacion = `Silent Generation - Los niños de la postguerra`
            datos= {
                marco: `1930-1948`,
                poblacion: `6.300.000`,
                historia: "Conflictos bélicos",
                rasgo: "😐 Austeridad", 
            }
    }
    if(generacion){
        document.writeln(`<table class='table table-bordered text-center'>`);
        document.writeln(`<thead><tr><th>Nombre de la Generacion</th><th>Marco Termporal</th><th>Poblacion</th><th>Circunstancia historica</th><th>Rasgo Caracteristicos</th></tr></thead><tbody>`);
        document.writeln(`<tr>
        <td>${generacion}</td>
        <td>${datos.marco}</td>
        <td>${datos.poblacion}</td>
        <td>${datos.historia}</td>
        <td>${datos.rasgo}</td>
        </tr>`);
        document.writeln(`</tbody></table>`);
    }
}

    esMayorDeEdad(){
        if(this.#edad >= 18){
            document.writeln(`${this.nombre} tiene ${this.edad} por lo tanto es mayor de edad`);
        }else{
            document.writeln(`${this.nombre} tiene ${this.edad} por lo tanto es menor de edad`);
        }
    }

    mostrarDatos(){
            document.writeln(`<ul class= 'list-group'>
            <li class='list-group-item'>Nombre:${this.nombre}</li>
            <li class='list-group-item'>Edad: ${this.edad}</li>
            <li class='list-group-item'>DNI: ${this.#DNI}</li>
            <li class='list-group-item'>Sexo: ${this.sexo}</li>
            <li class='list-group-item'>Peso: ${this.peso}</li>
            <li class='list-group-item'>Altura: ${this.altura}</li>
            <li class='list-group-item'>Año de nacimiento: ${this.anioNac}</li>
            </ul>`)

    }


}

const nombre = prompt(`Ingrese el nombre de la persona: `);
const edad = parseInt(prompt(`Ingrese la edad de la persona: `));
const sexo = prompt(`Ingrese el Sexo de la persona Hombre(H) , Mujer (M): `);
const peso = parseFloat(prompt(`Ingrese el peso de la persona: `));
const altura = parseFloat(prompt(`Ingrese el altura de la persona: `));
const anioNac = parseInt(prompt(`Ingrese el año de nacimiento de la persona: `));

const persona = new Persona (nombre,edad, sexo, peso,altura,anioNac);
persona.generarDNI();
persona.mostrarDatos();
persona.esMayorDeEdad();
persona.mostrarGeneracion();

