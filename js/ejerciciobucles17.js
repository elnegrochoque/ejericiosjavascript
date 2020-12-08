/*17- Realiza un script que muestre
la posición de la primera vocal
de un texto introducido por teclado.*/

let cadena=prompt("Ingrese una cadena de texto");
let posicion=0;
let bandera=false;

while (bandera==false&&posicion<cadena.length) {
    if (cadena.charAt(posicion)=="a"||
    cadena.charAt(posicion)=="e"||
    cadena.charAt(posicion)=="i"||
    cadena.charAt(posicion)=="o"||
    cadena.charAt(posicion)=="u") {
    bandera=true;
    document.write("La posición es "+(posicion+1));
    }
    posicion++;
} 
if (bandera==false) {
    document.write("El texto no tiene vocales");
}