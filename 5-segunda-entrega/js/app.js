/* Sección cotizador */


const inputDescripcion = document.getElementById('input-descripcion')
const inputVolumen = document.getElementById('input-volumen')
const inputDistancia = document.getElementById('input-distancia')


let fletes = []

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()


    const descripcion = inputDescripcion.value
    const volumen = inputVolumen.value
    const distancia = inputDistancia.value

    if (descripcion != "" && volumen != "" && distancia !== "") {
        fletes.push({
            descripcion: descripcion,
            volumen: volumen,
            distancia: distancia,
        })

        console.log(fletes)

        console.log(typeof fletes);

        formulario.reset()
    }
})

let fletesEnLS 

if (fletesEnLS) {

    fletes = fletesEnLS
}

console.log(fletes);


// Para que los items que voy cargando se muestren en cards en el html

let contadorItems = 1

formulario.addEventListener(('submit'), () => {

    let contenedorProductos = document.getElementById('fletes')

    let tr = document.createElement('tr')
    

        fletes.forEach((producto) => {
    
    
            tr.className = "linea"
            tr.innerHTML = `

                <tr>
                    <th scope="row">Item ${contadorItems}</th>
                    <td>${producto.descripcion}</td>
                    <td>${producto.volumen}m3</td>
                    <td>${producto.distancia}km</td>
                    <td><button class="btn" id="delete-btn">Eliminar</button></td>
                </tr>
                
                `

            contenedorProductos.appendChild(tr)   
            
            let deleteButton = document.getElementById('delete-btn')

            deleteButton.addEventListener(('click'), (e) =>{
    
                e.target.parentNode.parentNode.remove()
    
            })
    
        })

        contadorItems++


})


const formConfirmar = document.getElementById('form-confirmar')

formConfirmar.addEventListener(('submit'), (e) => {

    e.preventDefault()

    let volumenTotal = fletes.reduce((acumulador, producto) => acumulador + parseInt(producto.volumen), 0)

    console.log(volumenTotal)

    // Uso reduce y calculo la distancia total de los productos a transportar
    let distanciaTotal = fletes.reduce((acumulador, producto) => acumulador + parseInt(producto.distancia), 0)

    console.log(distanciaTotal)
    
    // Calculo un precio en base a un costo por volumen y un costo por distancia

    
    function precio() {
    
        let total = volumenTotal * 2 + distanciaTotal * 5
    
        return total
    }

    // Lo guardo en una variable para poder utilizarlo
    let total = precio()

    console.log(total)
    
    const totalFinal = document.getElementById('total-final')

    totalFinal.innerHTML = `El precio final para el total de los productos ingresados es de <strong>$${total}</strong>.`

})


// BOTÓN DE RESET






// // // Declaro una función que me permita optar por el servicio Premium
// // function premium() {

// //     // El usuario puede decidir qué servicio quiere ingresando A o B
// //     let opcionPremium = (prompt('Ingresá A si querés elegir la opción *PREMIUM* (demora hasta 3 días hábiles), ingresá B si querés el servicio normal (demora hasta 7 días hábiles)')).toLowerCase()

// //     // Si elige a, se le aplica un fee del 50%
// //     if (opcionPremium === 'a') {
    
// //         let totalFinal = total * 1.5

// //         // Muestro el resultado por alert y por consola
// //         alert(`El costo total de tu envío es de $${totalFinal}`)

// //         console.log(`El costo total de tu envío es de $${totalFinal}`)
        
// //         // Si elige b, no se aplica nada
// //     } else if (opcionPremium === 'b') {
    
// //         let totalFinal = total 

// //         alert(`El costo total de tu envío es de $${totalFinal}`)

// //         console.log(`El costo total de tu envío es de $${totalFinal}`)

// //         // Si no elige ni a ni b, aclara que es incorrecto y se llama nuevamente a la función
// //     } else {
// //         alert('La opción que ingresaste no existe, ingresá A o B!')
       
// //         premium()
// //     }  

// // }

// // // Llamo a la función para que se ejecute, si no la llamo, todo lo anterior no ocurre
// // premium()


