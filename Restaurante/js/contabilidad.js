let ventas = document.getElementById("ventas");
let fecha = document.getElementById("fecha");
let ingresos = document.getElementById("ingresos");
let egresos = document.getElementById("egresos");
let valor = document.getElementById("valor");

function ValidarContabilidad() {
    if (ventas === "" || ingresos === "" || egresos === "" || valor === "") {
        console.log("Todos los campos son obligatorios");
}
    else {
        if (ventas != /[0-9]/) {
            console.log("Las ventas deben ser números")
        }
        if (ingresos != /[0-9]/) {
            console.log("Los ingresos deben ser números")
        }
        if (egresos != /[0-9]/) {
            console.log("Los egresos deben ser números")
        }   
        if (valor != /[0-9]/) {
            console.log("El valor debe ser números")
        }

}}