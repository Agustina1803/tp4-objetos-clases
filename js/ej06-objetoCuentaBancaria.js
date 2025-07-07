const cuenta = {
    titular: 'Alex',
    saldo: 0,

ingresar: function(cantidad){  
    this.saldo = this.saldo + cantidad;
},

extraer: function (cantidadExtraer){
    if (cantidadExtraer <= this.saldo){
        this.saldo = this.saldo - cantidadExtraer;
    }else{
        document.writeln('El saldo de la cuenta es insuficiente');
    }
},

informar: function(){
    document.writeln(`<table class='table table-bordered text-center'><thead><tr><th>Titular</th><th>Saldo</th></tr></thead><tbody>`)
    document.writeln(`<tr><td>${this.titular}</td><td>${this.saldo}</td>`);
    document.writeln(`</tbody></table>`);
}
};

do{
  const opcion = prompt("Seleccione una opcion : 1- Consultar el saldo , 2-Ingresar dinero, 3-Extraer dinero");
  switch(opcion){
    case "1":
        cuenta.informar();
        break;
    case "2":
        const cantidad = parseInt (prompt('Ingrese la cantidad a ingresar: '));
        cuenta.ingresar(cantidad);
        break;
    case "3":
        const cantidadExtraer = parseInt (prompt('Ingrese la cantidad a extraer: '));
        cuenta.extraer(cantidadExtraer);
        break;
    default:
        alert('ingresaste una opcion invalida');
  }
}while(confirm(`¿Queres realizar otra operacion?`));


