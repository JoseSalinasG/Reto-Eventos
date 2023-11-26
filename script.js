// Se declara las constantes.
const carrito = document.getElementById('tarjeta_carrito');
const boton1 = document.querySelectorAll('.boton')[0];
const boton2 = document.querySelectorAll('.boton')[1];
const boton3 = document.querySelectorAll('.boton')[2];

//Se escucha los eventos por cada boton + la funcion a ejecutar.
boton1.addEventListener('click', agregarAlCarrito);
boton2.addEventListener('click', agregarAlCarrito);
boton3.addEventListener('click', agregarAlCarrito);

//Se establece la funcion para el procuto
function agregarAlCarrito(evento) {
    const producto = evento.target.parentElement.querySelector('.producto').innerText;
    mostrarNotificacion(`Se agregó al carrito: ${producto }`);
}

// Se establece la funcion para ocultar el carrito despues de un tiempo.
function mostrarNotificacion(mensaje) {
    carrito.textContent = mensaje;
    carrito.classList.remove('carrito_oculto');
    setTimeout(() => {
        carrito.classList.add('carrito_oculto');
    }, 1000);
}
