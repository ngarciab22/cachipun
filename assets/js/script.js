let cantidad; //Se crea variable cantidad
//Se inicia un bucle while
while (true){ 
    cantidad = parseInt(prompt("¡Hola jugador! Ingresa la cantidad de veces que desees jugar.")); //Se define la asignación de let cantidad
    if (cantidad > 0)break; //Se añade if para verificar que cantidad sea mayor que 0, de ser así se rompe el bucle
    else{
        alert("Ingresa un número válido.") //Se añade else en caso de que if no se cumpla
    }}

let empate = 0; //Se crea variable empate con asignación 0
let victoriaCompu = 0; //Se crea variable victoriaCompu con asignación 0
let victoriaUser = 0; //Se crea variable victoriaUser con asignacion 0
let eleccionUser; //Se crea variable eleccionUser
    