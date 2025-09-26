/**
 * DESIN- UD1 Ejemplo 1 -Uso del depurador JS. Encontrar los errores del script
 * @author Javi G. Pisano
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

var nombres=[];
var CADENA_NOMBRES;
var numeroNombres=10;




for (var i=0;i<numeroNombres-1;i++){
	nombres[i]=prompt("Introduce un nombre");
} 


 for (var i=0;i<numeroNombres;i+1){
	CADENA_NOMBRES=CADENA_NOMBRES+"nombres[i]"+" ";
} 
 alert(nombres[i]);
 

