class Libro {
  #ISBN;
  #titulo;
  #autor;
  #numPag;

  constructor(ISBN, titulo, autor, numPag) {
    this.#ISBN = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numPag = numPag;
  }

  get ISBN() {
    return this.#ISBN;
  }

  get titulo() {
    return this.#titulo;
  }

  get autor() {
    return this.#autor;
  }

  get numPag() {
    return this.#numPag;
  }

  set ISBN(nuevoISBN) {
    this.#ISBN = nuevoISBN;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }

  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }

  set numPag(nuevoNumPag) {
    this.#numPag = nuevoNumPag;
  }

  mostraLibro() {
    document.writeln(
      `El libro ${this.#titulo} con ISBN ${this.#ISBN} creado por el autor ${
        this.#autor
      } tiene páginas ${this.#numPag} <br>`
    );
  }
}

const ISBN1 = parseInt(prompt(`Ingrese el numero ISBN (13 digitos) del primer libro: `));
const titulo1 = prompt(`Ingrese el titulo  del primer libro: `);
const  autor1 = prompt(`Ingrese el nombre del autor del primer libro: `);
const numPag1 = parseInt(prompt(`Ingrese el numero de paginas del primer libro: `));

const libro1 = new Libro (ISBN1, titulo1, autor1,numPag1);

const ISBN2 = parseInt(prompt(`Ingrese el numero ISBN (13 digitos) del segundo libro: `));
const titulo2 = prompt(`Ingrese el titulo  del segundo libro: `);
const  autor2 = prompt(`Ingrese el nombre del autor del segundo libro: `);
const numPag2 = parseInt(prompt(`Ingrese el numero de paginas del segundo libro: `));

const libro2 = new Libro (ISBN2, titulo2, autor2,numPag2);

libro1.mostraLibro();
libro2.mostraLibro();

if (numPag1 >= numPag2){
    document.writeln(`El libro ${libro1.titulo} tiene mas paginas que el libro ${libro2.titulo}`);
}else{
     document.writeln(`El libro ${libro2.titulo} tiene mas paginas que el libro ${libro1.titulo}`);
}