let players = ["Jose", "Cristina", "Juan", "Pedro", "Lucía", "Vanessa"]

let listaDeVivos = players; 

let listaDeMuertos = [];

let jugadorSacrificado = "";
if (listaDeVivos.length > 0) {
    //si la longitud del array es mayor a 0 entonces pasa lo siguiente

    let indiceAleatorio = Math.floor((Math.random() * listaDeVivos.length)); //generar un numero entero desde 0 hasta la longitud del array

    let nombreDelJugadorSeleccionado = listaDeVivos[indiceAleatorio];

    let jugadorSacrificado = listaDeVivos[indiceAleatorio];


    listaDeMuertos.push(nombreDelJugadorSeleccionado); // enviamos al jugador seleccionado a la lsita de muertos

    listaDeVivos.splice(indiceAleatorio, 1); // eliminar al jugador seleccionado de la lista de vivos

    document.querySelector("#subtitulo").innerHTML = JSON.stringify(jugadorSacrificado)

    console.log(listaDeVivos); // console.log   de lista de vivos
// selecciona un indice aleatorio dentro del array
}