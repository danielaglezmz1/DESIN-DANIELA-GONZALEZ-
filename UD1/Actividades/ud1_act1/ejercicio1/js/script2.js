
var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus Apellidos");
var anioNacimiento = prompt("Introduce tu fecha de nacimiento");
var dineroBanco = parseFloat(prompt("Introduce el dinero que tienes en el banco"));


function dineroDiezAnios(){
return dineroBanco +=10000;
}


console.log(" nombre: "+typeof(nombre)+", apellidos: "+typeof(apellidos)+ ", anioNacimiento: "+ typeof(anioNacimiento)+ ", dineroBanco: " +typeof(dineroBanco))
console.log(nombre+"\n"+apellidos)
dineroBanco = dineroDiezAnios();
console.log("Dentro de diez años tendras " +dineroBanco +" € en el banco.");
