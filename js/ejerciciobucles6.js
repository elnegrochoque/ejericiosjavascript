/*6- Realiza un script que escriba una 
pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/
for (let index = 1; index < 31; index++) {
    for (let index1 = 0; index1 < index; index1++) {
        document.write(index);
    }
    document.write("</br>");
}