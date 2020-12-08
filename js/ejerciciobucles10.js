/*10- Realiza un script que pida número de filas
y columnas y escriba una tabla. 
Dentro cada una de las celdas deberá escribirse
un número consecutivo en orden descendente.
Si, por ejemplo, la tabla es de 7×5 
los números irán del 35 al 1.
*/
let filas= parseInt(prompt("ingrese el numero de filas"));
let columnas= parseInt(prompt("ingrese el numero de columnas"));
let numero=1;
document.write("<table>")
for (let index = 0; index < filas; index++) {
    document.write("<tr>")
    for (let index = 0; index < columnas; index++) {
        document.write("<th>"+numero+"</th>");
        numero=numero+1;
    }
    document.write("</tr>");
}
document.write("</table>")
