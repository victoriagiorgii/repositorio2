//clientes
class Staff{
    constructor(id,nombre,apellido,dni,edad){
    this.id=id;
     this.nombre=nombre;
     this.apellido=apellido;
     this.dni=dni;
     this.edad=edad;
    }
}

const staffEmilio= new Staff ("EMILIO","Emilio","Pereyra",35028432,22);
const staffMartina= new Staff ("MARTINA","Martina","Cosar",28021620,26);
const staffRocio= new Staff ("ROCIO","Rocio","Carrizo",31675297,30);
const staffNicolas= new Staff ("NICOLAS","Nicolas","Pedernera",20849275,28);

const arraystaffs=[];

arraystaffs.push(staffEmilio);
arraystaffs.push(staffMartina);
arraystaffs.push(staffRocio);
arraystaffs.push(staffNicolas);

console.log(arraystaffs);

//presupuesto

const presupuesto=[
    {id:1, nombre:("oficina"),precio:20000},
    {id:2, nombre:("jardin"), precio:26000},
    {id:3, nombre:("habitacion"), precio:30000},
    {id:4, nombre:("living"), precio:22500},
    {id:5, nombre:("cocina/comedor"), precio:34500},
];
console.log(presupuesto);




//bienvenidos
function bienvenidos(){
    alert("Bienvenidos a VGdecohome");
    let nombreBuscar= prompt("Ingrese nombre del staff que quiere: \n Emilio \n Martina \n Rocio \n Nicolas \n Ninguno").toUpperCase();
    const staffEncontrado= arraystaffs.find((staff)=>staff.id=== nombreBuscar);
    console.log(staffEncontrado);
    alert("Usted va a ser atendido por:  " + staffEncontrado.nombre + " " + staffEncontrado.apellido + " " + " dni: " + staffEncontrado.dni + " edad:" + staffEncontrado.edad);
    let bienvenida= parseInt(prompt("Ingrese lo que desea remodelar/redecorar: \n 1)Oficina \n 2)Jardin \n 3)Habitacion \n 4)Living \n 5)CocinaComedor \n 6)Salir  "));
    return bienvenida;
}

//ingresar al sitio
function oficina(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    let Oficina= parseInt(prompt("Ingrese numero del espacio deseado seleccionado anteriormente"));
    const encontrados= presupuesto.find(item=> item.id === 1 );
    console.log(encontrados);
} 



function jardin(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    let Oficina= parseInt(prompt("Ingrese numero del espacio deseado seleccionado anteriormente"));
    const encontrados= presupuesto.find(item=> item.id=== 2);
    console.log(encontrados);
   
}

function habitacion(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    let Oficina= parseInt(prompt("Ingrese numero del espacio deseado seleccionado anteriormente"));
    const encontrados= presupuesto.find(item=> item.id=== 3);
    console.log(encontrados);
}

function living(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    let Oficina= parseInt(prompt("Ingrese numero del espacio deseado seleccionado anteriormente"));
    const encontrados= presupuesto.find(item=> item.id=== 4);
    console.log(encontrados);
}

function cocinacomedor(){
    let nombre= prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let dni=parseInt(prompt("Ingrese su dni"));
    let Oficina= parseInt(prompt("Ingrese numero del espacio deseado seleccionado anteriormente"));
    const encontrados= presupuesto.find(item=> item.id=== 5);
    console.log(encontrados);

}

function salir(){
    alert("Gracias por visitar VGdecohome");

}

let bienvenida= bienvenidos();
switch(bienvenida){
    case 1:
        oficina();
        break;
    case 2:
        jardin();
        break;
    case 3:
        habitacion();
        break;
    case 4:
        living();
        break;
    case 5:
       cocinacomedor();
       break;
    case 6:
        salir();
        break;
    default:
    alert("incorrecto, vuelva a intentarlo");
    break;
}
