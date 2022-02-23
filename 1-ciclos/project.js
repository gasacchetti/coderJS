/* Ejercicio 1
Pedir un nro mediante prompt y sumarle otro en cada repetición, 
realizando una salida por cada resultado*/

/* Solicito un valor */
let numero = Number(prompt("Ingrese un número"))

/* Defino desde, hasta y la actualización */
for(i = 0; i<=10; i++) {

    /* Ejecuta la suma del valor ingresado más i que se va actualizando */
    let resultado = numero + i;

    /* Imprimo por consola */
    console.log(`${numero} + ${i} = ${resultado}`);
    // alert(`Ingresaste el número ${numero}, si le sumamos el número ${i} da como resultado: ${resultado}`) Lo dejo comentado porque es medio denso
}


/* Ejercicio 2
Pedir texto mediante prompt, concatenar un valor en cada repetición
realizando una salida por resultado, hasta que se ingresa "ESC" */

/* Solicito un nombre */
let texto = prompt("Ingresá tu sobrenombre")

while(texto != "ESC") { /* Se va a repetir siempre y cuando el usuario ingrese algo distinto a ESC */
    alert(`Bienvenido al grupo ${texto}!`)

    /* Vuelvo a solicitar un dato y vuelve a evaluar si es distinto a ESC */
    texto =  prompt("Ahora ingresá otro nombre")
}


/* Ejercicio 3
Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad
de veces ingresada */

/* Ingreso el numero de veces que quiero que se repita Hola! */
let numero2 = Number(prompt("Ingresá un número"))


for (j=0; j<= numero2; j++){
    console.log(`Hola ${j}`); /* Le agrego j, para que aparezcan uno abajo del otro */
}

/* // Otra opción sin bucle

let hola = "Hola! ";
let numero3 = Number(prompt("Ingresá un número"))
let holaRepito = hola.repeat(numero2)
console.log(holaRepito) */