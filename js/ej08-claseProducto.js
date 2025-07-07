/* clase Producto: codigo, nombre, precio
    metodo: imprimir datos 
 */

const listaProductos = [];

class Producto {
    #codigo;
    #nombre;
    #precio;

    constructor (codigo, nombre, precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get codigo(){
        return this.#codigo;
    }

    get nombre(){
        return this.#nombre;
    }

    get precio(){
        return this.#precio;
    }

    set codigo(nuevoCodigo){
        this.#codigo = nuevoCodigo;
    }

     set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    
     set precio(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }
    
    imprimirDatos (){
        document.writeln(`<tr>
        <td>${this.#codigo}</td>
        <td>${this.#nombre}</td>
        <td>${this.#precio}</td>
        </tr>`);
    }
}

for (let i=1; i <= 3; i++){
    const codigo = parseInt(prompt('Ingrese el codigo del articulo:'));
    const nombre = prompt('Ingrese el nombre del articulo:');
    const precio = parseInt(prompt('Ingrese el precio del articulo:'));
    const producto = new Producto (codigo, nombre,precio);
    listaProductos.push(producto);
}

document.writeln(`<table class='table table-bordered text-center'>`);
document.writeln(`<thead><tr><th>Código</th><th>Nombre</th><th>Precio</th></tr></thead><tbody>`);

for (let i = 0; i < listaProductos.length; i++) {
    listaProductos[i].imprimirDatos();
}

document.writeln(`</tbody></table>`);




