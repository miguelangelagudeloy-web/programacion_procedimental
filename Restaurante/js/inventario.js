let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let cantidad = document.getElementById("cantidad");
let marca = document.getElementById("marca");

function ValidarInventario() {
    if (codigo === "" || nombre === "" || cantidad === "" || marca === "") {
        console.log("Todos los campos son obligatorios");
    }
    else {
        if (codigo != /[0-9]/) {
            console.log("El código debe ser números")
        }   
        if (cantidad != /[0-9]/) {
            console.log("La cantidad debe ser números")
        }
        if (nombre != /[a-zA-Z]/) { 
            console.log("El nombre debe contener solo letras")
        }
        if (marca != /[a-zA-Z]/) { 
            console.log("La marca debe contener solo letras")
        }
    }
}