/* EJEMPLO SIMULADOR CALCULO DE CUOTAS */

/* El usuario debe ingresar el valor de cada producto a comprar */
let producto1 = Number(prompt("Ingrese el valor del primer producto a comprar"))
let producto2 = Number(prompt("Ingrese el valor del segundo producto a comprar"))
let producto3 = Number(prompt("Ingrese el valor del tercer producto a comprar"))

/* Calculo el total de la compra */
let compra = producto1 + producto2 + producto3

alert(`Su compra total es de $ ${compra}`)

/* El usuario debe seleccionar cantidad de cuotas */
let cuotas = Number(prompt("¿En cuántas cuotas quiere abonar?"))

/* Esta función calcula el valor de cada cuota */
function valorCuota(compra, cuotas){
    let resultado = compra/cuotas;
    return Number(resultado)
}

/* Se muestra en pantalla */
alert(`Su compra total es de $ ${compra}, financiado en ${cuotas} cuotas da un total de $ ${valorCuota(compra, cuotas)} por cuota`)

/* Se muestra por consola */
console.log("El valor de cada cuota es de $" + valorCuota(compra, cuotas))