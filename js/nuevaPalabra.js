const inputText = document.getElementById("nueva__palabra__input");

const botonCancelar = document.getElementById("boton__cancelar");
const botonGuardarYempezar = document.getElementById("boton__guardar__palabra");

botonGuardarYempezar.addEventListener("click", ()=>{
    let soloLetras = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    let nuevaPalabra = inputText.value.toUpperCase();
    if ( nuevaPalabra == '') {
        swal ( "Oops" ,  "Agregue alguna palabra" ,  "error" );

    }else if(nuevaPalabra.match(soloLetras)==null){
        swal ( "Oops" ,  "No se Admiten Numeros o Espacios!" ,  "error" );
    }else{
        WORDS.push(nuevaPalabra);
        nuevaPalabra = '';
        swal("Nueva Palabra Agregada!", "Da en Ok para continuar", "success");
        seccionNuevaPalabra.style.display = 'none';
        seccionJuego.style.display = 'block';
        start();
    }
})

botonCancelar.addEventListener("click", ()=>{
    seccionInicio.style.display = 'flex';
    seccionJuego.style.display = 'none';
    seccionNuevaPalabra.style.display = 'none';
    inputText.value = '';
});