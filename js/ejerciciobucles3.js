/*3- Realiza un script que pida cadenas de texto
hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas 
las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let bandera=true;
let cadena;
let cadenasConcatenadas=" ";
while (bandera==true) {
    bandera=confirm("¿Quiere ingresar una cadena de texto?");
    if (bandera==true) {
        cadena=prompt("Ingrese una cadena de texto");
        cadenasConcatenadas=cadenasConcatenadas+" "+cadena;
    } 
}
document.write(cadenasConcatenadas);