//clientes
class staff{
    constructor(nombre,apellido,dni,edad){
     this.nombre=nombre;
     this.apellido=apellido;
     this.dni=dni;
     this.edad=edad;
    }
}

const staffEmilio= new staff ("Emilio","Pereyra",35028432,22);
const staffMartina= new staff ("Martina","Cosar",28021620,26);
const staffRocio= new staff ("Rocio","Carrizo",31675297,30);
const staffNicolas= new staff ("Nicolas","Pedernera",20849275,28);

const arraystaffs=[];

arraystaffs.push(staffEmilio);
arraystaffs.push(staffMartina);
arraystaffs.push(staffRocio);
arraystaffs.push(staffNicolas);

console.log(arraystaffs);

//presupuesto

const presupuesto=[
    {id:1, nombre:("Oficina"),precio:20.000},
    {id:2, nombre:("Jardin"), precio:26.000},
    {id:3, nombre:("Habitacion"), precio:30.000},
    {id:4, nombre:("Living"), precio:22.500},
    {id:5, nombre:("Cocina/Comedor"), precio:34.500},
];
console.log(presupuesto);

//bienvenidos
function bienvenidos(){
    alert("Bienvenidos a VGdecohome");
    let staff= parseInt(prompt("Selecciona con que staff va qa querer atenderce: \n 1)Emilio \n 2)Martina \n 3)Rocio \n 4)Nicolas \n 5)Ninguno"));
    let bienvenida= parseInt(prompt("Ingrese lo que desea remodelar/redecorar: \n 1)Oficina \n 2)Jardin \n 3)Habitacion \n 4)Living \n 5)CocinaComedor \n 6)Salir  "));
    return bienvenida;
}

//ingresar al sitio
function Oficina(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    const encontrados= presupuesto.find(item=> item.nombre=== Oficina);
    console.log(encontrados);
} 



function Jardin(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    const encontrados= presupuesto.find(item=> item.nombre=== Jardin);
    console.log(encontrados);
   
}

function Habitacion(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    const encontrados= presupuesto.find(item=> item.nombre=== Habitacion);
    console.log(encontrados);
}

function Living(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    const encontrados= presupuesto.find(item=> item.nombre=== Living);
    console.log(encontrados);
}

function CocinaComedor(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    const encontrados= presupuesto.find(item=> item.nombre=== CocinaComedor);
    console.log(encontrados);

}

function Salir(){
    alert("Gracias por visitar VGdecohome");

}

let bienvenida= bienvenidos();
switch(bienvenida){
    case 1:
        Oficina();
        break;
    case 2:
        Jardin();
        break;
    case 3:
        Habitacion();
        break;
    case 4:
        Living();
        break;
    case 5:
       CocinaComedor();
       break;
    case 6:
        Salir();
        break;
    default:
    alert("incorrecto, vuelva a intentarlo");
    break;
}
