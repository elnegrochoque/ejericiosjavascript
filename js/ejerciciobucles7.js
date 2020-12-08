/*7- Haz un script que escriba una pirámide inversa 
de los números del 1 al número que indique el usuario
(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
numero=parseInt(prompt("Ingrese un numero menor que 50"));
numero1=numero;
if (numero<=50) {
    for (let index = 0; index< numero; index++) {
        for (let index1 = 0; index1 < numero1; index1++) {
            document.write(numero-index);
        }
        numero1=numero1-1
        document.write("</br>");
    }    
}