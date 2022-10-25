const reiniciar = document.getElementById('boton__nuevo__juego');
const botonDesistir = document .getElementById('boton__desistir');

let palabra_seleccionada = '';
let concordancias = [];
let intentos = 8;
let fallos = 0;

function seleccionarPalabra(palabras) {
    let total_palabras =palabras.length - 1;
    let rand = (Math.random() * total_palabras).toFixed(0);
    palabra_seleccionada = palabras[rand].toLowerCase();
    console.log(palabra_seleccionada);
    pintarPalabra(palabra_seleccionada);
}

function chequear(event) {
    comprobarLetra(event.target.textContent);
}

function pintarPalabra(palabra) {
    let str = '';
    let letras = palabra.split('');
    letras.forEach((l ,i) => {
        if (concordancias.includes(l)) {
            str += `<div class="oculto">${l}</div>`;
        } else {
            concordancias[i] = '_';
            str += `<div class="oculto">?</div>`;
        }
    });

    document.getElementById("word").innerHTML = str;
}

function abc() {
    let a = 97;
    let z = 123;
    let letras = document.getElementById("letras");

    for (let i = a; i < z; i++) {
        const char = String.fromCharCode(i);
        
        let letra = document.createElement('div');
        letra.classList.add('abc', 'bg-secondary', 'text-primary', 'manito');
        letra.setAttribute('id', 'letra-' + char);
        letra.textContent = char;
        letra.addEventListener('click', chequear);

        letras.appendChild(letra);
    }
}

function comprobarLetra(char) {
    let letra = document.getElementById('letra-' + char);
    if(palabra_seleccionada.indexOf(char) != -1){
        for (let i = 0; i < palabra_seleccionada.length; i++) {
            if (palabra_seleccionada[i] == char) {
                concordancias[i] = char;
            }
        }

        pintarPalabra(palabra_seleccionada);

        letra.classList.remove("bg-secondary", "text-primary");
        letra.classList.add("bg-primary");
    }else{
        intentos--;
        fallos++;
        letra.classList.toggle("bg-secondary", "text-primary");
        letra.classList.add("bg-error", "text-linght");
        document.getElementById("palo").src = `./img/${fallos}.png`;
    }

    letra.classList.toggle("manito");
    letra.removeEventListener('click', chequear);

    comprobarPalabra();
}

function comprobarPalabra() {
    if (intentos == 0) {
        swal ( "PERDISTE" ,  "Presiona el boton NUEVO JUEGO para volver a iniciar" ,  "error" );
        intentos = 0;
        document.getElementById("palo").src = `./img/${intentos}.png`;
        letra.removeEventListener('click', chequear);
    }else if (concordancias.indexOf("_") == -1){
        swal("HAZ GANADO!", "Presiona el boton NUEVO JUEGO para volver a iniciar", "success");
        // window.location.reload();
    }
}

function nuevoJuego() {
    window.location.reload();
}

function desistir() {
    seccionJuego.style.display = 'none';
    seccionInicio.style.display = 'flex';
    window.location.reload();    
}

reiniciar.addEventListener('click', nuevoJuego);
botonDesistir.addEventListener('click', desistir);

function start() {
    seleccionarPalabra(WORDS);
    abc();
}