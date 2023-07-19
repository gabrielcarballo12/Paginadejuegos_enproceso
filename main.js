
let oferta = prompt("¿Te gustaría recibir nuestras ofertas?").toLocaleLowerCase();

if (oferta === "si") {
  alert("Gracias. Ahora le pediremos unos datos!");

  let nombre = prompt("Ingresa tu nombre");
  console.log(`Tu nombre es ${nombre}`);

  let apellido = prompt(`Muchas gracias ${nombre}. Ahora podrías decirme tu Apellido?`);
  console.log(`Tu apellido es ${apellido}`);

  alert(`Muchas gracias y bienvenido/a ${nombre} ${apellido}`);
} else {
  alert("Gracias y bienvenido/a");
}
