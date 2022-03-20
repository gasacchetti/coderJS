// ANIMACIONES
// TimeOut 5000ms después de que se carga la página
    setTimeout (() => {
        Swal.fire({
            title: '¡Suscribite para recibir nuestras novedades!',
            input: 'text',
            width: 500,
            height: 500,
            padding: '2em',
            background: '#fff url(/images/trees.png)',          
          })
    }, 10000)


$('.title-container')
    .delay("500")
    .fadeOut("2000")
    .fadeIn("2000")

$('h2')
    .delay("2000")
    .animate({
        "font-size": "3rem",
 }, 2000)
    .animate({
        "font-size": "2.5rem",
    }, 2000)

// LA NAVBAR CAMBIE DE BACKGROUND CUANDO SCROLLEO EN EL DOCUMENTO!!

$(document).scroll(() => {
    $(".navbar").css({
        "background-color": "#B0D2DA",
        "transition": "all 2s ease-out",
    } )
})


