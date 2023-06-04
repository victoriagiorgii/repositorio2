console.log(document.body);
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

const staffEmilio= new Staff ("emilio","Emilio","Pereyra",35028432,22);
const staffMartina= new Staff ("martina","Martina","Cosar",28021620,26);
const staffRocio= new Staff ("rocio","Rocio","Carrizo",31675297,30);
const staffNicolas= new Staff ("nicolas","Nicolas","Pedernera",20849275,28);

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
    const alerta= document.getElementById("bienvenidos-alert");
    alerta.innerText="Hola a todos bienvenidos a VGdecohome"
    const staffselec= document.getElementById("staffseleccion");
    staffselec.innerText="Elegi con quien quiere ser atendido: \n Emilio \n Martina \n Rocio \n Nicolas"
    const formulario= document.getElementById("formulario");
    formulario.addEventListener("submit", Elegirstaff);

function Elegirstaff(e){
    e.preventDefault();
    //staff
    const staffnombres= document.getElementById("staffnombres").value;
    console.log(staffnombres);
    const staffEncontrado= arraystaffs.find((staff) => staff.id=== staffnombres);
    console.log(staffEncontrado);
    
}


 //registro del cliente y remodelacion
 const alertaremodelacion= document.getElementById("registrate y remodela");
 alertaremodelacion.innerText="Registrese y seleccione que va a remodelar";
 const espaciosremodelar= document.getElementById("espacios");
 espaciosremodelar.innerText= "\n 1)Oficina \n 2)Jardin \n 3)Habitacion \n 4)Living \n 5)CocinaComedor"
 const formulario2= document.getElementById("formulario2");
 formulario2.addEventListener("submit", remodelacion);

 //ingresar al sitio
 function remodelacion(e){
    e.preventDefault();
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const dni= document.getElementById("dni").value;
    const espacios=document.getElementById("espaciosremodelacion").value;

    console.log(espacios);
    console.log(typeof espacios);
    let usuario={
        nombre:nombre,
        apellido:apellido,
        dni:dni,
    };
   localStorage.setItem("usuario", JSON.stringify(usuario));
   const encontrados= presupuesto.find(item=> item.id == espacios);
   console.log(encontrados);
}

const usuarioStorage=document.createElement("usuario");
usuarioStorage.innerText="Bienvenido/a"+ usuarioStorage;












 





