let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let num3 = parseInt(prompt("ingrese el tercer numero"));
if (num1<num2) {
    if (num3<num2) {
        document.write("El segundo numero es mayor: "+num2);
    } else {
        if (num3==num2) {
            document.write("El segundo y el tercer numero son iguales ");
        } else {
            document.write("El tercer numero es mayor: "+num3);
        }   
    }
} else {
    if (num1>num3) {
        document.write("El primer numero es mayor: "+num1)
    }else{
        if (num1==num3) {
            document.write("El primer y el tercer numero son iguales ");
        } 
    }
}