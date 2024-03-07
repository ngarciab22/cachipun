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

//Se inicia el bucle for
for(let i = 0; i < cantidad; i++){  //Se asigna un valor al iterador, se define que sea menor que cantidad y que en cada iteración del bucle aumente en 1
    while (true) { //Se añade bucle while
        eleccionUser = prompt("Elige piedra, papel o tijera:").toLowerCase(); //Se asigna el valor a eleccionUser
        if (eleccionUser === "piedra" || eleccionUser === "papel" || eleccionUser === "tijera")break; //Se añade if para verificar que eleccionUser sea === a los string
        else {
            alert("Por favor, ingresa una opción válida (piedra, papel o tijera).");//En caso de que se cumpla el if se pide reingresar la opción
        }
    }
    let eleccionCompu = Math.floor(Math.random()*3)//Se añade función para obtener números aleatorios entre 0, 1 y 2
    //Se añade if para verificar eleccionCompu === 0
    if(eleccionCompu === 0) {
        alert("La máquina ha elegido piedra.");
    } 
    //Se añade else if para verificar eleccionCompu === 1
    else if(eleccionCompu === 1){
        alert("La máquina ha elegido papel.");
    } 
    //Se añade else if para verificar eleccionCompu === 2
    else if(eleccionCompu === 2){
        alert("La máquina ha elegido tijera.");
    }
    //Se añade if para determinar empate por jugada
    if ((eleccionCompu === 0 && eleccionUser === "piedra") || (eleccionCompu === 1 && eleccionUser === "papel") || (eleccionCompu === 2 && eleccionUser === "tijera")){
        alert("Ha habido un empate."); empate++ //Contador de jugadas empatadas
    }
    //Se añade else if para determinar victoria de la máquina por jugada
    else if  ((eleccionCompu === 0 && eleccionUser === "papel") || (eleccionCompu === 1 && eleccionUser === "tijera") || (eleccionCompu === 2 && eleccionUser === "piedra")){
        alert("Has ganado."); victoriaUser++ //Contador de jugadas con victoria del usuario
    }
    //Se añade else if para determinar victoria del usuario por jugada
    else if ((eleccionCompu === 0 && eleccionUser === "tijera") || (eleccionCompu === 1 && eleccionUser === "piedra") || (eleccionCompu === 2 && eleccionUser === "papel")){
        alert("La máquina ha ganado."); victoriaCompu++ //Contador de jugadas con victoria de la máquina
    }
}

//Se añade if para determinar si hubo empate como resultado final
if (empate == (victoriaCompu === victoriaUser)){
    alert("Ha habido un empate ¡Gracias por jugar!")
}
//Se añade else if para determinar si hubo victoria de parte del usuario como resultado final
else if (victoriaCompu < victoriaUser){
    alert("¡Te felicitó! ¡Eres el ganador del juego!")
}
//Se añade else if para determinar si hubo victoria de parte de la máquina como resultado final
else if (victoriaUser < victoriaCompu){
    alert("Has perdido ¡Gracias por jugar!")
}

document.write(`En total hubo una cantidad de ${empate} empate(s), ${victoriaCompu} victoria(s) de la máquina y ${victoriaUser} victoria(s) del jugador.`)