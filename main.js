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

const staffEmilio= new Staff ("Emilio","Pereyra",35028432,22);
const staffMartina= new Staff ("Martina","Cosar",28021620,26);
const staffRocio= new Staff ("Rocio","Carrizo",31675297,30);
const staffNicolas= new Staff ("Nicolas","Pedernera",20849275,28);

const arraystaffs=[];

arraystaffs.push(staffEmilio);
arraystaffs.push(staffMartina);
arraystaffs.push(staffRocio);
arraystaffs.push(staffNicolas);

console.log(arraystaffs);
//preciosenconsola
const presupuesto=[

    {id:1, nombre:("Oficina"),precio:20000},
    {id:2, nombre:("Jardin"), precio:26000},
    {id:3, nombre:("Habitacion"), precio:30000},
    {id:4, nombre:("Living"), precio:22500},
    {id:5, nombre:("Cocina/Comedor"),precio:34500},
    
]

//bienvenidos
const staffelegir=document.getElementById("staffelegir")
staffelegir.innerText="Elegi con quien quiere ser atendido"
const staffselec= document.getElementById("staffseleccion");
staffselec.innerText="-Emilio \n -Martina \n -Rocio \n -Nicolas"
formulario1.addEventListener("submit", elegirstaff);

//operadores
const staffs=["Emilio","Rocio","Nicolas","Martina"];
const staffs2=staffs;
console.log(staffs);

function elegirstaff(e){
e.preventDefault();
//staff
const staffnombres= document.getElementById("staffnombres").value;
console.log(staffnombres);
const staffEncontrado= arraystaffs.find((staff) => staff.id=== staffnombres);
console.log(staffEncontrado);

}

//eleccion del staff
staffnombres.addEventListener("input", () =>{
const valor=staffnombres.value;

const valorConPrimeraLetraMayuscula=valor.charAt(0).toUpperCase()+ valor.slice(1);

if(valor != valorConPrimeraLetraMayuscula){
staffnombres.value = valorConPrimeraLetraMayuscula;  
}
});


//presupuesto
fetch("./data.json")
.then((response)=> response.json())
.then((data)=>console.log(data));

//fetchpresupuesto

//fetch
const alerta= document.getElementById("bienvenidos-alert");
alerta.innerText="Hola a todos bienvenidos a VGdecohome"
fetch("./data.json")
 .then((response) => response.json())
   .then((data) => {
    const lista= document.getElementById("div1"); 
    data.forEach((producto) => {  
        const div= document.createElement("div"); 
        div.innerHTML = `
        <h4>${producto.id}</h4>
        <h4>${producto.nombre}</h4>
        <h4>${producto.precio}</h4>
        <hr />`;
     lista.append(div)
     });
});



const formulario2= document.getElementById("formulario2");
formulario2.addEventListener("submit", (e)=>{ 
    remodelacion(e)
});


//regristro del cliente
const registrarse= document.getElementById("registrate")
function remodelacion(e){
    e.preventDefault();
    const nombre= document.getElementById("nombres").value;
    const apellido= document.getElementById("apellidos").value;
    const dni= document.getElementById("dnis").value;
    const espacios=document.getElementById("espaciosremodelacion").value;
    localStorage.setItem("espaciosNumero", JSON.parse(espacios));
    console.log(espacios);

    console.log(typeof espacios);
const encontrados= presupuesto.find(item=> item.id == espacios);
console.log(encontrados);

let usuario={
    nombre:nombre,
    apellido:apellido,
    dni:dni,
};
localStorage.setItem("usuarioNombre", JSON.stringify(usuario));
console.log(usuario);




//libreria 
Swal.fire({
   position: 'center',
   icon: 'success',
   title: 'Finalizacion de solicitud y remodelacion!',
   showConfirmButton: false,
   timer: 4000
 })
}
const usuarioStorage= JSON.parse(localStorage.getItem("usuario"));
//Bienvenida al usuario

if(usuarioStorage){
   const saludobienvenida= document.getElementById("saludo");
   saludobienvenida.innerText="Bienvenido/a"+" "+usuarioStorage.nombre + " "+ usuarioStorage.apellido;
}

//despedida por consola

setTimeout(() => {
console.log("Gracias por visitarnos!!!!");
}, 30000);







