console.log("Hola mundo");

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let numero_documento = document.getElementById("numero_documento").value;
let tipo_documento = document.getElementById("tipo_documento").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let cargo = document.getElementById("cargo").value;
let contrasena = document.getElementById("contrasena").value;
let genero = document.getElementById("genero").value;

function ValidarResgistro() {
  if (nombre === "" || apellido === "" || numero_documento === "" || tipo_documento === "" || telefono === "" || correo === "" || cargo === "" || contrasena === "" || genero === ""){
console.log("Todos los campos son obligatorios" )
}
else {
    if (nombre != /[a-zA-Z]/ && apellido != /[a-zA-Z]/) {
        console.log("El nombre y el apellido no pueden contener números")
    }
    if (numero_documento != /[0-9]/) {
        console.log("El número de documento no puede contener letras")
    }
    if (telefono.length >= 10) {
                console.log("El número de teléfono debe tener al menos 10 dígitos")
    }
    if (correo != /[@]/) {
        console.log("El correo electrónico debe contener un @")
    }
    if (cargo != /[a-zA-Z]/) {
        console.log("El cargo no puede contener números")
    }
    if (contrasena.length < 8) {
        console.log("La contraseña debe tener al menos 8 caracteres")
    }
}
    
}














