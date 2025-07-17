// ACTIVIDAD 2: GUIA ESTRUCTURAS DE CONTROL JAVASCRIPT--------------------------------------------

// EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
let usuarios = [
    { nombre: "Fernanda", edad: 23 },
    { nombre: "Nashua", edad: 27 },
    { nombre: "Johana", edad: 16 },
    { nombre: "Julien", edad: 17 }]

function verEdad(edad) {
    // Operador ternario (que quede en una sola línea)
    return edad >= 18 ? "Usuario de mayor edad" : "Usuario de menor edad";

    /* ----Es lo mismo que escribir:
        if (edad >= 18) {
            return "Usuario de mayor edad";
        } else {
            return "Usuario de menor edad";
        }
    */
}

usuarios.forEach((persona) => { // Recorrer cada elemento del array usuarios
    console.log(persona.nombre + ": " + verEdad(persona.edad));
})


// EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: Examen =20%, tareas = 40%, asistencia = 10%, investigación = 30%. Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

let alumnos = [
    { nombre: "Elisse", carnet: "es1234", examen: 9, tareas: 8, asistencia: 10, investigation: 8 },
    { nombre: "Arthur", carnet: "ar4589", examen: 10, tareas: 7, asistencia: 9, investigation: 8 },
    { nombre: "Regis", carnet: "rg8526", examen: 7, tareas: 8, asistencia: 6, investigation: 7 },
    { nombre: "Evie", carnet: "ev3457", examen: 8, tareas: 9, asistencia: 7, investigation: 9 }]

function notaFinal(examen, tareas, asistencia, investigation) {
    let promedio = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigation * 0.3);
    return promedio;
}

alumnos.forEach((datos) => { //datos es el objeto actual
    // Imprimiendo la función (notaFinal) con sus respectivos parámetros (examen,tareas,asistencia,investigation) por medio del objeto creado (datos) 
    console.log("Alumno: " + datos.nombre + " | Carnet: " + datos.carnet + " | Promedio: " + notaFinal(datos.examen, datos.tareas, datos.asistencia, datos.investigation).toFixed(2)); // toFixed es para que quede con 2 decimales
})


// EJERCICIO 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial.

let trabajador = [
    { nombre: "Jude", salario: 500, categoria: "A" },
    { nombre: "Tared", salario: 500, categoria: "B" },
    { nombre: "Hoffman", salario: 500, categoria: "C" },
    { nombre: "Evelyn", salario: 500, categoria: "D" }]

function aumentoSalarial(categoria, salario) {
    if (categoria === "A") {
        return salario + (salario * 0.15);
    }
    else if (categoria === "B") {
        return salario + (salario * 0.30);
    }
    else if (categoria === "C") {
        return salario + (salario * 0.10);
    }
    else if (categoria === "D") {
        return salario + (salario * 0.20);
    }
    else {
        return salario;
    }
}

trabajador.forEach((info) => {
    console.log("Trabajador: " + info.nombre + " | Salario: " + info.salario + " | Categoría: " + info.categoria + " | Aumento salarial: $" + aumentoSalarial(info.categoria, info.salario));
})


// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.

let numero1 = 8;
let numero2 = 15;

function numMayor(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2;

    /* ----Es lo mismo que escribir:
        if (valor1 > valor2) {
            return valor1;
        } else {
            return valor2;
        }
    */
}

console.log("El número mayor es: " + numMayor(numero1, numero2));


// EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
// coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
// aplicara en base a lo que selecciono el usuario.


// Seleccionando btn del HTML
let btnFiesta = document.querySelector('#btnFiesta'); 
let btnFocus = document.querySelector('#btnFocus');
let btnEscape = document.querySelector('#btnEscape');

function calDescuento(modelo){
    let precio = 1000;

    if(modelo === "FORD FIESTA"){
        return precio - (precio*0.05);
    }else if(modelo === "FORD FOCUS"){
        return precio - (precio*0.10);
    }else if(modelo === "FORD ESCAPE"){
        return precio - (precio*0.20);
    }
}

btnFiesta.addEventListener('click', ()=>{ // Si selecciona el btn FORD FIESTA
    console.log("Precio total del FORD Fiesta con descuento del 5%: $"+calDescuento("FORD FIESTA").toFixed(2)); // Se le pasó un String al parámetro "modelo" de la función, esta vez no fue una variable como en los ejercicios del 1 al 3
})

btnFocus.addEventListener('click', ()=>{ // Si selecciona el btn FORD FOCUS
    console.log("Precio total del FORD Focus con descuento del 10%: $"+calDescuento("FORD FOCUS").toFixed(2)); // Se le pasó un String al parámetro "modelo" de la función, esta vez no fue una variable como en los ejercicios del 1 al 3
})

btnEscape.addEventListener('click', ()=>{ // Si selecciona el btn FORD ESCAPE
    console.log("Precio total del FORD Escape con descuento del 20%: $"+calDescuento("FORD ESCAPE").toFixed(2)); // Se le pasó un String al parámetro "modelo" de la función, esta vez no fue una variable como en los ejercicios del 1 al 3
})



// EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el usuario introduce como origen la ciudad de Palma 
// y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.

let turistas = [
    { nombre: "Claudia", precio: 300, destino: "Costa de Sol" },
    { nombre: "Jorge", precio: 300, destino: "Panchimalco" },
    { nombre: "Emily", precio: 300, destino: "Puerto el Triunfo" },
    { nombre: "Carry", precio: 300, destino: "Costa de Sol" }]

function descuento(precio, destino) {
    if (destino === "Costa de Sol") {
        return precio - (precio * 0.05); // Otra manera de retornar sin crear variables a diferencia del Ejercicio 2 que sí se creó la variable "promedio"
    }
    else if (destino === "Panchimalco") {
        return precio - (precio * 0.10);
    }
    else if (destino === "Puerto el Triunfo") {
        return precio - (precio * 0.15);
    }
    else {
        return precio; // si el destino no es ciudad de Palma, entonces no hay descuento
    }
}


turistas.forEach((dato) => {
    console.log("Turista: " + dato.nombre + " | Destino: " + dato.destino + " | Total a pagar: " + "$" + descuento(dato.precio, dato.destino));
})


/* EJERCICIO 7: Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.*/

let valores = [-5, 15, 30, 20, -10, 7, 45, -60, 25, 58];

let valNegativos = 0;
let valPositivos = 0;
let valMultiplo15 = 0;
let valAcumPares = 0;

valores.forEach((num) => {
    // Encontrando los positivos y los negativos
    if (num > 0) {
        valPositivos++;
    } else if (num < 0) {
        valNegativos++;
    }

    // Encontrando los múltiplos de 15 y el valor acumulativo de los pares
    if (num % 15 === 0 && num !== 0) { // múltiplos de 15
        valMultiplo15++;
    }

    if (num % 2 === 0) { //pares
        valAcumPares += num; //Si el número es divisible por 2 (es par), += indica que se suma al acumulado
    }
})

// Imprimiendo los números
console.log("Cantidad de números positivos: " + valPositivos);
console.log("Cantidad de números negativos: " + valNegativos);
console.log("Cantidad de múltiplos de 15: " + valMultiplo15);
console.log("Valor acumulado de números pares: " + valAcumPares);


//EJERCICIO 8: Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.

let index = [1,2,3,4,5,6,7,8,9,10];
let numero = 7 // Número para multiplicar

index.forEach((value)=>{ //value es cada número del array [1..10]
    let resultado = value * numero;
    console.log(numero+"x"+value+" = "+resultado);
})



/*EJERCICIO 9: Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”*/

let gCelsius = 25;

function farenheit(temperatura){
    let gFarenheit = (temperatura * 9/5) + 32;
    console.log("Temperatura en Fahrenheit: " + gFarenheit.toFixed(2) + "°F"); // Imprimiendo Temperatura en Fahrenheit dentro de la función

    if(gFarenheit >= 14 && gFarenheit < 32){
        return "Temperatura baja";
    }else if(gFarenheit >= 32 && gFarenheit < 68){
        return "Temperatura adecuada";
    }else if(gFarenheit >= 68 && gFarenheit < 96){
        return "Temperatura alta";
    }else{
        return "Temperatura desconocida";
    }
}

console.log(farenheit(gCelsius));



/* EJERCICIO 10: Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web. Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor*/


function calcularPromedios() {
    // Obteneniendo todos los inputs por turno
    let morningInputs = document.querySelectorAll('.edadTurnoMorning');
    let tardeInputs = document.querySelectorAll('.edadTurnoTarde');
    let nocheInputs = document.querySelectorAll('.edadTurnoNoche');

    // Función para calcular el promedio de edades de un grupo de inputs
    function calcularPromedio(inputs) {
        let suma = 0; // almacenará la suma de todas las edades que el usuario ingrese
        inputs.forEach((input) => {
            let valor = parseInt(input.value); //input.value es para obtener el valor que se ingrresó y parseInt() convierte ese valor en número
            //Si el campo está vacío o contiene letras, parseInt() devolverá NaN
            if (!isNaN(valor)) { //isNaN(valor) devuelve true si valor es letras. Por eso se coloca !, para negar que valor es una letra y sí un numero
                suma += valor; // Es igual a suma = suma + valor
            }
        });
        return suma / inputs.length; // Retorna el promedio, inputs.length es la CANTIDAD de elementos del arreglo
    }

    // Calcular promedios pasándole los parámetros de los inputs ingresados
    let promedioMorning = calcularPromedio(morningInputs); // Es mejor crear variable para guardar este dato, ya que se usará esa variable para imprimirlo en los if
    let promedioTarde = calcularPromedio(tardeInputs);
    let promedioNoche = calcularPromedio(nocheInputs);

    // Imprimir los promedios
    console.log("Promedio de edad - Turno Mañana: " + promedioMorning.toFixed(2));
    console.log("Promedio de edad - Turno Tarde: " + promedioTarde.toFixed(2));
    console.log("Promedio de edad - Turno Noche: " + promedioNoche.toFixed(2));

    // Determinando cuál tiene el mayor promedio
    let mensaje = ""; // Creando variable vacío para guardar string, similar a let numero = 0;
    if (promedioMorning > promedioTarde && promedioMorning > promedioNoche) {
        mensaje = "El turno con mayor promedio de edad es: Mañana";
    } else if (promedioTarde > promedioMorning && promedioTarde > promedioNoche) {
        mensaje = "El turno con mayor promedio de edad es: Tarde";
    } else if (promedioNoche > promedioMorning && promedioNoche > promedioTarde) {
        mensaje = "El turno con mayor promedio de edad es: Noche";
    } else {
        mensaje = "Dos o más turnos tienen el mismo promedio más alto";
    }

    console.log(mensaje);
}
