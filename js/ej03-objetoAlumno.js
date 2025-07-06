const alumnos = [];

function promedio (notas){
    let suma =0; 
  
    for (let i=0; i< notas.length; i++){
        suma = suma + notas[i];
    }
    return suma / notas.length;
}

do{
    const nombre = prompt('Nombre del alumno/a: ');
    const notas = [];
    do{
        const nota = parseFloat(prompt(`Ingrese una nota para el alumno/a ${nombre}: `));
        if(nota >= 1 && nota <= 10 ){
        notas.push(nota);
        }else{
            alert('La nota igresada debe estar entre 1 y 10 ')
        }
    }while(confirm(`¿Quiere ingresar mas notas para ${nombre}?`));
    
    const alumno = {
        nombre: nombre,
        notas: notas
    };
    alumnos.push(alumno);
}while(confirm(`¿Quiere ingresar otro alumno/a? o Presione cancelar para continuar`));

document.writeln(`<table class='table table-bordered text-center'><thead><tr><th>Alumno</th><th>Notas</th><th>Promedio</th></tr></thead><tbody>`)
for (let i = 0; i < alumnos.length; i++) {
const alumno = alumnos[i];
  document.writeln(`<tr><td>${alumno.nombre}</td><td>${alumno.notas}</td><td>${promedio(alumno.notas)}</td></tr>`);
}
document.writeln(`</tbody></table>`);