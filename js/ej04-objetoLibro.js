const libros= [];

function filtrarGenero(libros, generoBuscado){
    return libros.filter(libro => libro.genero.toLowerCase() === generoBuscado.toLowerCase());
}

do{
    const titulo = prompt('Titulo: ');
    const anio = parseInt(prompt('Añio: '));
    const autor = prompt('Autor: ');
    const genero = prompt('Genero: ');

    const libro ={
        titulo: titulo,
        anio: anio,
        autor: autor,
        genero: genero.toLowerCase()
    };

    libros.push(libro);
}while(confirm('¿Quieres ingresar otro libro y genero?'));

const generoBuscado = prompt('Ingrese un genero a buscar: ');

const filtro = filtrarGenero(libros, generoBuscado);

document.writeln(`<h2>Libros del genero: ${generoBuscado} </h2>`)
if(filtro.length> 0 ){
document.writeln(`<ul>`);
for(let i=0; i< filtro.length; i++){
    const libro = filtro[i];
document.writeln(`<li>${libro.titulo} por ${libro.autor} y ${libro.anio}</li>`);
}
document.writeln(`</ul>`);
}else{
    document.writeln(`No se encontro el libro del genero ${generoBuscado}`)
   
}
