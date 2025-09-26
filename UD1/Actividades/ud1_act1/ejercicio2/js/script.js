var jugador1 = prompt("Juagador 1: ¿piedra, papel o tijera?");
var jugador2 = prompt("Jugador 2: ¿piedra, papel o tijera?");

if(jugador1==jugador2){
    console.log("Es un empate");
} else{

    switch (jugador1){
        case "piedra":{
            if(jugador2=="papel"){
                console.log("El gandaor es el jugador 2");
            }else{
                console.log("El gandaor es el jugador 1")
            }
            break;
        }
        case "papel":{
            if(jugador2=="tijera"){
                console.log("El gandaor es el jugador 2")
            }else{
                console.log("El gandaor es el jugador 1")
            }
            break;
        }
        case "tijera":{
            if(jugador2=="piedra"){
                console.log("El gandaor es el jugador 2")
            }else{
                console.log("El gandaor es el jugador 1")
            }
            break;

        }
    }
}
