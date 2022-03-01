/* // Pido nombre y password por prompt
const nombre = prompt('Ingresá tu nombre')

let password = parseInt(prompt('Ingresá tu contraseña numérica'))

// Comparo el password ingresado, si es distinto de 12345, no puede ingresar sesión y vuelve a pedir el pass
while ( password != 12345) {

    alert('Contraseña inválida, probá de nuevo! Pssst, probá con 12345 ;)')
    password = parseInt(prompt('Ingresá tu contraseña'))
}

// Si es correcto, puedo iniciar sesión 
alert(`¡Bienvenido a tu sesión ${nombre}!`) */

// Construyo objetos que siempre van a tener la misma estructura
class Flete{
    constructor(volumen, distancia) {
        this.volumen = volumen
        this.distancia = distancia
    }
}

// Armo el array de fletes, con datos que ingresa el usuario por prompt
const fletes = [
    new Flete(parseInt(prompt('Ingresá el volumen del primer producto a transportar en m3')), parseInt(prompt('Ingresá la distancia en km'))),
    new Flete(parseInt(prompt('Ingresá el volumen del segundo producto a transportar en m3')), parseInt(prompt('Ingresá la distancia en km'))),
    new Flete(parseInt(prompt('Ingresá el volumen del tercer producto a transportar en m3')), parseInt(prompt('Ingresá la distancia en km')))
]
 
console.log(fletes)

// Uso reduce y calculo el volumen total de los productos a transportar
let volumenTotal = fletes.reduce((acumulador, producto) => acumulador + producto.volumen, 0)

console.log(volumenTotal)

// Uso reduce y calculo la distancia total de los productos a transportar
let distanciaTotal = fletes.reduce((acumulador, producto) => acumulador + producto.distancia, 0)

console.log(distanciaTotal)

/* // Calculo un precio en base a un costo por volumen y un costo por distancia
let precioVolumen

function precio() {

    let total = volumenTotal * 2 + distanciaTotal * 5

    return total
}

// Lo guardo en una variable para poder utilizarlo
let total = precio() */

/* console.log(total) */

// Declaro una función que me permita optar por el servicio Premium
function premium() {

    // El usuario puede decidir qué servicio quiere ingresando A o B
    let opcionPremium = (prompt('Ingresá A si querés elegir la opción *PREMIUM* (demora hasta 3 días hábiles), ingresá B si querés el servicio normal (demora hasta 7 días hábiles)')).toLowerCase()

    // Si elige a, se le aplica un fee del 50%
    if (opcionPremium === 'a') {
    
        let totalFinal = (volumenTotal * 2 + distanciaTotal * 5) * 1.5

        // Muestro el resultado por alert y por consola
        alert(`El costo total de tu envío premium es de $${totalFinal}`)

        console.log(`El costo total de tu envío premium es de $${totalFinal}`)
        
        // Si elige b, no se aplica nada
    } else if (opcionPremium === 'b') {
    
        let total = volumenTotal * 2 + distanciaTotal * 5

        alert(`El costo total de tu envío es de $${total}`)

        console.log(`El costo total de tu envío es de $${total}`)

        // Si no elige ni a ni b, aclara que es incorrecto y se llama nuevamente a la función
    } else {
        alert('La opción que ingresaste no existe, ingresá A o B!')
       
/*         premium() */
    }  

}

// Llamo a la función para que se ejecute, si no la llamo, todo lo anterior no ocurre
premium()





