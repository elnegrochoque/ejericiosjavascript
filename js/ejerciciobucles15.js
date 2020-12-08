/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/
let texto=prompt("Ingrese el texto");
let contador=0;
for (let index = 0; index < texto.length; index++) {
    if (texto.charAt(index)=="a"||
    texto.charAt(index)=="e"||
    texto.charAt(index)=="i"||
    texto.charAt(index)=="o"||
    texto.charAt(index)=="u") {
        contador++;
    }
}
document.write(contador);


