let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
preguntarNombre = prompt ("Por favor, ingresa tu nombre");
datosPersona.nombre=preguntarNombre;

let preguntaEdad = prompt ("Por favor, ingresa el anio que naciste");
preguntaEdad = 2021 - preguntaEdad;
datosPersona.edad = preguntaEdad;

let preguntaCiudad = prompt ("Por favor, ingresa tu ciudad");
datosPersona.ciudad = preguntaCiudad;

let confirmacion = confirm ("Te interesa JavaScrip?");
if(confirmacion === true){
  confirmacion = "Si"
}else{
  confirmacion = "No"
}
datosPersona.interesPorJs = confirmacion;

console.log(datosPersona);
}



function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  let nombres = datosPersona.nombre
  document.querySelector("#nombre").innerHTML = nombres;

  let edades = datosPersona.edad
  document.querySelector("#edad").innerHTML = edades;

  let ciudades = datosPersona.ciudad;
  document.querySelector("#ciudad").innerHTML = ciudades;

  let intereses = datosPersona.interesPorJs
  document.querySelector("#javascript").innerHTML = intereses;
}



const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  let filasDiv = document.querySelector('#fila');
  listado.forEach(e =>{
    filasDiv.innerHTML += `<div class = "caja"><img src = "${e.imgUrl}" alt = "lenguajes">
    <h2>Lenguaje: ${e.lenguajes}</h2><p>Bimestre: ${e.bimestre}</p></div>`
  });

}


function mostrarYOcultarDescripcionCompleta() {
  let sobreMi = document.querySelector(".sobre-mi");
  if(sobreMi.classList.contains("sobre-mi")) {
    sobreMi.classList.toggle("sobre-mi-completo")
    
  }
}
