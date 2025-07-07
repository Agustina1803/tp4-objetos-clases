/* clase Producto: codigo, nombre, precio
    metodo: imprimir datos 
 */

const productos = [];

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
        document.writeln(`<table class='table table-bordered text-center'>`);
        document.writeln(`<thead><tr><th>Codigo</th><th>Nombre</th><th>Precio</th></tr></thead><tbody>`);
        for (let i = 0; i< productos.length; i++){
               document.writeln(`<tr>
                <td>${this.#codigo}</td>
                <td>${this.#nombre}</td>
                <td>${this.#precio}</td>
               </tr>`);
        }
        document.writeln(`</tbody></table>`);
    }
}

