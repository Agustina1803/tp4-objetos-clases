const auto={
    color: 'Rojo',
    marca: 'Ford',
    modelo:'Civic',
    anio: 2021,
    encendido: false,

encender: function (encendido){
    let respuesta= prompt(`Desea encender el auto? Si o No`);
    respuesta = respuesta.toLowerCase();
    if(respuesta == 'si'){
        encendido = true;
        document.writeln(`Auto encendido`);
    }else{
        if(respuesta == 'no'){
           document.writeln(`Auto apagado`);
        }
    }
}
}

auto.encender();