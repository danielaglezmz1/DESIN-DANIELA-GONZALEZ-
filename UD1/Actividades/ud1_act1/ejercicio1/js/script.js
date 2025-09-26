
  var nombre = "Daniela";
  var apellidos ="González Muñiz";
  var anioNacimiento= "14-02-2002";
  var dineroBanco= 2000; 
 

/*
var nombre;
var apellidos;
var anioNacimiento;
var dineroBanco;
*/

function dineroDiezAnios(){
return dineroBanco +=10000;
}


console.log(" nombre: "+typeof(nombre)+", apellidos: "+typeof(apellidos)+ ", anioNacimiento: "+ typeof(anioNacimiento)+ ", dineroBanco: " +typeof(dineroBanco))
console.log(nombre+"\n"+apellidos)
dineroBanco = dineroDiezAnios();
console.log("Dentro de diez años tendras " +dineroBanco +" € en el banco.")