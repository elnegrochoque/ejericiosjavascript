/*8- Crea script para generar pirámide siguiente 
con los números del 1 al número que indique el usuario 
(no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let numero=parseInt(prompt("Ingrese un numero menor que 50"));
let contador=1;
if (numero<=50) {
    for (let index = 1; index < numero+1; index++) {
        for (let index1 = 0; index1 < index; index1++) {
            document.write(contador);
            contador++;
        }
        contador=1;
        document.write("</br>");
    }
}