const alumnos = [];

function agregarNotas(){
    for (let i=0; i< alumnos.length; i++){
        const alumno = alumnos[i];
        do{
        const nota = parseFloat(prompt(`Ingrese una nota para el alumno/a ${alumno.nombre}: `));
        if (nota >= 1 && nota <= 10) {
            alumno.notas.push(nota);
        } else {
            alert("La nota ingresada debe estar entre 1 y 10");
        }
        }while(confirm(`¿Quiere ingresar otra nota para ${alumno.nombre}?`));
    }
}

function compararNotas(notas) {
    let notaAlta = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > notaAlta) {
            notaAlta = notas[i];
        }
    }
    if (notaAlta >= 9) {
        return "A";
    } else if (notaAlta >= 7) {
        return "B";
    } else if (notaAlta >= 5) {
        return "C";
    } else {
        return "D";
    }
}

do{
    const nombre = prompt('Nombre del alumno/a: ');
    const curso = prompt ('Ingrese el curso del alumno');

    const alumno = {
        nombre: nombre,
        curso: curso,
        notas: []
    };
    alumnos.push(alumno);
}while(confirm(`¿Quiere ingresar otro alumno/a? o Presione cancelar para continuar`));


agregarNotas();

document.writeln(`<table>`);
document.writeln(`<tr><th>Nombre</th><th>Curso</th><th>Notas</th><th>Clasificación</th></tr>`);

for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    const categoria = compararNotas(alumno.notas);

    document.writeln(`<tr>
        <td>${alumno.nombre}</td>
        <td>${alumno.curso}</td>
        <td>${alumno.notas}</td>
        <td>${categoria}</td>
    </tr>`);
}

document.writeln(`</table>`);

