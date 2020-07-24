
import validator from './validator.js';


const btnValidar = document.getElementById('btnValidar');
const cifrado = document.getElementById('cifrado');
const validacion = document.getElementById('validacion');
const mostrarVal = document.getElementById('seccionValidacion');
const mostrarNombre = document.getElementById('nombrecliente');
const mensaje=document.getElementById('mensaje');
const imgMensaje=document.getElementById('imgMensaje');
const seccionPago=document.getElementById('seccionPago');
const btnVolver =document.getElementById('btnVolver');


btnValidar.addEventListener('click', function(){
    var numTarjeta = document.getElementById('numTarjeta').value;
    var nombreExtraido=document.getElementById('nombre').value;

    if(numTarjeta === ''|| numTarjeta=== null||
    nombreExtraido=== ''|| nombreExtraido=== null)
    {
        alert("Por favor ingrese el dato solicitado");
    }
    else{
            mostrarNombre.innerText= nombreExtraido;
            cifrado.innerText=validator.maskify(numTarjeta);
            mostrarVal.style.display="block";
            seccionPago.style.display="none";

            if(validator.isValid(numTarjeta)===true)
            {
                
                validacion.innerText="válido";
                imgMensaje.innerHTML=`<img src="img/check.png">`;
                mensaje.innerText=",su operación se realizó con éxito ";
                cifrado.style.color="green";
                validacion.style.color="green";
            }
            else
            {
                validacion.innerText="inválido";
                imgMensaje.innerHTML=`<img src="img/error.png">`;
                mensaje.innerText=",por favor presione regresar para ingresar sus datos nuevamente"
                cifrado.style.color="red";
                validacion.style.color="red";
            }
            
        }

});
/*evento para regresar a la pantalla anterior*/
btnVolver.addEventListener('click', function(){
    document.getElementById('codSeg').value='';
    document.getElementById('numTarjeta').value='';
    document.getElementById('nombre').value='';
    document.getElementById('fechaExp').value='Mes';
    document.getElementById('fechaExpYear').value='Año';
    mostrarVal.style.display="none";
    seccionPago.style.display="block";
});
