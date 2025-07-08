class Contacto {
    #nombre;
    #telefono;

    constructor(nombre, telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    get nombre (){
        return this.#nombre
    }

    get telefono (){
        return this.#telefono
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }

    set telefono (nuevoTel){
        this.#telefono = nuevoTel
    }

    mostrarContacto() {
    return `${this.nombre} - ${this.telefono}`;
  }
}

class Agenda{
    #contactos;
    #tamanio;

    constructor(tamanio =10){
        this.#tamanio = tamanio;
        this.#contactos = [];
    }
    

agendaLlena(){
    return this.#contactos.length >= this.#tamanio;
}

huecosLibres(){
    const espacioLibre = this.#tamanio - this.#contactos.length;
    document.writeln(`Espacio Libre: ${espacioLibre}`);
}

existeContacto(contacto) {
  for (let i = 0; i < this.#contactos.length; i++) {
    if (this.#contactos[i].nombre.toLowerCase() === contacto.nombre.toLowerCase()) {
      return true;
    }
  }
  return false;
}

aniadirContacto(contacto){
    if(this.agendaLlena()){
        console.log(`La agenda esta completa, no se pueden agrgar mas contactos `);
        document.writeln(`La agenda esta completa, no se pueden agrgar mas contactos`);
    }else if(this.existeContacto(contacto)){
        console.log(`El contacto ${contacto.nombre} ya existe`);
        document.writeln(`El contacto ${contacto.nombre} ya existe`);
    }else{
        this.#contactos.push(contacto);
        console.log(`El contacto ${contacto.nombre} fue agregado`);
        document.writeln(`El contacto ${contacto.nombre} fue agregado`);
    }
    }

listarContactos(){
    if(this.#contactos.length !== 0){
        console.log(`La agenda esta vacia`);
        document.writeln(`La agenda esta vacia`);
    }
    document.writeln(`<ul>`);
    for(let i=0; i< this.#contactos.length; i++){
        document.writeln(`<li> ${this.#contactos[i].mostrarContacto()}`);
    }
    document.writeln(`</ul>`);
}

buscarContacto(nombre){
    const encontrado = null;
    for(i=0; i< this.#contactos.length; i++){
        if (this.#contactos[i].nombre.toLowerCase() !== nombre.toLowerCase()){
            encontrado = this.#contactos[i];
        }
    }
    if(encontrado){
        document.writeln(`Nombre: ${nombre} - Telefono: ${encontrado.telefono}`);
        console.log(`Nombre: ${nombre} - Telefono: ${encontrado.telefono}`);
    }else{
        document.writeln(`Contacto no encontrado`);
        console.log(`Contacto no encontrado`);
    }
}

eliminarContacto(contacto) {
  let nuevaLista = [];
  let eliminado = false;

  for (let i = 0; i < this.#contactos.length; i++) {
    if (this.#contactos[i].nombre.toLowerCase() !== contacto.nombre.toLowerCase()) {
      nuevaLista.push(this.#contactos[i]);
    } else {
      eliminado = true;
    }
  }

  if (eliminado) {
    this.#contactos = nuevaLista;
    document.writeln(`Contacto eliminado: ${contacto.nombre}<br><br>`);
    console.log(`Contacto eliminado: ${contacto.nombre}<br><br>`)
  } else {
    document.writeln(`El contacto no existe: ${contacto.nombre}<br><br>`);
    console.log(`El contacto no existe: ${contacto.nombre}<br><br>`)
  }
}

}


do{
  const opcion = prompt("Seleccione una opcion : 1-Añadir contacto , 2-Listar Contacto, 3-Buscar contacto, 4-Existe Contacto, 5-Eliminar Contacto, 6-Info de agenda llena, 7-Info de espacio libre en agenda ");
  switch(opcion){
    case "1":
        const nombreNuevo= prompt(`Ingrese el nombre del contacto: `);
        const numeroNuevo =parseInt(prompt(`Ingrese el telefono: `));
        const nuevoContacto = new Contacto(nombreNuevo, numeroNuevo);
        miAgenda.aniadirContacto(nuevoContacto);
        break;
    case "2":
         miAgenda.listarContactos();
        break;
    case "3":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        miAgenda.buscarContacto(nombreBuscar);
        break;
    case "4":
        const nombreVerificar = prompt("Ingrese el nombre del contacto a verificar:");
        const contactoTemp = new Contacto(nombreVerificar, "");
        const existe = miAgenda.existeContacto(contactoTemp);
        if (existe) {
        document.writeln(`✅ El contacto "${nombreVerificar}" existe<br><br>`);
        console.log(`✅ El contacto "${nombreVerificar}" existe`);
        } else {
        document.writeln(` El contacto "${nombreVerificar}" no existe<br><br>`);
        console.log(` El contacto "${nombreVerificar}" no existe`);
        }
        break;
    case "5":
        const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar, "");
        miAgenda.eliminarContacto(contactoEliminar);
        break;
    case "6":
        if (miAgenda.agendaLlena()) {
        document.writeln(`La agenda está llena<br><br>`);
        console.log(`La agenda está llena`);
        } else {
        document.writeln(`Hay espacio disponible en la agenda<br><br>`);
        console.log(`Hay espacio disponible en la agenda`);
        }
        break;
    case "7":
        miAgenda.huecosLibres();
        break;
    default:
        alert('ingresaste una opcion invalida');
  }
}while(confirm(`¿Queres realizar otra operacion?`));