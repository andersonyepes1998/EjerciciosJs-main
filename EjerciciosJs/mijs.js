/*
Calcular el salario de un empleado que gana $ 2.500.000.
Descontando el 8% de salud y el 10% de pension.


 1)
var salario = prompt("dijita tu salario: ");
var salud = parseInt (salario)*8/100;
var pension = parseInt (salario)*10/100;
var sueldo_a_pagar = parseInt (salario) - salud - pension;

alert("Su sueldo es de: "+salario+
            "\n el descuento es de salud: "+salud+
            "\n el descuento de la pension es de: "+pension+
            "\n el sueldo a pagar es de: "+ sueldo_a_pagar );

            /*
var nombre = "anderson";
document.write("<h1> hola " +nombre+ " </h1>"); 

2) 
var base = prompt ("Digita la base del triangulo: ");
var altura = prompt ("Digita la altura del triangulo: ");
var area = parseInt (base * altura) / 2;

alert("area es igual a: " + area );


3) 
var suma1 = prompt ("Digita un numero: ");
var suma2 = prompt ("Digita un numero: ");
var suma = parseInt(suma1) + parseInt(suma2);
var resta = suma1 - suma2;
var divi = suma1 / suma2;
var muti = suma1 * suma2;
var modulo = suma1 % suma2;

alert("la suma es: "+suma+
            "\n la resta es igual a: "+resta+
            "\n la divicion es igual a: "+divi+
            "\n la multiplicacion es igual a: "+muti+
            "\n el modulo es igual a: "+modulo);

4)
var numhora = prompt("Digita el numero de horas trabajadas: ");
var horanorma = prompt("Digita el valor de la hora normal: ");
var horaextra = prompt("el valor de la hora extra es: ");
var resultnor = parseInt(numhora * horanorma) + parseInt(numhora * horaextra);

alert ("El sueldo del tranbajador es de: "+resultnor);

5)
var prod = prompt("Ingresa el precio del producto: ");
var IVA = parseFloat(prod * 0.19);
var totapaga = parseFloat(prod) + parseFloat(IVA);

alert("El precio sin iva es igual a: "+prod+
            "\n El iva es igual a: "+IVA+
            "\n El precio total es igual a: "+totapaga);


11)
var edad = prompt("Digita tu edad: ");

if (edad < 18){
    alert("Usted es menor de edad");
}else if(edad >= 18 && edad <=28) {
    alert("Usted es adolecente ");
}else if(edad >= 49 && edad <=49){
    alert("Usted es adulto");
}else{
    alert("Usted es adulto mayor");
}

10)
var dia = prompt("Digita un numero del 1 al 7: ");
switch( parseInt (dia) ){
    case 1 : alert("lunes");
    break;
    case 2 : alert("Martes");
    break;
    case 3 : alert("Miercoles");
    break;
    case 4 : alert("Juesves");
    break;
    case 5 : alert("Viernes");
    break;
    case 6 : alert("Sabado");
    break;
    case 7 : alert("Domingo");
    break;
    default : alert("NUMERO INCORRECTO");
}

7)
var nota = prompt("Digite la nota: ");

if(nota <= 5 && nota >= 4.6){
    alert("Excelente");
}else if(nota >= 4.0){
    alert("Sobresaliente");
}else if(nota >= 3.0){
    alert("Aceptable"); 
}else{
    alert("Insuficiente");
}

8)
var num = prompt("Digite un numero: ");

if((num % 2) == 0 && num > 0 ){
    alert("Es par y es positivo.");
}else if(num < 0){
    alert ("Es negativo.");
}else{
    alert ("Es impar.");
}

9)
var num1 = prompt("Digite el primer numero: ");
var num2 = prompt("Digite el segundo numero: ");

if(num1 > num2 && num2 < num1 ){
    alert ("El numero mayor es: " +num1+ " y el numero menor es: "+num2);
}else{
    alert ("El numero mayor es: " +num2+ " y el numero menor es: "+num1);
}

12)
var pro1 = prompt("Ingrese el valor del primer producto: ");
var pro2 = prompt("Ingrese el valor del segundo producto: ");
var pro3 = prompt("Ingrese el valor del tercer producto: ");
var pago = prompt("como deseas pagar el porducto, Efectivo, Credito o por Cupon: ")

if (pago == "Efectivo"){
    valortota = parsefloat(pro1) + parsefloat(pro2) + parsefloat(pro3);
    alert ("El precio del producto es igual a: "+valortota);
}else if(pago == "Credito"){
    valortota = parseInt(pro1) + parseInt(pro2) + parseInt(pro3);
    descuento = valortota * 0.05;
    valortota = valortota + descuento;
    alert ("El precio del producto es igual a: "+valortota);
}else{
    valortota = parseInt(pro1) + parseInt(pro2) + parseInt(pro3);
    descuento = valortota * 0.03;
    valortota = valortota - descuento;
    alert ("El precio del producto es igual a: "+valortota);
}

13)
var nota1 = prompt("Primera nota: ");
var nota2 = prompt("Segunda nota: ");
var nota3 = prompt("Tercera nota: ");

promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

if(promedio > 00 && promedio <= 10){
    alert("Malo");
}else if(promedio <= 13){
    alert("Regular");
}else if(promedio <= 16){
    alert("Bueno");
}else{
    alert("Muy Bueno");
}

6)
var alhombres = prompt("ingrese el numero de hombres");
var almujeres = prompt("Digitar el numero de mujeres ");

var total = parseInt (alhombres)+ parseInt ( almujeres);
var porchombres =parseInt  (alhombres * 100 / total);
var porcmujeres =parseInt  (almujeres * 100 / total);

alert("El porcentaje de alumnos hombres es de: " +porchombres+ " %");
alert("El porcentaje de alumnos mujeres es de: " +porcmujeres+ " %");


//Ejercicio 7
var nota1 = prompt("ingrese la primera nota: ");
var nota2 = prompt("ingrese la segunda nota: ");
var nota3 = prompt("ingrese la tercera nota: ");
var nota4 = prompt("ingrese la cuarta nota: ");
var nota5 = prompt("ingrese la quita nota: ");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;

alert ("El promedio de las notas del alumno es de: " + promedio);*/

// 14 
var año = prompt("ingrese el año de nacimiento: ");
var añoactu = prompt("ingrese el año actual: ");

if(año <= añoactu){
    edad = añoactu - año;
    
    alert("la edad es iagual a: "+edad+ " años");
}