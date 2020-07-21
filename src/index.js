
import validator from './validator.js';


const btnValidar = document.getElementById('btnValidar');
const cifrado = document.getElementById('cifrado');
const validacion = document.getElementById('validacion');
const mostrarVal = document.getElementById('contenedorVal');




btnValidar.addEventListener('click', function(){
    var numTarjeta = document.getElementById('numTarjeta').value;
    if(numTarjeta === ''|| numTarjeta=== null)
    {
        alert("Por favor Ingrese un número de tarjeta");
    }
    else{
        validacion.innerText=validator.isValid(numTarjeta);
        cifrado.innerText=validator.maskify(numTarjeta);
        mostrarVal.style.display="block";
    }
});





