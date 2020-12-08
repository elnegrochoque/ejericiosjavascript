/*11- Realiza un script que pida por teclado 
3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let nombre;
let nombremayor;
let edades=0;
let edad;
for (let index = 0; index < 3; index++) {
    edad=parseInt(prompt("Ingrese la edad"));
    nombre=(prompt("Ingrese el nombre "))
    if (edad>edades) {
        edades=edad;
        nombremayor=nombre;        
    }    
}
document.write(nombremayor);