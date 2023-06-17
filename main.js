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

//presupuesto


fetch("./data.json")
 .then((response) => response.json())
   .then((data) => {
    const lista= document.getElementById("lista"); 
     data.forEach((producto) => {  
        const lista= document.createElement("li"); 
        li.innerHTML = `
        <h2>${producto.id}</h2>
       <p>${producto.nombre}</p>
      <b>${producto.precio}</b>
     <hr />`;
     lista.append(li)
     });
});

//bienvenidos
    const alerta= document.getElementById("bienvenidos-alert");
    alerta.innerText="Hola a todos bienvenidos a VGdecohome"
    const staffselec= document.getElementById("staffseleccion");
    staffselec.innerText="Elegi con quien quiere ser atendido: \n -Emilio \n -Martina \n -Rocio \n -Nicolas"
    formulario1.addEventListener("submit", elegirstaff);

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
    
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Has finalizado la solicitud, su remodelacion ya fue registrada',
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
console.log("Gracias por visitarnos");
}, 20000);









