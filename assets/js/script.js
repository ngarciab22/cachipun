let cantidad; //Se crea variable cantidad
//Se inicia un bucle while
while (true){ 
    cantidad = parseInt(prompt("¡Hola jugador! Ingresa la cantidad de veces que desees jugar.")); //Se define la asignación de let cantidad
    if (cantidad > 0)break; //Se añade if para verificar que cantidad sea mayor que 0, de ser así se rompe el bucle
    else{
        alert("Ingresa un número válido.") //Se añade else en caso de que if no se cumpla
    }}

