var numero= prompt("por favor, introduce un número")

function tablaMultiplicarnum(num){
    let resultado = "\n";
    for (let index = 1; index <= 10; index++) {
        resultado +=num + "*"+ index +"=" +num*index +"\n";
        
    }
}

console.log(tablaMultiplicarnum(numero));