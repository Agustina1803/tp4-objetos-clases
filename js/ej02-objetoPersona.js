const persona= {
    nombre: prompt('Ingresa el nombre: '),
    edad: parseInt(prompt('Ingrese la edad: ')),
    hobbies: [],
}


function agregarHobbie(){
    let hobbies;
    do{
        hobbies = prompt('Ingrese un hobbie: ');
        persona.hobbies.push(hobbies);
    }while(confirm(`¿Quiere ingresar otro hobbie? o Presione cancelar para continuar`))
}

function mostrarPersona(){
    const coma = ',';
document.writeln(`Hobbies de ${persona.nombre}:`);
for (let i=0; i< persona.hobbies.length; i++){
    document.writeln(`${persona.hobbies[i]} ${coma}`);
}
}

agregarHobbie();
mostrarPersona();


