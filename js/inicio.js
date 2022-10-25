const seccionInicio = document.querySelector('.seccion__inicio');
const seccionNuevaPalabra = document.querySelector('.seccion__nueva__palabra');
const seccionJuego = document.querySelector('.seccion__juego');

const botonInicio = document.getElementById("boton__play__game");
const botonAnadirNuevaPalabra = document.getElementById("boton__anadir__palabra");

botonInicio.addEventListener("click", ()=>{
    seccionInicio.style.display = 'none';
    seccionNuevaPalabra.style.display = 'none';
    seccionJuego.style.display = 'block';
    start();
});

botonAnadirNuevaPalabra.addEventListener("click", ()=>{
    seccionInicio.style.display = 'none';
    seccionJuego.style.display = 'none';
    seccionNuevaPalabra.style.display = 'flex';
})