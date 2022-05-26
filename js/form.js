var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando mensaje...')

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre <br>');
    }
    
    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido <br>');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu dirección de email');
    }

    error.innerHTML = mensajesError.join(' ');

    return false;
}