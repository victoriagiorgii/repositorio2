let nombre= prompt("Ingresa nombre");
let apellido= prompt("Ingresa apellido");

if(nombre!= "" && apellido!=""){
    let mensaje= " Bienvenido/a " + nombre  +" "+  apellido;
    alert(mensaje);
}else{
    alert("Ingrese nombre y apellido")
}


for(let turno= 1;turno <= 4; turno ++){
 let numero= prompt("Ingrese DNI")
 alert("Su turno es el" + ""+ turno + "el tiempo de espera es...");
}
alert("No hay mas turnos")


let encuentro=("Tiempo de espera para el turno")
function tiempo(a, b ){
   let resultado=a+b;
   console.log("Tiempo" + resultado);
}
tiempo(10,20);

