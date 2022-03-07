/* MODAL BOTÓN LOG IN */

const modalIniciarAbrir = document.getElementById('modal-iniciar-abrir')

modalIniciarAbrir.innerHTML = `

<!-- Button trigger modal -->
<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Iniciar Sesión
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog">
        <form class="modal-content" id="form-login">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Iniciar sesión</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="email1" placeholder="name@example.com">
                    <label for="floatingInput">Email</label>
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword1" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>  
                <br>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Mantener iniciada la sesión</label>
                </div>
            </div>

            <div class="modal-footer">
                <button type="submit" class="btn" data-bs-dismiss="modal">Continuar</button>
            </div>
        </form>
    </div>
</div>
`

// Mensaje de bienvenido LOG IN

const formLogin = document.getElementById('form-login')

const inputEmail = document.getElementById('email1')

formLogin.addEventListener(('submit'), (e) => {

    e.preventDefault()

    const saludo1 = document.getElementById('saludo1')

    saludo1.innerHTML = `¡Bienvenid@ de nuevo ${inputEmail.value}!`

    console.log(typeof inputEmail.value);
})

/* MODAL BOTÓN SIGN UP */

const modalCrearAbrir = document.getElementById('modal-crear-abrir')

modalCrearAbrir.innerHTML = `

<!-- Button trigger modal -->
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Crear Cuenta
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content" id="form-sign">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel2">Crear cuenta</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput2" placeholder="Nombre">
                <label for="floatingInput">Nombre</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput3" placeholder="Apellido">
                <label for="floatingInput">Apellido</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput4" placeholder="N° Teléfono">
                <label for="floatingInput">N° Teléfono</label>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput5" placeholder="name@example.com">
                <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword2" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>  
        </div>
      <div class="modal-footer">
        <button type="submit" class="btn " data-bs-dismiss="modal">Continuar</button>
      </div>
    </form>
  </div>
</div>
`
// Sección mensaje de bienvenida SIGN UP

const formSign = document.getElementById('form-sign')

const inputNombre = document.getElementById('floatingInput2')

const inputApellido = document.getElementById('floatingInput3')

formSign.addEventListener(('submit'), (e) => {

    e.preventDefault()

    const saludo = document.getElementById('saludo')

    saludo.innerHTML = `¡Bienvenid@ a tu sesión ${inputNombre.value} ${inputApellido.value}!`
})


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

        localStorage.setItem('fletes', JSON.stringify(fletes))

        console.log(typeof fletes);

        formulario.reset()
    }
})

let fletesEnLS = JSON.parse(localStorage.getItem('fletes'))

if (fletesEnLS) {

    fletes = fletesEnLS
}

console.log(fletes);


// Para que los items que voy cargando se muestren en cards en el html

formulario.addEventListener(('submit'), () => {

    let contenedorProductos = document.getElementById('fletes')

    let div = document.createElement('div')
    

        fletes.forEach((producto) => {
    
    
            div.className = "card"
            div.style = "width: 18rem"
            div.innerHTML = `
                <div class="card-body">
                <h5 class="card-title">${producto.descripcion}: </h5>
                <p class="card-text">Volumen: ${producto.volumen}m3. </p>
                <p class="card-text">Distancia: ${producto.distancia}km.</p>
                </div>
                `

            contenedorProductos.appendChild(div)    
    
        })

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






 


