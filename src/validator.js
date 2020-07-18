const validator = {
    //Función para 
  isValid:function isValid(creditCardNumber)
  {
    let contenedor = [];
    //length=método para obtener número de caracteres de la cadena
    let longIMEI= creditCardNumber.length;
    let suma=0;
    //varieble que almacena el valor duplicado
    let numDupli;
    let resto;
   //for para invertir ,duplicar y sumar digitos mayores a dos cicfras
    for (var i = 0; i<longIMEI; i++) 
    {
    //y= número extraido
    //substr=metodo para obtener un caracter en una posición
    let y=creditCardNumber.substr(longIMEI-1-i,1);
    //verifica el resto para ver si es par o impar
      switch(i%2)
      {
    //resto = 0 significa que la posición es par
        case 0:
            contenedor[i]=parseInt(y,10);
        break;
    //resto = 1 significa que la posición es impar
        case 1:
            numDupli=parseInt(y,10)*2;
            if(numDupli.toString().length==1)
              {
                contenedor[i]=numDupli;
              }
              else if(numDupli.toString().length==2)
                {
                  //convertir a string el número duplicado y asignarlo a w
                  let w=String(numDupli);
                  let sumaDig=parseInt(w.substr(0,1))+parseInt(w.substr(1,1));
                  contenedor[i]=sumaDig;
                }  
        break;
      }
    let z=contenedor[i];
    suma=suma+z;
    resto=suma%10;
    }
  //verifica el resto para retornar el valor
    if(resto==0)
    {
    return "válido";
    }
      else
      {
          return "inválido";
      }
  }
  
  ,
  
  //mostrar solo los últimos 4 digitos
  maskify:function maskify(creditCardNumber)
  {
    let mostrarUltimo=[];
    let longCard= creditCardNumber.length;
    //let unirNum;
    for(var j=0;j<longCard-4;j++)
      {
        mostrarUltimo[j]="#";
      }
    let unirNum=mostrarUltimo.join("")+creditCardNumber.substr(longCard-4,4);

    return unirNum;
  
  }
};

export default validator;




