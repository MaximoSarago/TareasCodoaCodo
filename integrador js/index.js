/*$(function () {
  $('[data-toggle="tooltip"]').tooltip()
}) */


const cantidadEntradas = document.getElementById('cantidadEntrada')


const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')


botonCalcular.addEventListener('click',resumen)



const precioEntrada = 200


function resumen(){
  
  var descuentoAplicado = (precioEntrada * categoria.value / 100);
  console.log("El % de descuentoa a aplicar es: "+ categoria.value);
  console.log("El precio de la entrada es: "+ precioEntrada);
  console.log("Cantidad de entradas: "+cantidadEntradas.value);
  console.log("El descuento por entrada es: "+ descuentoAplicado);
  console.log("El descuento de todas las entrada es: "+ (descuentoAplicado*cantidadEntradas.value));

  cantidadEntradas.value;

  

  

  totalCompra.innerHTML=  ((cantidadEntradas.value * precioEntrada) - (descuentoAplicado * cantidadEntradas.value));

  

}

totalCompra.style.display="block"


