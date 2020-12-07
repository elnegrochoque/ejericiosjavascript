/*
4- Realiza un script que pida
números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y 
seguir pidiendo números. Al salir con “cancelar” 
deberá indicarse la suma total de los números introducidos.
*/
let bandera=true;
let numero;
let suma=0;
while (bandera==true) {
    bandera=confirm("¿Quiere ingresar un número?");
    if (bandera==true) {
        numero=parseInt(prompt("Ingrese el número"));
        if(isNaN(numero)){
            alert("No se ingreso un número valido");
        }else{
            numero=parseInt(numero);
            suma=suma+numero;  
        }
    } 
}
document.write(suma);