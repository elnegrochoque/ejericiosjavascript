/*14- Realiza un script que pida una cadena de texto
y lo muestre poniendo el signo – entre cada carácter
sin usar el método replace. Por ejemplo, si tecleo 
“hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
let cadena=prompt("Ingrese una cadena de texto");
for (let index = 0; index < cadena.length-1; index++) {
    document.write(cadena.charAt(index)+"-");
}
document.write(cadena.charAt(cadena.length-1));

