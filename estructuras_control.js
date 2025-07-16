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
    console.log("Alumno: " + datos.nombre + " Carnet: " + datos.carnet + " Promedio: " + notaFinal(datos.examen, datos.tareas, datos.asistencia, datos.investigation).toFixed(2)); // toFixed es para que quede con 2 decimales
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



// EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el usuario introduce como origen la ciudad de Palma 
// y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.

let turistas = [
    { nombre: "Claudia", precio: 300, destino: "Costa de Sol" },
    { nombre: "Jorge", precio: 300, destino: "Panchimalco" },
    { nombre: "Emily", precio: 300, destino: "Puerto el Triunfo" },
    { nombre: "Carry", precio: 300, destino: "Costa de Sol" }]

function descuento(precio, destino) {
    if (destino === "Costa de Sol") {
        return precio - (precio * 0.05); // Otra manera de retornar sin crear variables como en el Ejercicio 2
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


//EJERCICIO 7: Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
/*• La cantidad de valores negativos ingresados.
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

index.forEach((value)=>{
    let resultado = value * numero;
    console.log(numero+"x"+value+" = "+resultado);
})

